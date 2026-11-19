# strudel-samples

My samples for [Strudel](https://strudel.cc).

## Use them

```js
samples('github:ethanfischer/strudel-samples')
$: s("nicechord")
```

Each WAV file is a sound with the name of the file. `-` and other characters become `_`, so `growl-stretched.wav` is `s("growl_stretched")`.

## Add a sample

1. Put the audio file (WAV, MP3, OGG or FLAC) in this folder.
2. Commit and push. A pre-commit hook runs `node build.mjs`, which updates `strudel.json`.

After you clone this repo, run `git config core.hooksPath .githooks` once to turn on the hook.

Do not rename a file that a pattern uses. The pattern then stops working.
