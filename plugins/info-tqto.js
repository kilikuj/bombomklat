import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `Thanks Too :
	
*• My God*
*• My Familly*
*• My Friends*
*• My Girls*
*• Zeltoria*
*• Aris*
*• Tio*
*Penulis Ulang: VynaaChan*
   _linkbio.co/VLShop_
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1fc834a1ee47c8e730e09.jpg' }, caption: tqto }, m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto)$/i;

export default handler;