

import { igdl } from '../scraper/igdl.js'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://www.instagram.com/reel/CsC2PQCNgM1/?igshid=NTc4MTIwNjQ2YQ==`
if (!text) return m.reply(input)
let no = 1
let cap = `乂 *I N S T A G R A M*\n\n*Result${no++}*: ${usedPrefix + command}\n*Url*: ${text}`
m.reply(wait)
const { status, media } = await igdl(text);
if (status === 200) {
} else {
throw eror
}
for (let result of media) {
 conn.sendMessage(m.chat, { video: { url: result }, caption: cap }, {quoted: m})
 await conn.delay(1500)
 }
}
handler.help = ["instagram"]
handler.tags = ['downloader']
handler.command = /^(instagram|igdl|ig|instagramdl)$/i
handler.limit = true
handler.register = true

export default handler