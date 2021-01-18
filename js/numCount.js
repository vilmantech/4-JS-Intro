"use strict";

// 0 - 0     = 0
// 0 - 4     = 10
// 0 - 100   = 5050
// 574 - 815 = baisiai didelis teigiamas skaicius
// -50 - 50  = 0
// -70 - 30  = santykinai nedidelis neigiamas skaicius (-2020)

const from = 0;
const till = 4;
let sum = 0;

for (let i = from; i <= till; i++){
    sum += i;
    console.log(i, sum);
}

const ats = `suma nuo ${from} iki ${till} yra ${sum}.`;
console.log(ats);




