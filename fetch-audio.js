const fs = require('fs');
const https = require('https');

const url = 'https://cdn.pixabay.com/download/audio/2022/08/02/audio_884cb93fd2.mp3?filename=happy-birthday-to-you-piano-version-13976.mp3';
const dest = './public/happy-birthday.mp3';

https.get(url, (res) => {
  if (res.statusCode === 302 || res.statusCode === 301) {
    https.get(res.headers.location, (res2) => {
      const file = fs.createWriteStream(dest);
      res2.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Download complete');
      });
    });
  } else {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download complete');
    });
  }
}).on('error', (err) => {
  console.error('Error downloading:', err.message);
});
