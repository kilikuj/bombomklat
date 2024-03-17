import fs from 'fs'

let handler = async (m, { conn, args }) => {
 let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let aki = m.quoted ? [m.quoted.sender] : m.mentionedJid
  let users = aki.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  let wayy = '_*Asik Dapet Jatah Kick*_'
  for (let i of users) {
 wayy += ` @${i.split('@')[0]}`
  }
  conn.sendText(m.chat, wayy, m, { contextInfo: { mentionedJid: users }})
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupParticipantsUpdate(m.chat, [user], "remove")
}
handler.help = ['kick'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(kick|\-)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

export default handler