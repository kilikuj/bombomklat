import fs from "fs/promises";
import axios from "axios";
import FormData from "form-data";
import request from 'request';
import { imgHd } from '../scraper/hdr.js';
import { animeFilter } from '../scraper/animeFilter.js';
import uploadImage from '../lib/uploadImage.js';

async function processing(urlPath, method) {
    return new Promise(async (resolve, reject) => {
        let Methods = ["enhance", "recolor", "dehaze"];
        Methods.includes(method) ? (method = method) : (method = Methods[0]);
        let buffer,
            Form = new FormData(),
            scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
        Form.append("model_version", 1, {
            "Content-Transfer-Encoding": "binary",
            contentType: "multipart/form-data; charset=utf-8",
        });
        Form.append("image", Buffer.from(urlPath), {
            filename: "enhance_image_body.jpg",
            contentType: "image/jpeg",
        });
        Form.submit(
            {
                url: scheme,
                host: "inferenceengine" + ".vyro" + ".ai",
                path: "/" + method,
                protocol: "https:",
                headers: {
                    "User-Agent": "okhttp/4.9.3",
                    Connection: "Keep-Alive",
                    "Accept-Encoding": "gzip",
                },
            },
            function (err, res) {
                if (err) reject();
                let data = [];
                res
                    .on("data", function (chunk, resp) {
                        data.push(chunk);
                    })
                    .on("end", () => {
                        resolve(Buffer.concat(data));
                    });
                res.on("error", (e) => {
                    reject();
                });
            }
        );
    });
}

async function makeZombie(path) {
    return new Promise(async (resolve, reject) => {
        let img = await fs.createReadStream(path);
        request.post({
            url: "https://deepgrave-image-processor-no7pxf7mmq-uc.a.run.app/transform_in_place",
            formData: {
                image: img
            },
            contentType: 'multipart/form-data'
        },
            async (error, response, body) => {
                resolve({ base64: body })
            })
    })
}

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    let media = await q.download();
    let url = await uploadImage(media);
    let mime_ = `Kirim/Reply Gambar Dengan Caption ${usedPrefix + command}`;

    const react = { react: { text: "⏳", key: m.key } };

    async function reload() {
        conn.sendMessage(m.chat, react);
    }
    const reactdone = { react: { text: "✔️", key: m.key } };

    async function done() {
        conn.sendMessage(m.chat, reactdone);
    }

    switch (command) {
        case "remini":
            {
                conn.enhancer = conn.enhancer ? conn.enhancer : {};
                if (m.sender in conn.enhancer)
                    throw "Tunggu bang masih ada proses yang tadi belum selesai :'";
                if (!mime) throw mime_

                if (!/image\/(jpe?g|png)/.test(mime))
                    throw `Mime ${mime} tidak support`;
                else conn.enhancer[m.sender] = true;
                reload()
                let error;
                try {
                    const This = await processing(media, "enhance");
                    conn.sendFile(m.chat, This, "", `*Result*: ${usedPrefix + command}`, m);
                    done()
                } catch (er) {
                    error = true;
                } finally {
                    if (error) {
                        m.reply("Proses Gagal :(");
                    }
                    delete conn.enhancer[m.sender];
                }
            }
            break;
        case 'hdr':
            if (!mime) throw mime_
            if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;

            if (!args[0]) return m.reply('*Pilih style hdr*\n1. hdr standard\n2. hdr medium\n3. hdr hard\n4. hdr extream (jarang work krn berat)')
            reload()

            if (args[0] === 'standard') {
                imgHd(url, 2).then((result) => {
                    let res = result.data
                    let cap = `*Result*: ${usedPrefix + command} ${text}\n*Fetch*: ${res.time_taken}\n`
                    conn.sendFile(m.chat, res.url, 'remini.jpg', cap, m)
                })
            } else if (args[0] === 'medium') {
                imgHd(url, 4).then((result) => {
                    let res = result.data
                    let cap = `*Result*: ${usedPrefix + command} ${text}\n*Fetch*: ${res.time_taken}\n`
                    conn.sendFile(m.chat, res.url, 'remini.jpg', cap, m)
                })
            } else if (args[0] === 'hard') {
                imgHd(url, 6).then((result) => {
                    let res = result.data
                    let cap = `*Result*: ${usedPrefix + command} ${text}\n*Fetch*: ${res.time_taken}\n`
                    conn.sendFile(m.chat, res.url, 'remini.jpg', cap, m)
                })
            } else if (args[0] === 'extream') {
                imgHd(url, 9).then((result) => {
                    let res = result.data
                    let cap = `*Result*: ${usedPrefix + command} ${text}\n*Fetch*: ${res.time_taken}\n`
                    conn.sendFile(m.chat, res.url, 'remini.jpg', cap, m)
                    done()
                })
            }
            break;
        case 'enhance':
        case 'hd':
            if (!mime) throw mime_
            if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;

            reload()

            axios.request({
    method: 'POST',
    url: 'https://api.picsart.io/tools/1.0/upscale/enhance',
    headers: {
        accept: 'application/json',
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
        'X-Picsart-API-Key': 'ju0e1i0ILCIjjA5CwNitGCeppbPfMqex'
    },
    data: `-----011000010111000001101001\r\nContent-Disposition: form-data; name="upscale_factor"\r\n\r\n2\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="format"\r\n\r\nJPG\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="image_url"\r\n\r\n${url}\r\n-----011000010111000001101001--\r\n\r\n`
})
.then(response => {
    console.log(response.data); // Catat data respons untuk debug
    let res = response.data.data;
    conn.sendFile(m.chat, res.url, 'enhance.jpg', `*Result* : ${usedPrefix + command}`, m);
})
.catch(error => {
    console.error(error); // Catat kesalahan apa pun untuk debug
    m.reply('Terjadi kesalahan saat memproses gambar');
});


            done()

            break;
        case 'aifilter':
        case 'filteranime':

            if (!mime) throw mime_
            if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;

            reload()
            let cap = '*Result from* : ' + usedPrefix + command
            animeFilter(media).then(res => {
                const buff = Buffer.from(res[0].split(",")[1], "base64")
                conn.sendMessage(m.chat, { image: buff, caption: cap })
            }).catch(e => {
                m.reply('error')
            })

            done()

            break;
        case 'jadizombie':
        case 'makezombie':

            if (!mime) throw mime_
            if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;

            reload()
            let cep = '*Result from* : ' + usedPrefix + command
            let res = await makeZombie(media)
            const bumfer = Buffer.from(res.base64, "base64")
            conn.sendMessage(m.chat, { image: bumfer, caption: cep })

            done()

            break;
    }
}
handler.tags = ["process"];
handler.limit = true;
handler.register = false

handler.command = handler.help = ["remini", "hdr", "hd", "enhance", "aifilter", "filteranime", "makezombie", "jadizombie"];

export default handler;
