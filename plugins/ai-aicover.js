import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";

Object.value = function parseMention(text) {
  let match = text.match(/@(\d+)/);
  return match ? match[1] : null;
};

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!mime) throw 'where is the photo? u want me to take a pic of ur mom?';
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`;

    let wait = "Menunggu..."
    m.reply(wait);

    let img = await q.download();
    let url = await uploadImage(img);

    let apiResponse = await fetch(`https://api.yanzbotz.my.id/api/ai/bardimg?query=${text}&url=${url}&apiKey=user`);
    let data = await apiResponse.json();

    const erka = data.result;

    await conn.sendFile(m.chat, erka, m);
  } catch (e) {
    console.error("Error:", e);
    conn.reply(m.chat, e, m);
  }
};

handler.help = ["bardimg"];
handler.tags = ["ai", "tools"];
handler.command = ["bardimg"];

export default handler;