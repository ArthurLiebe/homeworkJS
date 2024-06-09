// caesarCipher.js

// Function to encrypt a single character
function encryptChar(char, shift) {
    const isUpperCase = char === char.toUpperCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = alphabet.indexOf(char.toLowerCase());

    if (index === -1) return char; // If not a letter, return as is

    let newIndex = (index + shift) % 26;
    if (newIndex < 0) newIndex += 26; // Ensure index remains positive

    let newChar = alphabet[newIndex];
    return isUpperCase ? newChar.toUpperCase() : newChar;
}

// Get the phrase and shift number from command line arguments
const phrase = process.argv[2];
const shift = parseInt(process.argv[3], 10);

if (!phrase || isNaN(shift)) {
    console.log('Please provide a phrase and a shift number.');
    process.exit(1);
}

  // Encrypt each character in the phrase
const encryptedPhrase = phrase
    .split('')
    .map(char => encryptChar(char, shift))
    .join('');

  // Display the encrypted phrase
console.log(encryptedPhrase);


// node caesarCipher.js "hello world" 3