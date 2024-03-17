let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  await delay(2000)
  m.reply('Wait, we are preparing the best panel for you.')

  await delay(2000)
  m.reply(`*• I found the best panel for you:*\n\n◦ *Linked:* https://rsnstore.com\n◦ *Coupon Code:* Kemii.Denpai`)
}

handler.help = ['buypanel, panel']
handler.tags = ['info']
handler.command = /^(buypanel|panel)$/i

module.exports = handler

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
