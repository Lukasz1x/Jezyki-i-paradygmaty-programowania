function random(max)
{
    return Math.floor(Math.random()*(max+1));
}

let tab = [];

for (let i = 0; i < 20; i++) {
    tab.push(random(50));
}
console.log(tab);
tab.sort((a, b) => a - b);
console.log(tab);
let suma = 0;
for (let i = 0; i < 20; i++) {
    suma +=tab[i];
}
console.log(suma);
console.log(suma/tab.length);


