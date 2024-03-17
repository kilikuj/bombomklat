
import fetch from "node-fetch";
const handler = async (m, { text, command }) => {
	try {
		if (!text) return m.reply("Ketik .toyok <teks>");
		await fetch(
			`https://api.yanzbotz.my.id/api/ai/characterai?text=${
				command + text
			}&name=Toyok. Bahasa: Palembang `,
		)
			.then((result) => result.json())
			.then((x) => m.reply(x.result));
	} catch (e) {
		m.reply(eror + ': ' + e );
	}
};
handler.command = handler.help = ["toyo", "toyok"];
handler.tags = ['ai']
handler.register = true
handler.limit = true
export default handler;