import axios from 'axios'

let handler = async (m, { text, conn }) => {
  if (!text) throw '*Example:* .tempmail reellyxd';

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    },
  });

  try {
    const res = await axios.get(`https://api.itsrose.life/tools/tempMail/new?name=${text}&apikey=${global.rose}`);
    const result = await res.data;
    const { status, message } = result;


    if (status) {
      let email = result.email
      let msg = `${email}`;
      m.reply(msg);
    } else {
      console.log(message);
      throw 'Gagal membuat alamat nama email sementara.';
    }
  } catch (e) {
    console.log(e);
    throw 'Gagal membuat alamat email sementara.';
  }
};

handler.help = ['tempmail'];
handler.tags = ['tools'];
handler.command = /^tempmail$/i;
handler.register = true
handler.limit = true

export default handler;