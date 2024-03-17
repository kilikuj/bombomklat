import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, generateWAMessageFromContent, }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw, statusupdate, autogetmsg, antivirus, publicjoin } = global.db.data.settings[conn.user.jid]
    const chats = Object.keys(await conn.chats)
    const groups = Object.keys(await conn.groupFetchAllParticipating())
    const block = await conn.fetchBlocklist()
    
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let sts = `╭╾──〔 Status 〕─⬣
│⋄  Active as long as ${uptime}
│⋄  *${groups.length}* Grup
│⋄  *${chats.length - groups.length}* Private Chats
│⋄  *${Object.keys(global.db.data.users).length}* User
│⋄  ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}
│⋄  *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Banned Chat
│⋄  *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Banned User
╰╾─⬣

╭╾──〔 Arrangement 〕─⬣
│⋄  ${anticall ? '✅' : '❌'} *Anti Call*
│⋄  ${antispam ? '✅' : '❌'} *Anti Spam*
│⋄  ${backup ? '✅' : '❌'} *Auto Backup DB*
│⋄  ${groupOnly ? '✅' : '❌'} *Mode Grup*
╰╾⬣`

m.reply(sts)

}
handler.help = ['botstatus']
handler.tags = ['main']
handler.command = /^botstat(us)?$/i

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
