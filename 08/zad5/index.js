function checkPalindrom(txt)
{
    let reversedTxt = txt.split("").reverse().join("");
    console.log(reversedTxt);
    return txt === reversedTxt
}

console.log(checkPalindrom("kajak"))
console.log(checkPalindrom("kot"))