const fs = require('fs').promises;

function countWords(text) {
  const words = text.split(/\s+/);
  const nonEmptyWords = words.filter(word => word !== '');
  return nonEmptyWords.length;
}

async function countWordsInFile() {
  try {
    const data = await fs.readFile('data.txt', 'utf8');
    const wordCount = countWords(data);
    console.log('Total word count:', wordCount);
  } catch (err) {
    console.error('Error reading the file:', err);
  }
}

countWordsInFile();