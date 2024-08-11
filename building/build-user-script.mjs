// 这个脚本用来把 '../src/meta.js' 与 '../src/main.js' 合并为一个文件，保存为 '../dist/polyfill-my-browser.user.js'。
// 整个脚本以 ESM 方式运行，因此不能使用 __dirname 和 __filename。

import fs from 'fs'
import path from 'path'

const fileMeta = '../src/meta.js'
const fileMain = '../src/main.js'
const fileOutput = '../dist/polyfill-my-browser.user.js'

const meta = fs.readFileSync(fileMeta, 'utf-8')
const main = fs.readFileSync(fileMain, 'utf-8')

const output = `${meta}\n${main}`

fs.writeFileSync(fileOutput, output)

console.log(`File ${fileOutput} saved.`)
