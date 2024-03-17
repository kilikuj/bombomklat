import fetch from 'node-fetch';

const handler = async (m, { conn: akiraa, text }) => {
  if (!text) return akiraa.reply(m.chat, 'Masukan pertanyaan', akiraa.fakegroup);
  m.reply('Loading...');
  const res = await fetch(`https://api.azz.biz.id/api/youbot?q=${text}&key=global`);
  const data = await res.json();
  const hasil = `
° *A I   Y O U . C O M*

${data.hasil}
`;
  await conn.sendMessage(m.chat, {
    text: hasil,
    contextInfo: {
      externalAdReply: {
        title: 'AI YOU.COM',
        body: '',
        thumbnailUrl: 'https://telegra.ph/file/bed3c8c2380e5025d98d3.png',
        sourceUrl: null,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
};

handler.command = handler.help = ['ai-you', 'youai', 'aiy'];
handler.tags = ['ai'];

export default handler;