let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    let who = m.isGroup ? (m.mentionedJid[0] || (m.quoted ? m.quoted.sender : args[1])) : m.chat;
    let user = db.data.users[who];
    if (!who) throw "Siapa yang ingin dijadikan Premium?";
    let txt = args[1]?.replace('@' + who.split('@')[0], '').trim();
    if (!txt) throw "Mau berapa hari Premium?";
    if (isNaN(txt)) return m.reply("Hanya nomor yang diterima!\n\nContoh:\n" + usedPrefix + command + " @" + m.sender.split('@')[0] + " 7");
    var jumlahHari = 86400000 * txt;
    var now = new Date() * 1;
    if (now < user.premiumTime) {
        user.premiumTime += jumlahHari;
    } else {
        user.premiumTime = now + jumlahHari;
    }
    user.premium = true;
    m.reply("Berhasil\n*Nama:* " + user.name + "\n*Selama:* " + txt + " Hari");
};

handler.help = ['addprem'];
handler.tags = ['owner'];
handler.command = /^(add|tambah|\+)p(rem)?$/i;
handler.group = false;
handler.rowner = true;

export default handler;