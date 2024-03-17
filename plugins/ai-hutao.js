import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, text, command }) => {

  if (!text) return m.reply('Uhmm')
  let hmm = { mentions: [m.sender], contextInfo: { forwardingScore: 256, isForwarded: true }};
  let ouh = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=hutao`)
let gyh = await ouh.json()
await conn.sendMessage(m.chat, {
      text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
      title: `C-AI Hutao`,
      body: "",
      thumbnailUrl: "https://telegra.ph/file/331dfe030954b22c2cb7f.jpg",
      sourceUrl: "https://chat.whatsapp.com/JZLyu0D69ufCbXfDyxeI0t",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, m);
}
handler.help = ['caihutao', 'hutao']
handler.tags = ['ai']
handler.command = ['caihutao', 'hutao']
handler.limit = true
handler.premium = false

export default handler