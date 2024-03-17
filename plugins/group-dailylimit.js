
const cooldown = 86400000
const limit = ["100","25","20","200","240","50","73","5","10","1","500","400","340"]
let handler = async (m,{ conn} ) => {
  let get = global.db.data.users[m.sender]
    if (m.chat == idgc) {
    
  if (new Date - get.dailylimit < cooldown) throw `Anda sudah mengklaim Limit Daily Claim!, tunggu *${((get.dailylimit + cooldown) - new Date()).toTimeString()}*`
  let rendem = pickRandom(limit)
  let hasil = rendem
  get.limit += rendem
  conn.reply(m.chat, `📢 Selamat kamu mendapatkan limit\n➜ ${hasil}`, m)
  get.dailylimit = new Date * 1
  
  } else {
  conn.sendMessage(m.chat, {text: '📣 Fitur khusus penghuni group *OFFICIAL*\nJoin sekarang untuk mendapatkan limit melimpah mulai dari 1 > 400 limit dalam sehari', contextInfo: {
				externalAdReply: {
                    showAdAttribution: true,
                    title: 'Join sekarang ❗',
					body: '',
					mediaTpe: 1,
					thumbnailUrl: thumb,
					sourceUrl: 'https://chat.whatsapp.com/JZLyu0D69ufCbXfDyxeI0t',
					renderLargerThumbnail: true		
				}
			}
			}, {quoted: m})
			}
}
handler.help = ['getlimit']
handler.tags = ['group']
handler.command = /^(getlimit)$/i
handler.group = true 
handler.register = true
handler.cooldown = cooldown

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}