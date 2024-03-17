let handler = async (m, { conn, text }) => {
if(!text) throw `masukan id group`
conn.relayMessage(text, {
scheduledCallCreationMessage: {
callType: 1,
scheduledTimestampMs:  Date.now(),
title: "Clear Call"
}
}, {})
}
handler.command = handler.help = ['warcall2']
handler.owner = true 
export default handler