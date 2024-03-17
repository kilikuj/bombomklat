import { YT } from '../scraper/ytdl.js'
import fs from 'fs'

let handler = async (m, { usedPrefix, command, conn, text }) => {
  let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://youtube.com/watch?v=bzpXVCqNCoQ`
	if (!text) return m.reply(input)
 
  
  let result = await YT.mp3(text)
				const title = result.meta.title
				const duration = result.meta.seconds
				const channel = result.meta.channel
				const audio = result
				const info = `乂 *Y T  M P 3*
  
• *Title* : ${title}
• Channel* : ${channel}
• *Duration* : ${duration} *s*
• *YouTube links* : ${text}`
  let a = await conn.reply(m.chat, info, null)
await conn.delay(1000)
 await conn.sendMessage(m.chat, {
					audio: fs.readFileSync(audio.path),
					mimetype: 'audio/mpeg',
					ptt: false,
					
				}, {
					quoted: a
				})
  }
handler.tags = ['downloader']
handler.help = ['ytmp3 <link>']
handler.command = /^(yta|ytmp3|ytaudio)$/i
handler.limit = true 
handler.register = true

export default handler