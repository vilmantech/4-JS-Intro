
console.log('pradzia');
for (let i = 0; i< 5; i++) {
    console.log('kartotinis kodas', i);
}
console.log('pabaiga');

console.log('pradzia1');
for (let i = 2; i< 10; i+= 2) {
    console.log('kartotinis kodas1', i);
}
console.log('pabaiga1');

console.log('----------------------');

const words = ['abc', 'Borisas', 'citrina', 'duobe', 'eziukas', 'fabrikas'];
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log(i, words[i]);
    console.log ('pirma zodzio raide', word[0]);
}
console.log(words);
