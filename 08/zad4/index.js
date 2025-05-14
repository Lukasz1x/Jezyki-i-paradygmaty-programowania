function generateRandom(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

let liczby = [];

for (let i = 0; i < 10; i++)
{
    liczby.push(generateRandom(1, 20));
}

let licz = 0;
for (let i = 0; i < 10; i++)
{
    if (liczby[i] > 10)
    {
        licz++;
    }
}

if (licz >= 5)
{
    console.log("udało się");
}else
{
    console.log("niestety nie")
}
console.log(liczby);