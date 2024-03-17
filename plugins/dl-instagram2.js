import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import { igdl } from '../scraper/instagramDl.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://www.instagram.com/reel/CsC2PQCNgM1/?igshid=NTc4MTIwNjQ2YQ==`
	if (!text) return m.reply(input)

m.reply(wait)
  let cap = `乂 *I N S T A G R A M*\n\n*Result*: ${usedPrefix + command}\n*Url*: ${text}`
 
igdl
(text).then((ig) => {
 conn.sendMessage(m.chat, { video: { url: ig[0].url }, caption: cap }, m)
})

}
handler.help = ['instagram2 <link>']
handler.tags = ['downloader']
handler.command = /^(instagram2|igdl2|ig2|instagramdl2)$/i
handler.limit = true
handler.register = true

export default handler