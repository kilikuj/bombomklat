import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Example:* ${usedPrefix + command} blabla`;

  m.reply('Please wait...');

  let black = await fetch(`https://api.yanzbotz.my.id/api/ai/blackbox?query=${text}`);
  let box = await black.json();

  if (box.status !== 200) throw `❌ Terjadi error saat menjalankan perintah`;

  let hasil = `° *A I   B L A C K  B O X*

${box.result}`;

  let pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");

  await conn.sendMessage(m.chat, {
    text: hasil,
    contextInfo: {
      externalAdReply: {
        title: "AI -- BLACKBOX",
        body: '',
        thumbnailUrl: pp,
        sourceUrl: null,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
};

handler.command = handler.help = ["blackbox"];
handler.tags = ["ai"];
export default handler;