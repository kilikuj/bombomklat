import google from 'google-it'
let handler = async (m, { conn, command, usedPrefix, args, text}) => {
let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} rumus kimia`
	if (!text) return m.reply(input)
    google({ query: text }).then((res) => {
            let gog = `Google Search From : ${text}\n\n`;
            for (let g of res) { 
              gog += ` *Title* : ${g.title}\n`;
              gog += ` *Description* : ${g.snippet}\n`;
              gog += ` *Link* : ${g.link}\n\n╰╾────────────────\n\n`;
            }
  conn.sendMessage(m.chat, {text: gog, contextInfo:
					{
						"externalAdReply": {
							"title": namebot,
							"body": command,
							"showAdAttribution": true,
							"mediaType": 1,
							"sourceUrl": '',
							"thumbnailUrl": 'https://telegra.ph/file/445402f1c32de73b22608.jpg',
							"renderLargerThumbnail": true

						}
					}}, {quoted: m})
					}).catch(err => {
					m.reply('upss.. error')
					})
}
handler.help = ['google']
handler.tags = ['internet']
handler.command = /^googlef?$/i
handler.limit = true

export default handler