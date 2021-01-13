"use strict"
// jei noresim ka nors isspausdinti, tai naudojam console.log()
console.log(15899834)
console.log('labasrytas')

// inicijuoti kintamaji kurie nesikeis ir bus skaicius
const metai = 2021;

// inicijuoti kintamaji, kuris nesikeis ir bus tekstas
const vardas = 'Petras'

console.log(metai);
console.log(vardas);

console.log(metai, vardas);
console.log('Metai', metai);
console.log('Asmens vardas', vardas, 'ir jis gyveno:', metai, 'metais');

const pirmasskaicius = 13;
const antrasskaicius = 2;

const suma = pirmasskaicius + antrasskaicius;
console.log(suma);
console.log(pirmasskaicius, '+', antrasskaicius, '=', suma);

let adresas = 'Vilnius';
console.log(adresas);

adresas = 'Kaunas';
console.log(adresas);

let pinigine = 0;
const pirmaalga = 100;
pinigine = pinigine + pirmaalga;
console.log(pinigine);
console.log('turiu pinigu:', pinigine);

const antraalga = 250;
pinigine = pinigine + antraalga;
console.log('Turiu pinigu:', pinigine);

console.log('-------------------');

// matematines operacijos
const s1 = 5;
const s2 = 8;

console.log(s1 + s2);
console.log(s1 - s2);
console.log(s1 * s2);
console.log(s1 / s2);
console.log(s1 ** s2);

console.log(2 + 2 * 2);

console.log('-------------------');

// tekstines operacijos

const hi = 'labas';
const morning = 'rytas';

const sayhi = hi + ' ' + morning + '!';
console.log(sayhi);

// tekste naudojamos dvigubos kabutes
const dvigubostekste = 'Tekste naudojamos dvigubos (") kabutes.';
console.log(dvigubostekste);

// tekste naudojamos viengubos kabutes
const viengubostekste = "Tekste naudojamos viengubos (') kabutes.";
console.log(viengubostekste);

// tekste naudojamos viengubos ir dvigubos kabutes
const abitekste1 = 'Tekste yra abi kabutes 1 (\') ir 2 (").';
console.log(abitekste1);

const abitekste2 = "Tekste yra abi kabutes 1 (') ir 2 (\").";
console.log(abitekste2);

const abitekste12 = 'Tekste yra abi kabutes 1 (\') ir 2 (\").';
console.log(abitekste12);

const imgSrc = './img/doggo.jpg';
const h1 = 'labas rytas!';
const p = 'lorem lorem lorem';

const html1 = '<main>\n\
<img src="'+ imgSrc +'">\n\
    <div>\n\
        <h1>'+ h1 +'/h1>\n\
        <p>'+ p +'</p>\n\
    </div>\n\
</main>';
console.log(html1);

const html2 = "<main>\n\
<img src=\""+ imgSrc +"\">\n\
    <div>\n\
        <h1>'+ h1 +'/h1>\n\
        <p>"+ p +"</p>\n\
    </div>\n\
</main>";
console.log(html2);

const beautifulHTML = `<main>
<img src="${imgSrc}">
    <div>
        <h1>${h1}/h1>
        <p>${p}</p>
    </div>
</main>`;
console.log(beautifulHTML);

console.log('-----------------------------');

const person = 'Johnny Boy';
const candy = 'lolly pop';

const sentence = `${person} do you want a ${candy}?`;
console.log(sentence);