// Writes strudel.json from the audio files in this folder. The pre-commit hook runs it, so you do not have to.
// Each file is a sound with the name of the file: nicechord.wav is s("nicechord").
// - and other characters become _, because - is a rest in mini-notation.
// The dev server in the strudel repo imports sampleMap, so a new file plays before you commit it.
import { readdirSync, writeFileSync } from 'node:fs'
import { extname } from 'node:path'

const audio = ['.wav', '.mp3', '.ogg', '.flac']

export function sampleMap(dir) {
  const map = { _base: 'https://raw.githubusercontent.com/ethanfischer/strudel-samples/main/' }
  for (const f of readdirSync(dir).filter(f => audio.includes(extname(f).toLowerCase())).sort()) {
    const name = f.slice(0, -extname(f).length).toLowerCase().replace(/[^a-z0-9_]/g, '_')
    if (map[name]) throw new Error(`${map[name][0]} and ${f} both become s("${name}"). Rename one.`)
    map[name] = [f]
  }
  return map
}

if (import.meta.filename === process.argv[1]) {
  const map = sampleMap(import.meta.dirname)
  writeFileSync(`${import.meta.dirname}/strudel.json`, JSON.stringify(map, null, 2) + '\n')
  console.log(Object.keys(map).filter(k => k !== '_base').map(k => `s("${k}")`).join('\n'))
}
