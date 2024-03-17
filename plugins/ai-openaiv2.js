import axios from 'axios';

const handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    const input_data = ["chat", "image"];

    const [urutan, tema] = text.split("|")
    if (!tema) return m.reply("Masukkan Prompt!\n\nContoh: .ai <nomor|prompt>\nPenggunaan: .cai 1 | Siapa itu arss?")

    await m.reply(wait)
    try {
        const data = input_data.map((item, index) => ({
            title: item.replace(/[_-]/g, ' ').replace(/\..*/, ''),
            id: item
        }));
        if (!urutan) return m.reply("Masukkan Prompt!\n\nContoh: .ai <nomor|prompt>\nList:\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (isNaN(urutan)) return m.reply("Masukkan Prompt!\n\nContoh: .cai <nomor|prompt>\nList:\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (urutan > data.length) return m.reply("Masukkan Prompt!\n\nContoh: .cai <nomor|prompt>\nList:\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        const out = data[urutan - 1].id

        const openAIResponse = await await fetchChatData(out, tema)

        if (openAIResponse) {
            if (out == "image") {
                const result = openAIResponse;

                await conn.sendMessage(m.chat, {
                    image: {
                        url: result.data[0].url
                    },
                    caption: wm,
                    mentions: [m.sender]
                }, {
                    quoted: m
                });
            } else if (out == "chat") {
                const hasil = await fetch(`https://api.neoxr.eu/api/gpt-pro?q=${text}&apikey=Rodotz`)
                const res = await hasil.json()
                await conn.sendMessage(m.chat, {
                    text: res.data.message
                }, {
                    quoted: m
                });
            }
        } else {
            console.log("Tidak ada respons dari OpenAI atau terjadi kesalahan.");
        }
    } catch (e) {
        await m.reply('Error...')
    }
}
handler.help = ["cai <nomor|prompt>"]
handler.tags = ["tools", "ai"]
handler.command = /^(cai)$/i

module.exports = handler

function generateRandomUserAgent() {
    const androidVersions = ['4.0.3', '4.1.1', '4.2.2', '4.3', '4.4', '5.0.2', '5.1', '6.0', '7.0', '8.0', '9.0', '10.0', '11.0'];
    const deviceModels = ['M2004J19C', 'S2020X3', 'Xiaomi4S', 'RedmiNote9', 'SamsungS21', 'GooglePixel5'];
    const buildVersions = ['RP1A.200720.011', 'RP1A.210505.003', 'RP1A.210812.016', 'QKQ1.200114.002', 'RQ2A.210505.003'];

    const selectedModel = deviceModels[Math.floor(Math.random() * deviceModels.length)];
    const selectedBuild = buildVersions[Math.floor(Math.random() * buildVersions.length)];
    const chromeVersion = 'Chrome/' + (Math.floor(Math.random() * 80) + 1) + '.' + (Math.floor(Math.random() * 999) + 1) + '.' + (Math.floor(Math.random() * 9999) + 1);

    const userAgent = `Mozilla/5.0 (Linux; Android ${androidVersions[Math.floor(Math.random() * androidVersions.length)]}; ${selectedModel} Build/${selectedBuild}) AppleWebKit/537.36 (KHTML, like Gecko) ${chromeVersion} Mobile Safari/537.36 WhatsApp/1.${Math.floor(Math.random() * 9) + 1}.${Math.floor(Math.random() * 9) + 1}`;

    return userAgent;
}

function generateRandomIP() {
    const octet = () => Math.floor(Math.random() * 256);
    return `${octet()}.${octet()}.${octet()}.${octet()}`;
}

async function fetchChatData(type, message) {
    try {
        const headers = {
            'User-Agent': generateRandomUserAgent(),
            'Referer': 'https://talkai.info/id/chat/',
            'X-Forwarded-For': generateRandomIP(),
        };

        const data = {
            temperature: 1,
            frequency_penalty: 0,
            type: type,
            messagesHistory: [
                { from: 'ChatGPT', content: 'CyberGenius adalah Programmer yang berasal dari Kalimantan, Indonesia. CyberGenius juga di kenal sebagai Kang Recode. Ia dikenal juga sebagai CyberGenius' },
                { from: 'You', content: message },
            ],
            message: message,
        };

        const response = await axios.post('https://talkai.info/id/chat/send2/', data, { headers });

        return response.data;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}