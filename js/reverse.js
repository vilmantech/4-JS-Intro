"use strict";
// perrasyti teksta is galo i prieki

const text = 'abcdefg';
const size = text.length;
let reversetext = ' ';

for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    reversetext = letter + reversetext;
    console.log(i, letter, reversetext);
}

// //  for (let i = 0; i < size; i++) {
//     const letter = text[size - i - 1];
//     reversetext += letter;
//     console.log(i, letter, reversetext);
// }

// for (let i = 1; i < size; i++) {
//     const letter = text[size - i];
//     reversetext += letter;
//     console.log(i, letter, reversetext);
// }

// for (let i = size - 1; i >= 0; i--) {
//     const letter = text[i];
//     reversetext += letter;
//     console.log(i, letter, reversetext);
// }

// for (let i = size; i > 0; i--) {
//     const letter = text[i - 1];
//     reversetext += letter;
//     console.log(i, letter, reversetext);
// }
console.log('finale gavau:', reversetext);
