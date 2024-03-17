import { spawn } from 'child_process'

async function restart() {
var load = [
"𝚁 . . .",
"𝚁 𝙴 . . .",
"𝚁 𝙴 𝚂 . . .",
"𝚁 𝙴 𝚂 𝚃 . . .",
"𝚁 𝙴 𝚂 𝚃 𝙰 . . .",
"𝚁 𝙴 𝚂 𝚃 𝙰 𝚁. . .",
"𝚁 𝙴 𝚂 𝚃 𝙰 𝚁 𝚃. . .",
]
let { key } = await this.sendMessage(m.chat, {text: '...'})//Pengalih isu

for (let i = 0; i < load.length; i++) {

await this.sendMessage(m.chat, {text: load[i], edit: key });//PESAN LEPAS
}
}
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
    restart()
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^(res(tart)?)$/i

handler.rowner = true

export default handler