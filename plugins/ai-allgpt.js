
import FormData from "form-data";
import Jimp from "jimp";
import axios from 'axios'
import fs from "fs"
import { ChatGpt } from '../scraper/chatGpt.js'
import { GPT } from '../scraper/GPT.js'
import { sendWebhookRequest } from '../scraper/botika.js';
import { chatgpt } from '../scraper/gpt.js'

// function json
async function fetchJson(url, options) {
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

let handler = async (m, { conn, usedPrefix, text, args,command }) => {
const his = []

    const openai = 'https://telegra.ph/file/8fd766bb9f183c98ba4eb.jpg'
    let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} presiden Indonesia`
    const react = {react: {text: "⏳", key: m.key}}
        const reactdone = {react: {text: "✔️", key: m.key}}
            async function reload () { conn.sendMessage(m.chat, react)}
                async function done () {conn.sendMessage(m.chat, reactdone)}
                	global.chara = global.db.data.settings[conn.user.jid]
                	
	
	switch (command) {
case "chatgpt": case 'gpt':
if (!text) throw input
reload()

ChatGpt(text).then(a => {
conn.sendThumb(m.chat, a.reply, openai, m)

}).catch(err => {
console.error(err)
m.reply("gw pusing sorry gak bisa jawab")
})
done()
break 
case "chatgpt-2": case 'gpt-2':
if (!text) throw input
reload()

chatgpt(text).then(a => {
conn.sendThumb(m.chat, a, openai, m)

}).catch(err => {
console.error(err)
m.reply("gw pusing sorry gak bisa jawab")
})
done()
break 
case 'blackbox': case 'bb':
if (!text) throw input 
const black = await blackbox(text)
if (black.status === false) throw 'Upps im sorry , *Error'
conn.sendThumb(m.chat, black.response[0][0], 'https://telegra.ph/file/ae2a44b5f0545c7ed4b65.jpg', m)

break
case 'setchara':
if (!text) throw `[!] *wrong input*

Ex : ${usedPrefix + command} Spongebob` 
chara.cai = text
m.reply(`success change Characters *${text}*`)
break 
case 'boredhumans': case 'bored':
if (!text) throw input 
const bored = await boredhumans(text)
if (bored.status === false) throw 'Upps im sorry , *Error'
conn.sendThumb(m.chat, bored.output, 'https://telegra.ph/file/72b349cdc839f55ad0103.jpg', m)

break 
case 'onlinegpt': case 'ongpt':
if (!text) throw input 
const onlineg = await onlinegpt(text)
if (onlineg.success === false) throw 'Upps im sorry , *Error'
conn.sendThumb(m.chat, onlineg.reply, 'https://telegra.ph/file/b8bbe65c52b75fbc3c923.jpg', m)

break 
case 'openai': case 'ai':
if (!text) throw input 
his.push = text
const result_ = await GPT(`${his} + ${text}`)
if (result_.success === false) throw 'Upps im sorry , *Error'
let pesan = await conn.sendMessage(m.chat, {text: '_?_'})
await conn.delay(2000)
await conn.sendMessage(m.chat, {text: result_.reply, edit: pesan.key })
break 
case 'openai2': case 'ai2':
if (!text) throw input 
reload()
ai(text).then(res => {
conn.sendThumb(m.chat, res, openai, m)
}).catch(err => {
//console.error(err)
m.reply("Terjadi kesalahan dalam menjawab pertanyaan")
})
done()
break 
case 'botika':
if (!text) throw input 

try {
    const openAIResponse = await sendWebhookRequest(text);
    
    if (openAIResponse) {
      console.log("Respons dari OpenAI:");
      await m.reply(openAIResponse);
    } else {
      console.log("Tidak ada respons dari OpenAI atau terjadi kesalahan.");
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    await m.reply(eror);
  }
  break 

};
}
handler.tags = ["ai"];
handler.limit = handler.registered = true
handler.help = ["blackbox","boredhumans","botika","chatgpt","chatgpt-2","openai","openai2","setchara","onlinegpt"];
handler.command = ["chatgpt","gpt","openai","ai","openai2","ai2","blackbox","bb","boredhumans","bored","setchara","onlinegpt","ongpt","botika","chatgpt-2","gpt-2"];

export default handler;

//BLACK BOX
async function blackbox(text) {
return new Promise(async (resolve, reject) => {
try {
const danz = await axios.post('https://www.useblackbox.io/chat-request-v4', {
text: text,
allMessages: [{ user: text }],
stream: '',
clickedContinue: false
}, {
headers: {
'Content-Type': 'application/json',
'User-Agent': 'Mozilla/5.0 (Linux x86_64) Gecko/20130401 Firefox/71.3',
}
});
resolve(danz.data)
} catch (e) {
reject(e)
}
})
}

///////
async function ai(text) {
  const payload = {
    messages: [
      { role: "system", content: "nama kamu adalah Mark Zuckerberg dan kamu adalah seorang developer WhatsApp" },
      { role: "user", content: text }
    ],
    model: "gpt-3.5-turbo",
    presence_penalty: 0,
    stream: true,
    temperature: 0.7
  };

  try {
    const response = await axios.post('https://postapi.lbbai.cc/v1/chat/completions', payload);
    const res = response.data
        
    let clr = res.split('content":"');
    let resu = clr.map((rs) => rs.split('"},"index"')[0].split('delta":{"')[0]);
    let twt = resu.map((s) => s.split('"},"finish_reason"')[0]);
    let stringText = twt.map((s) => s.split('index":0,'));
    stringText.splice(0, 1);
    const result = stringText.join("").replace(/\\n/g, "\n").replace(/\\/g, "");
    return result
  } catch (error) {
    console.error('Error:', error);
    return {error: 'Something went wrong.'};
  }
}

//chara - boredgumans
async function boredhumans(query, character = `${chara.cai}`) {
return new Promise(async (resolve, reject) => {
try {
const danz = await axios.post('https://boredhumans.com/api_celeb_chat.php', 'message=' + query + '&intro=' + character + '&name=' + character, {
headers: {
'User-Agent': 'Googlebot-News',
}
});
resolve(danz.data);
} catch (e) {
reject(e);
}
});
}

// online gpt
async function onlinegpt(text) {
try {
const { data } = await axios(`https://onlinegpt.org/wp-json/mwai-ui/v1/chats/submit`, {
method: "post",
data: {
botId: "default",
newMessage: text,
stream: false
},
headers: {
Accept: "text/event-stream",
"Content-Type": "application/json"
}
})
return data
} catch (err) {
console.log(err.response.data)
return err.response.data.message
}
}