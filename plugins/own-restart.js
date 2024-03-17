import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
  
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('*Sukses Restart Bot....*')
    process.send('reset')
  } else throw '_Oops.._'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^(srvrestart|restart)$/i

handler.rowner = true

export default handler