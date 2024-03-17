async function handler(m, { conn, text, usedPrefix, command }) {
 if (!text) {
 throw `Masukkan Judul panggilan!\n\nContoh: ${usedPrefix + command} tes`
 }
 var call = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  Date.now(),
 title: `${text}`
 }
}
conn.relayMessage(m.chat, call, {})
}

handler.command = handler.help = ['joincall', 'call']
handler.tags = ['tools']
handler.owner = true

module.exports = handler