import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Masukkan teks.\nContoh: *.neon Skizo || Team';

  m.reply('Tunggu sebentar...');

  let text = encodeURIComponent(args.join(' '));
  let apiUrl = `https://skizo.tech/api/party-neon?text=${text}&apikey=${global.xzn}`;

  let res = await fetch(apiUrl);
  let buffer = await res.buffer();

  await conn.sendFile(m.chat, buffer, 'neon.jpg', '', m, false, {
    mimetype: 'image/jpeg',
    thumbnail: buffer,
  });
};

handler.help = ['neon'];
handler.tags = ['maker'];
handler.command = /^(neon)$/i;
handler.limit = true;

export default handler;