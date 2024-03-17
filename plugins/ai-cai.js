
import axios from "axios";

const handler = async (m, { text, args, usedPrefix, command }) => {

const id = global.db.data.settings[conn.user.jid]
const id_name = [
"gojo/4WOVrCApi4JYwfYwU2e5eDeFalLOkGBw6IfUZPX1XVQ",
"dio/md_Mr7P2UTyO-SpTvWvK212Xqzr-hyBEEdE1ZqGuvu4",
"bf/qdn0glr3qPgjTIZI3x6T3GrZlFZcyA_kdzsnOuTorlY",
"tina/WMNv_IvY5upazoAKZj3RTz7y9hDneb1CuFJ2uvmaosQ",
"elon/6HhWfeDjetnxESEcThlBQtEUo0O8YHcXyHqCgN7b2hY",
"sukuna/e4YGobLn_1SNmMxoDU0Pt25tYvGjV4Rm-LaoWQdkZts",
"luffy/gF1ORZXTZIvZqprJaIPpE-aLLavJrNXYZLiKJ-ktRkY",
"raiden/RQrrOj-UNdEV2_PC5D03US-27MZ7EUtaRH_husjbRQA",
"dante/-uwWte6vXPHCO2ytjeNa0lhBIxiETF4iZ0oO-KVjciQ",
"vergil/XUtR5xIhxarp_n5sA44Wa8_NOp-7pa0HgsltF099y0s",
"krishna/8NRtqrbGa_il09tnwolYuFJk7fmOknZEs7uDIraIgAU"
]
const history = []

switch (command) {
case 'cai': case 'c-ai':
		if (!text) return m.reply(`[!] Input text\n\nexample: ${command}`)
		history.push = 'ex:' + text
		fetch(`https://animecafe-characterai-indratensei.cloud.okteto.net/cai?char=${id.character}&message=kamu%20berbahasa%20indonesia, ${history.ex}, ${text}`).then(result => {
			m.reply(`Character: ${result.name}\n\n${result.text}`)
		}).catch(e => {
			m.reply(e)
			console.log(e)
			})
			break
    case 'setid':
       let data = id_name.map((item, index) => ({
            title: item,
            id: item
        }));
        if (!text) return m.reply(`List id Characters: \nexample: ${usedPrefix+command} 1 \n\n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        
        if (text > data.length) return m.reply(`List id Characters: \nexample: ${usedPrefix+command} 1 \n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        
         let out = data[text - 1].id
         id.character = out.split('/')[1]
          
     m.reply(`Success change id Characters: ` + out.split('/')[0])
  break 
}
}
handler.command = handler.help = ["cai","c-ai","setid"];
handler.tags = ['ai']
handler.register = handler.limit = true 

export default handler

async function fetch(url, options) {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}