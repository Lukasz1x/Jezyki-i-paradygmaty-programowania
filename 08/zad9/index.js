function wartosc_cyfry_rzymskiej(cyfra)
{
    switch (cyfra) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
    }
}

function rzymskie(napis)
{
    var liczba = 0;
    for (var i = 0; i < napis.length-1; i++)
    {
        var aktualna = wartosc_cyfry_rzymskiej(napis[i]);
        var nastepna = wartosc_cyfry_rzymskiej(napis[i+1]);
        if (aktualna < nastepna)
        {
            liczba -= aktualna;
        }else
        {
            liczba += aktualna;
        }
    }
    liczba += wartosc_cyfry_rzymskiej(napis[napis.length-1]);
    return liczba;
}

console.log(rzymskie("III"));           //3
console.log(rzymskie("LVIII"));         //58
console.log(rzymskie("MCMXCIV"));       //1994
console.log(rzymskie("IX"));            //9
console.log(rzymskie("MCMX"));          //1910