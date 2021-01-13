
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