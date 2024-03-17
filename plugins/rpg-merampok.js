let handler = async (m, { conn, text, usedPrefix, command }) => {
  let dapat = Math.floor(Math.random() * 50000) + 50000; // Merampok dengan jumlah antara 50.000 hingga 100.000
  let successRate = Math.random() < 0.5; // Tingkat keberhasilan antara 20%-50%
  let target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;

  let __timers = new Date() - global.db.data.users[m.sender].lastrob;
  let _timers = 86400000 - __timers; // 1 hari dalam milidetik
  let timers = clockString(_timers);

  let users = global.db.data.users;
  if (new Date() - global.db.data.users[m.sender].lastrob > 86400000) { // Memeriksa apakah sudah 1 hari
    if (50000 > users[target].money || !successRate) {
      conn.reply(m.chat, `Merampok ${await conn.getName(target)} gagal!`, m);
    } else {
      users[target].money -= dapat;
      users[m.sender].money += dapat;
      global.db.data.users[m.sender].lastrob = new Date() * 1;
      conn.reply(m.chat, `Berhasil merampok ${await conn.getName(target)} dan kamu mendapatkan Rp.${dapat}`, m);
    }
  } else {
    conn.reply(m.chat, `Kamu sudah merampok hari ini, tunggu ${timers} untuk merampok lagi`, m);
  }
}

handler.help = ['merampok'];
handler.tags = ['rpg'];
handler.command = /^merampok|rob$/i;
handler.limit = true;
handler.group = true;

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('');
}
