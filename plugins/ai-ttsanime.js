import fetch from 'node-fetch';

const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  let str = m.quoted && m.quoted.text ? m.quoted.text : text;
  if (!str) throw 'Masukkan teks!';
  try {
    conn.sendPresenceUpdate('recording', m.chat);
    let voice = await (await fetch(`https://skizo.tech/api/tts-anime?text=${encodeURIComponent(str)}&lang=&voice=hu_tao&speed=0.6&symbol=~&apikey=${global.xzn}`)).json();
    conn.sendFile(m.chat, voice.data.url, 'voicevox.mp3', null, m, true);
  } catch (e) {
    console.log(e);
    m.reply(e?.message);
  }
}

handler.help = ['ttsanime'];
handler.tags = ['ai'];
handler.command = /^(animetts|ttsanime)$/i;

handler.limit = 5;

export default handler;