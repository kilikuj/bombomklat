import fetch from 'node-fetch';
import axios from 'axios';

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia?`;
  let name = conn.getName(m.sender);
  await conn.sendMessage(m.chat, { react: { text: `🕛`, key: m.key } });
  let { key } = await conn.sendMessage(m.chat, { text: `Hai ${name}` });

  let messages = [
    { role: 'system', content: `\\Hallo Sayang` },
    { role: 'user', content: text }
  ];

  let ini = (await axios.post(`https://skizo.tech/api/openai?apikey=${global.xzn}`, { messages })).data;
  await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });

  let hasil = `${ini.result}\n${wm}`;
  await conn.sendMessage(m.chat, { text: `${hasil}`, edit: key });
};

handler.help = ['cai'];
handler.tags = ['ai'];
handler.command = /^(cai)$/i;
handler.premium = true;

export default handler;