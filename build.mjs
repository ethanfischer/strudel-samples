// Writes strudel.json from the WAV files in this folder. Run node build.mjs after you add, rename or delete a file.
// Each file is a sound with the name of the file: nicechord.wav is s("nicechord").
// - and other characters become _, because - is a rest in mini-notation.
import { readdirSync, writeFileSync } from 'node:fs'
import { extname } from 'node:path'

const dir = import.meta.dirname
const map = { _base: 'https://raw.githubusercontent.com/ethanfischer/strudel-samples/main/' }
for (const f of readdirSync(dir).filter(f => extname(f).toLowerCase() === '.wav').sort()) {
  const name = f.slice(0, -4).toLowerCase().replace(/[^a-z0-9_]/g, '_')
  if (map[name]) throw new Error(`${map[name][0]} and ${f} both become s("${name}"). Rename one.`)
  map[name] = [f]
}
writeFileSync(`${dir}/strudel.json`, JSON.stringify(map, null, 2) + '\n')
console.log(Object.keys(map).filter(k => k !== '_base').map(k => `s("${k}")`).join('\n'))
