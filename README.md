# strudel-samples

My samples for [Strudel](https://strudel.cc).

## Use them

```js
samples('github:ethanfischer/strudel-samples')
$: s("nicechord")
```

Each WAV file is a sound with the name of the file. `-` and other characters become `_`, so `growl-stretched.wav` is `s("growl_stretched")`.

## Add a sample

1. Put the WAV file in this folder.
2. Run `node build.mjs`. It updates `strudel.json`.
3. Commit and push.

Do not rename a file that a pattern uses. The pattern then stops working.
