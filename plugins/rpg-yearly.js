const yearlyExp = 5000;
const yearlyMoney = 100000;
const yearlyLimit = 365;

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lastyearly + 31536000000; // 1 tahun dalam milidetik
    if (new Date() - global.db.data.users[m.sender].lastyearly < 31536000000) {
        throw `Kamu Sudah Mengambilnya Tahun Ini\nTunggu Selama ${msToTime(time - new Date())} Lagi`;
    }

    global.db.data.users[m.sender].exp += yearlyExp;
    global.db.data.users[m.sender].money += yearlyMoney;
    global.db.data.users[m.sender].limit += yearlyLimit;
    conn.reply(m.chat, `Selamat Kamu Mendapatkan:\n\n+${yearlyExp} Exp\n+${yearlyMoney} Money\n+${yearlyLimit} Limit`, m);
    global.db.data.users[m.sender].lastyearly = new Date() * 1;
};

handler.help = ['tahunan'];
handler.tags = ['rpg'];
handler.command = /^(tahunan)$/i;

handler.fail = null;

export default handler;

function msToTime(duration) {
    var days = Math.floor(duration / (24 * 60 * 60 * 1000));
    var hours = Math.floor((duration % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var minutes = Math.floor((duration % (60 * 60 * 1000)) / (60 * 1000));
    var seconds = Math.floor((duration % (60 * 1000)) / 1000);

    days = (days < 10) ? "0" + days : days;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return days + " Hari " + hours + " Jam " + minutes + " Menit " + seconds + " Detik";
}
