let handler = async (m, {
	conn,
	usedPrefix
}) => {
	let warn = global.db.data.users[m.sender].warn

	let ndy = `
*You Have a ${warn} Warning*
 `.trim()
	conn.reply(m.chat, ndy, m)
}

handler.help = ['cekwarn']
handler.tags = ['info']
handler.command = /^(cekwarn)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
