// pigLatin.js

// Function to convert a word to Pig Latin
function toPigLatin(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const lowerWord = word.toLowerCase();

  if (vowels.includes(lowerWord[0])) {
    return word + 'way';
  } else if (!vowels.includes(lowerWord[0]) && !vowels.includes(lowerWord[1])) {
    return word.slice(2) + word.slice(0, 2) + 'ay';
  } else {
    return word.slice(1) + word[0] + 'ay';
  }
}

// Get the input phrase from command line arguments
const inputPhrase = process.argv[2];

if (!inputPhrase) {
  console.log('Please provide an English phrase as an argument.');
  process.exit(1);
}

// Split the input phrase into words
const words = inputPhrase.split(' ');

// Convert each word to Pig Latin
const pigLatinWords = words.map(word => {
  const punctuation = word.match(/[.,!?;:]$/);
  const cleanWord = word.replace(/[.,!?;:]$/, '');
  const pigLatinWord = toPigLatin(cleanWord);
  
  return punctuation ? pigLatinWord + punctuation[0] : pigLatinWord;
});

// Join the words back into a phrase
const pigLatinPhrase = pigLatinWords.join(' ');

// Output the translated phrase
console.log(pigLatinPhrase);