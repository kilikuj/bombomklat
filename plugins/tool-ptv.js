let handler = async (m, { conn, usedPrefix, command }) => {
    let p = m.quoted ? m.quoted : m
        
	let q = p.message ? p.message : p.mediaMessage
	if (!q) return m.reply('Reply videonya!')
conn.relayMessage(m.chat, { ptvMessage: q.videoMessage }, {})
}
handler.help = ['toptv']
handler.tags = ['tools']

handler.command = /^to(ptv)$/i

export default handler