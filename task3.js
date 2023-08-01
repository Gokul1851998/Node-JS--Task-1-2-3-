const fs = require('fs');

const filename = 'C:/Users/gokul/OneDrive/Desktop/ewat/data.txt';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    const wordCount = countWords(data);
    console.log(`Total word count: ${wordCount}`);
  }
});

function countWords(text) {
  const words = text.split(/\s+/)
  return words.length;
}
