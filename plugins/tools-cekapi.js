import fetch from 'node-fetch';

const handler = async (m, { text }) => {
  if (!text) throw '*Example*: .cekapikey jomokers';

  const apikey = text.trim();
  const url = `https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`;
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })
  const response = await fetch(url);
  const result = await response.json();

  if (result.status !== 200) throw 'Terjadi kesalahan pada server.';
  if (result.message !== 'success') throw 'API key tidak valid atau tidak ditemukan.';

  const { username, requests, today, account_type, expired } = result.result;

  let teks = `*•  S T A T U S A P I K E Y*\n\n`;
  teks += `┌  ◦  *Username* : ${username}\n`;
  teks += `│  ◦  *Jumlah requests* : ${requests}\n`;
  teks += `│  ◦  *Requests hari ini* : ${today}\n`;
  teks += `│  ◦  *Tipe akun* : ${account_type}\n`;
  teks += `└  ◦  *Masa berlaku* : ${expired}\n`;

  m.reply(teks);
};

handler.help = ['cekapikey', 'checkapikey'];
handler.tags = ['tools'];
handler.command = /^(cek|check)apikey|api$/i;

export default handler;