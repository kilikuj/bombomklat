import fs from 'fs'
import JavaScriptObfuscator from 'javascript-obfuscator'
import { obfus } from '../scraper/encrypt.js'

let handler = async (m, { text, usedPrefix, command }) => {

let tex = m.quoted.text ? m.quoted.text : texf
				let meg = await obfus(tex)
				let nem = './tmp/result.js'
                let enc = meg.author + meg.result
				await fs.writeFileSync(nem, enc)
			let t4 = await fs.readFileSync('./tmp/result.js')
					conn.sendMessage(m.chat, {
					document: t4,
					mimetype: 'document/application',
					fileName: 'result_enc.js',
					fileLength: 2023
				}, {
					quoted: m
				})
}
handler.help = ['enc']
handler.tags = ['owner']
handler.command = /^(enc)$/i
handler.register = true
handler.limit = true


export default handler
/*
async function obfus(query) {
			return new Promise((resolve, reject) => {
				try {
					const obfuscationResult = JavaScriptObfuscator.obfuscate(query,
					{
						compact: true,
						controlFlowFlattening: true,
						controlFlowFlatteningThreshold: 1,
						numbersToExpressions: true,
						simplify: true,
						stringArrayShuffle: true,
						splitStrings: true,
						stringArrayThreshold: 1
					});
					const result = {
						status: 200,
						author: `//Encrypt By Tio\n//Yoxy multi device\n\n`,
						result: obfuscationResult.getObfuscatedCode()
					}
					resolve(result)
				} catch (e) {
					reject(e)
				}
			})
		}
		*/