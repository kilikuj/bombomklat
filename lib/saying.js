import fs from 'fs';
import gtts from 'gtts';
import { exec } from 'child_process';

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const saying = async (text, conn, m) => {
  return new Promise((resolve, reject) => {
    let ranm = getRandom(".mp3");
    let rano = getRandom(".ogg");
    const gTTS = new gtts(text, 'id');

    gTTS.save(ranm, function () {
      exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
        fs.unlinkSync(ranm);
        if (err) return reject(err);

        let buff = fs.readFileSync(rano);
        let res = conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
        fs.unlinkSync(rano);
        resolve(res);
      });
    });
  });
};

export { saying };