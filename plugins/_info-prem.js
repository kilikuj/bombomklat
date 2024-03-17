import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
❏「 *Premium* 」
 ❃ *1 Minggu:* Rp.5.000
 ❃ *2 Minggu:* Rp.10.000
 ❃ *1 Bulan:* Rp.20.000
 ❃ *1 Tahun:* Rp.40.000p_

❏keuntungan user premium?
🔓 unlock fitur *(Ketik .menuprem)*
🔓 limit Unlimited
Jika Berminat Silahkan Hubungi Owner Vynaa
*(Ketik .owner)*
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: ` © Euphyllia MD`,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/5e7b016d205510ae14fb2.jpg`,
      sourceUrl: `https://chat.whatsapp.com/EgDgZS8tCDC86RHnazVQ00`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(prem|premium|buyprem)$/i;

export default handler;