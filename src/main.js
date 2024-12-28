import './style.css'
import Hls2Mp4 from 'hls2mp4'

document.querySelector('#app').innerHTML = `
  <button id="download" type="button">download video</button>
`

const downloadButton = document.querySelector('#download')

downloadButton.addEventListener('click', downloadVideo)

const hls2mp4 = new Hls2Mp4({
  maxRetry: 10,
  tsDownloadConcurrency: 10,
  outputType: 'mp4',
  ffmpegBaseUrl: 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm'
}, (type, progress) => {
  // type = 0  => parse m3u8
  // type = 1  => downloading ts
  // type = 2  => merge ts
  console.log(type, progress);
})

async function downloadVideo() {
  downloadButton.disabled = true
  const buffer = await hls2mp4.download("https://xelvornwave36.pro/file2/+1aj9Bn2WBfQEk0+6dT~kk+FvcuHkPqnL8UOZzpPZUZzVUXv4nWUkyRezrw8F7dhfrC1JuNyxRENLJOO+FqwUvlvu33+fvxv1a2ZEBrLBDY13lFwrGdY4YR5czk3a1pinoBuZwIxqUYNPkh1WulIfoEVZ8oFR1R4mREeCHmTEkU=/MTA4MA==/aW5kZXgubTN1OA==.m3u8");
  hls2mp4.saveToFile(buffer, 'test.mp4');
  downloadButton.disabled = false;
}
