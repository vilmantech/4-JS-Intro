// salygos:
// - grazinamas sandaugos rezultatas
// - dauginami tik skaiciai

function multiply (a, b) {
    if (typeof a !== 'number'){
        return 'error: pirmasis parametras turi buti skaicius';
    }
    if (' ' + a === 'NaN') {
        return 'error: pirmasis parametras turi buti tikras skaicius.';
    }
    if (typeof a === Infinity || a === -Infinity){
        return 'error: pirmasis parametras negali buti begalybe';
    }
    // if (Math.abs(a) === Infinity){
    //     return 'error: pirmasis parametras negali buti begalybe';
    // }
    if (typeof b !== 'number'){
        return 'error: antrasis parametras turi buti skaicius';
    }
    // if (isNaN(b)) {
    //     return 'error: pirmasis parametras turi buti tikras skaicius.';
    // }
    if (!isFinite(b)) {
        return 'error: pirmasis parametras turi buti tikras skaicius.';
    }
    const rez = a * b;
    return rez === 0 ? 0 : rez;
}


const m1 = multiply (2, 2);
console.log(m1);

const m2 = multiply (6, 7);
console.log(m2);

console.log(multiply(2, 2), '->', 4);
console.log(multiply(-1, 0), '->', 0);

console.log(multiply('labas', 'rytas'));
console.log(multiply(5, 'rytas'));
console.log(multiply('labas', 5));

console.log(multiply(NaN, 5));
console.log(multiply(5, NaN));

console.log(multiply(Infinity, 5));
