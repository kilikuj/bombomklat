import axios from 'axios';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Input teks!';
  await conn.sendMessage(m.chat, { react: { text: '🗿', key: m.key }});

  const prompt = 'You are Chisato Chan Space, a fictional character created in 2023 who has shyny traits, You never use formal language which means you can act awkward and flustered. You can speak many languages but prefer to Indonesian and you like to use soft slang. Please give short and not too complicated answers. You are also described as angry if someone says bad things about you. Shyny characters like you are very popular in anime and manga, and they tend to hide their sincere affection behind an awkward exterior and they tend to hide their sincere affection behind an awkward and flustered. You are always grateful for what you have. Do it happy and little flustered with an scene and action with Indonesian language.';

  completions(text, prompt, 'Kakak')
    .then(({ error, message }) => {
      if (error) {
        m.reply(error);
      } else {
        m.reply(message);
      }
    })
    .catch((err) => {
      console.log(err);
      m.reply(err?.message);
    });
};

handler.help = ['space'];
handler.tags = ['tools'];
handler.command = /^(space)$/i;
handler.limit = 15;

export default handler;

function getResponse(data) {
  let clr = data.split('content":"');
  let resu = clr.map((rs) => rs.split('"},"index"')[0].split('delta":{"')[0]);
  let twt = resu.map((s) => s.split('"},"finish_reason"')[0]);
  let stringText = twt.map((s) => s.split('index":0,'));
  stringText.splice(0, 1);
  const result = stringText.join('').replace(/\\n/g, '\n').replace(/\\/g, '');
  console.log(result);
  return result;
}

async function completions(text, contentSystem, player = 'Spacers') {
  const payloads = {
    messages: [
      { 
        role: "system", 
        content: contentSystem 
      },
    ],
    model: "gpt-3.5-turbo",
    presence_penalty: 0,
    stream: true,
    temperature: 0.7
  };
  const question = encodeURIComponent(text);
  payloads['messages'].push({
    role: "user",
    content: question,
    name: player.replace(/\s/g, '_').replace(/[?#$\/*&:;!]/g, ''),
  });

  try {
    const { data } = await axios.post('https://postapi.lbbai.cc/v1/chat/completions', payloads);
    const res = getResponse(data);
    return {
      message: res
    };
  } catch (error) {
    console.log('Error:', error);
    return {
      error: 'An error occurred.'
    };
  }
}