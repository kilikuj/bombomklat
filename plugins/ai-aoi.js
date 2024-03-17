import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*example:* ${usedPrefix + command} Good morning`
    let b = `https://api.yanzbotz.my.id/api/tts/aoi?query=${text}`
    conn.sendFile(m.chat, b, '', null, m, true)
}

handler.help = ['ttsanime','speak']
handler.tags = ['ai', 'internet']
handler.command = /^(ttsanime|speak)$/i
handler.limit = true

export default handler