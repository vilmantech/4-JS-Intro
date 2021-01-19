
function numLength(number){
    // validation
    if (typeof number !== 'number'){
        return 'error: reikia skaiciaus.'
    }
    if (isNaN(number)){
        return 'error: turi buti tikras skaicius.'
    }
    if (!isFinite(number)) {
        return 'error: turi buti tikras skaicius, ne begalybe'
    }

    // logic
    const numberAsString = '' + number;
    let length = numberAsString.length;

    if(number < 0) {
        length--;
    }

    if( number % 1 !== 0) {
        length--;
    }

    // return
    return length;
}


console.log(numLength(5), '->', 1);
console.log(numLength(781), '->', 3);
console.log(numLength(367994792), '->', 9);

console.log(numLength(true));
console.log(numLength('asd'));
console.log(numLength(NaN));
console.log(numLength(Infinity));

console.log(numLength(-5), '->', 1);
console.log(numLength(-781), '->', 3);
console.log(numLength(-367994792), '->', 9);

console.log(numLength(-5.122), '->', 4);
console.log(numLength(-781.342), '->', 6);
console.log(numLength(-367994792.543), '->', 12);