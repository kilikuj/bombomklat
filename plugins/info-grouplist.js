let handler = async (m, { conn, participants }) => {

	let now = new Date() * 1
	let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
    let txt = ''
    // let tolgp = `${participants.lenght}`
    
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) 
    txt += `${await conn.getName(jid)}\n${jid} [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]\n${db.data.chats[jid] == undefined ? db.data.chats[jid] = {
      isBanned: false,
      welcome: false,
      antiLink: false,
      delete: true,
    } : db.data.chats[jid].expired ? msToDate(db.data.chats[jid].expired - now) : 'Not set for Expired'}
${db.data.chats[jid].isBanned ? 'YES' : 'NO'} _Group Banned_
${db.data.chats[jid].welcome ? 'YES' : 'NO'} _Auto Welcome_
${db.data.chats[jid].antiLink ? 'YES' : 'NO'} _Anti Link_\n\n`
    m.reply(`乂 *L i s t  G r o u p* :
Total Group: ${groups.length}

${txt}

`.trim())

}

handler.help = ['grouplist']
handler.tags = ['group']

handler.command = /^(group(s|list)|(s|list)group)$/i


export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari\n" + hours + " Jam\n" + minutes + " Menit";
    // +minutes+":"+sec;
}