function reversestring(text){
    const size = text.length;
    let reversetext = ' ';
    for (let i = 0; i < size; i++) {
            const letter = text[i];
            reversetext = letter + reversetext;
    }
return reversetext;
}
console.log(reversestring('labas'), '-->', 'sabal');
console.log(reversestring('sedek'), '-->', 'kedes');