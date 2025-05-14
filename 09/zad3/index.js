let text = {
    check: function (txt, word) {
        let wynik =0;
        for (let i = 0; i < txt.length; i++) {
            wynik=0;
            if (txt[i] === word[0]) {
                for (let j = 0; j < word.length && i+j <txt.length; j++) {
                    if(txt[i+j] == word[j]) {
                        wynik++;
                    }
                }
                if(wynik == word.length) {
                    return true;
                }
            }
        }
        return false;
    },

    getCount: function(txt)
    {
        return txt.length;
    },

    getWordsCount: function(txt)
    {
        let spacja =false;
        let ilosc = 1;
        if (txt[0] == " " || txt.length == 0)
        {
            spacja=true;
            ilosc=0;
        }
        for(let i=0; i < txt.length; i++)
        {
            if (txt[i] == " ")
            {
                spacja = true;
            }else
            {
                if (spacja)
                {
                    spacja = false;
                    ilosc++;
                }
            }
        }
        return ilosc;
    },

    setCapitalize: function(txt)
    {
        let wynik = '';
        spacja=true;
        for(let i=0; i < txt.length; i++)
        {
            let znak = txt[i];
            if (znak === ' ')
            {
                spacja = true;
                wynik+=znak;

            }else
            {
                if(spacja)
                {
                    wynik+=znak.toUpperCase();
                    spacja = false;
                }else
                {
                    wynik+=znak;
                }
            }
        }
        return wynik;
    },

    setMix: function(txt)
    {
        let wynik = '';
        zmien=true;
        for(let i=0; i < txt.length; i++)
        {
            let znak = txt[i];
            if (zmien)
            {
                wynik+=znak.toLowerCase();

            }else
            {
                wynik+=znak.toUpperCase();
            }
            zmien = !zmien;
        }
        return wynik;
    },

    generateRandom: function (lng)
    {
        let wynik = '';
        for (let i=0; i < lng; i++)
        {
            let znak = String.fromCharCode(Math.floor(Math.random() * (122-97+1)+97));
            wynik+=znak;
        }
        return wynik;
    }
}



console.log(text.check("ala ma kota", "kota"));
console.log(text.check("ala ma kota", "koty"));
console.log(text.getWordsCount("Ala ma kota"));
console.log(text.getWordsCount(" "));
console.log(text.getWordsCount(" Ala ma kota"));
console.log(text.getWordsCount("Ala ma kota   f   "));
console.log(text.setCapitalize("ala ma kota"));
console.log(text.setMix("ala ma kota"));
console.log(text.generateRandom(10));
console.log();

console.log(text.check("ala ma kota", "kota"));
console.log(text.getCount("ala ma kota"));
console.log(text.getWordsCount("Ala ma kota"));
console.log(text.setCapitalize("ala ma kota"));
console.log(text.setMix("ala ma kota"));
console.log(text.generateRandom(10));
console.log("______________________")
console.log(text.check("ala ma kota", "kota"));        // true
console.log(text.check("Ala ma psa", "kota"));         // false
console.log(text.check("Ala    ma kota", "ma"));       // true
console.log("______________________")
console.log(text.getCount("ala ma kota"));             // 11
console.log(text.getCount(""));                        // 0
console.log(text.getCount("Ala, ma. kota!"));          // 14 (interpunkcja też liczy się jako litera)
console.log("______________________")
console.log(text.getWordsCount("ala ma kota"));        // 3
console.log(text.getWordsCount("   Ala  ma   psa "));  // 3
console.log(text.getWordsCount(""));                   // 0
console.log("______________________")
console.log(text.setCapitalize("ala ma kota"));        // "Ala Ma Kota"
console.log(text.setCapitalize("Ala MA PSA"));         // "Ala MA PSA" (pierwsza litera wielka, reszta bez zmian)
console.log(text.setCapitalize("kotek"));              // "Kotek"
console.log("______________________")
console.log(text.setMix("ala ma kota"));               // "aLa mA KoTa"
console.log(text.setMix("ABCDE"));                     // "aBcDe"
console.log(text.setMix("A B C"));                     // "a b c"
console.log("______________________")
console.log(text.generateRandom(0));                   // ""
console.log(text.generateRandom(1));                   // np. "y"
console.log(text.generateRandom(10));                  // np. "kdraswueyp"
console.log(text.generateRandom(20));                  // np. "alpwusytmrgezrwdnkty"