
function bigNumber(list){
    // validation
    if (typeof list !== 'object'){
        return 'error: reikia array tipo reiksmes.';
    }
    if (list.length === 0){
        return 'error: saras yra tuscias';
    }
    // logic
    let biggestnumber = -Infinity;

    for (let i=0; i<list.length; i++){
        const number = list[i];
        // list item validation
        if (typeof number !== 'number' || !isFinite(number)){
            continue;
        }
        // list logic
        if(number > biggestnumber){
            biggestnumber = number;
        }
    }
    // post logic validation
    if (biggestnumber === -Infinity){
        return 'error: sarase turi buti bent vienas normalus skaicius.'
    }

    // return result
    return biggestnumber;
}

console.log(bigNumber('pomidoras'));
console.log(bigNumber([]));
console.log(bigNumber([1]), '->', 1);
console.log(bigNumber([1,2,3]), '->', 3);
console.log(bigNumber([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNumber([69, 69, 69, 69, 66]), '->', 69);

console.log(bigNumber([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNumber([-5, 78, 14, 0, 18, 'asdf']), '->', 78);
console.log(bigNumber([-5, 78, 14, 'asdf', 0, 18]), '->', 78);
console.log(bigNumber(['asdf', -5, 78, 14, 0, 18]), '->', 78);
console.log(bigNumber(['asdf', true, false, [], [55], ['sdgf']]));

console.log(bigNumber(['asdf', -5, 78, Infinity, 14, 0, 18]), '->', 78);

