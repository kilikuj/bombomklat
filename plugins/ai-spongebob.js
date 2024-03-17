import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, text, command }) => {

  if (!text) return m.reply('Haii Aku adalah Sebuah Kotak')
  let hmm = { mentions: [m.sender], contextInfo: { forwardingScore: 256, isForwarded: true }};
  let ouh = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=spongebobsquarepants`)
let gyh = await ouh.json()
await conn.sendMessage(m.chat, {
      text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
      title: `C-AI SpongeBob Squarepants`,
      body: "",
      thumbnailUrl: "https://telegra.ph/file/c0767f31400561983566f.jpg",
      sourceUrl: "https://chat.whatsapp.com/JZLyu0D69ufCbXfDyxeI0t",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, m);
}
handler.help = ['caisquarepants', 'squarepants']
handler.tags = ['ai']
handler.command = ['caisquarepants', 'squarepants']
handler.limit = true
handler.premium = false

export default handler