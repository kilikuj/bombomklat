import fetch from 'node-fetch'
import { lirik } from '../scraper/lyric.js'
let handler = async(m, { conn, usedPrefix, text, command }) => {
  let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} sayang opo koe krungu`
	if (!text) return m.reply(input)
	lirik(text).then(result => {
conn.sendMessage(m.chat, {text: result.lirik, contextInfo:
					{
						"externalAdReply": {
							"title": namebot,
							"body": command,
							"showAdAttribution": true,
							"mediaType": 1,
							"sourceUrl": '',
							"thumbnailUrl": result.thumb,
							"renderLargerThumbnail": true

						}
					}}, {quoted: m})
}).catch(err => {
m.reply(err)
})
}
handler.help = ['liriklagu']
handler.tags = ['internet']
handler.command = /^(liriklagu|lirik|lyric)$/i
handler.limit = true

export default handler