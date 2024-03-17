

import { promises as fs } from 'fs'
import { tmpdir, platform } from 'os'
import { join } from 'path'
import path from 'path'
import os from 'os'
import { fileURLToPath, pathToFileURL } from 'url'

const TIME = 1000 * 60 * 120 // 120 menit

const __filename = function filename(pathURL = import.meta, rmPrefix = os.platform() !== 'win32') {
    const path = /** @type {ImportMeta} */ (pathURL).url || /** @type {String} */ (pathURL)
    return rmPrefix ?
        /file:\/\/\//.test(path) ?
            fileURLToPath(path) :
            path : /file:\/\/\//.test(path) ?
            path : pathToFileURL(path).href
}
// yy
const _dirname = function dirname(pathURL) {
    const dir = __filename(pathURL, true)
    const regex = /\/$/
    return regex.test(dir) ?
        dir : fs.existsSync(dir) &&
            fs.statSync(dir).isDirectory() ?
            dir.replace(regex, '') :
            path.dirname(dir) // windows
}


export async function before (m) {

clearSessions().then(_ => {
conn.reply(nomerown + '@s.whatsapp.net', 'Success delete sessions✅', null)
})

}



const __dirname = _dirname(import.meta)

export default async function clearSessions() {
	const ses = [tmpdir(), join(__dirname, '../sessions')]
	const filename = []

	await Promise.allSettled(ses.map(async (dir) => {
		const files = await fs.readdir(dir)
		for (const file of files) {
			if (file != 'creds.json') filename.push(join(dir, file))
		}
	}))

	return await Promise.allSettled(filename.map(async (file) => {
		const stat = await fs.stat(file)
		if (stat.isFile() && (Date.now() - stat.mtimeMs >= TIME)) {
			if (platform() === 'win32') {
				let fileHandle
				try {
					fileHandle = await fs.open(file, 'r+')
				} catch (e) {
					return e
				} finally {
					await fileHandle?.close()
				}
			}
			await fs.unlink(file)
		}
	}))
}