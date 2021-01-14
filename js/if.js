const m = 4;
const n = 2;

if (m > n) {
    console.log('taip');
} else {
    console.log('ne');
}

console.log('----------------------');

const a = 400;
const b = '400';
const c = +b;
console.log(c);

if (a === c) {
    console.log('taip');
} else {
    console.log('ne');
}

console.log('----------------------');

const spalva = 'zalia';

if (spalva === 'melyna') {
    console.log('Arijai');
} else if (spalva === "zalia") {
    console.log('gerai slepiasi zolej');
} else if ( spalva === 'rudos') {
    console.log('truksta zodziuuuu');
}

console.log('----------------------');

const moneta = 'briauna';

if (moneta === 'skaicius') {
    console.log('iskrito skaicius');
} else {
  if (moneta === 'herbas'){
      console.log ('iskrito herbas');
  } else {
      console.log('tai gal iskrito briauna?')
  }
}