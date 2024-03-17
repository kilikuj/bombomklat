import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 ]

let { key } = await conn.sendMessage(m.chat, {text: 'Done✅'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
pengalihan isu
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://telegra.ph/file/947caa8c4f6ecdc67553f.mp4"},
      gifPlayback: true,
      caption: 'ᴀɴ *ᴀʀᴛɪғɪᴄɪᴀʟ ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ* ᴛʜᴀᴛ ᴜsᴇs ᴛʜᴇ *ᴊᴀᴠᴀsᴄʀɪᴘᴛ ʟᴀɴɢᴜᴀɢᴇ* ᴛᴏ ʙᴇ ᴜsᴇᴅ ᴀs ᴀ ᴛᴏᴏʟ ᴛʜᴀᴛ ᴍᴀᴋᴇs ɪᴛ ᴇᴀsɪᴇʀ ʏᴏ ᴜsᴇ, sᴜᴄʜ ᴀs ᴀ *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*, *sᴇᴀʀᴄʜɪɴɢ*, *sᴛᴜᴅʏɪɴɢ*, *ᴀɴᴅ ᴍᴀɴʏᴍᴏʀᴇ*. ɪғ ʏᴏᴜ ʜᴀᴠᴇ ʀᴇǫᴜᴇsᴛ ғᴇᴀᴛᴜʀᴇᴅ ᴏʀ ǫᴜᴇsᴛɪᴏɴ ʏᴏᴜ ᴄᴀɴ ᴄʜᴀᴛ ᴏᴡɴᴇʀ.\n┌ ◦ *ᴄʀᴇᴀᴛᴏʀ* : s.id/callmepin\n└ ◦ *ɪɴsᴛᴀɢʀᴀᴍ* : instagram.com/callme_vynaa\n\n\nᴊᴀɴɢᴀɴ ᴋᴜᴛᴜᴋ ᴅɪʀɪᴍᴜ ᴀᴛᴀꜱ ᴋᴇꜱᴀʟᴀʜᴀɴ ʏᴀɴɢ ᴋᴀᴍᴜ ʙᴜᴀᴛ ᴅɪ ᴍᴀꜱᴀ ʟᴀʟᴜ, ᴊᴀᴅɪᴋᴀɴ ꜱᴇʙᴀɢᴀɪ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴅᴀɴ ʙᴇʀᴜꜱᴀʜᴀ ᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅɪʜᴀʀɪ ʏᴀɴɢ ᴀᴋᴀɴ ᴅᴀᴛᴀɴɢ\n\n*.ᴀʟʟᴍᴇɴᴜ* (semua fitur)\n*.ᴍᴇɴᴜʟɪꜱᴛ*\n*.about*',
      contextInfo: {
      externalAdReply: {
      title: `© Euphyllia - MD`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/95b675a0cc6d10a124586.jpg',
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(menu|helo|help)$/i;

export default handler;