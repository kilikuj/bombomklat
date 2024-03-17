let handler = async (m, { conn, text, owner }) => {
    // Pastikan hanya owner yang dapat mengakses fitur ini
    if (m.sender !== owner) {
        return conn.reply(m.chat, 'Command ini hanya bisa diakses oleh owner.', m);
    }

    if (text) {
        // Ganti bagian ini dengan logika pengaturan sesuai kebutuhan Anda
        global.db.data.chats.sWelcome = text;
        m.reply("Succeed");
    } else {
        throw "The text?";
    }
};

handler.help = ["setwelcome"];
handler.tags = ["group"];
handler.command = /^setwelcome$/i;

handler.group = true;
handler.owner = true;
handler.admin = true;  // Ganti admin dengan owner

export default handler;
