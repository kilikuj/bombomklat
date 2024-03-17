let handler = async (m, { conn, text }) => {
   if (!text) throw `Masukan Text Untuk Bio Baru Bot`
    
        await conn.updateProfileStatus(text)
        conn.reply(m.chat, 'Sukses Mengganti Bio Bot', m)

}
handler.help = ['setbotbio']
handler.tags = ['owner']
handler.command = /^(setbotbio)$/i

export default handler 
