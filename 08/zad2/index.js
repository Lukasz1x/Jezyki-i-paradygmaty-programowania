// a) let vs const vs var

var a = 1;         // var: zasięg funkcji, można redeklarować i nadpisywać
let b = 2;         // let: zasięg bloku, można nadpisywać, ale nie redeklarować
const c = 3;       // const: zasięg bloku, nie można nadpisywać ani redeklarować

// Przykład zmiany wartości
b = 20;            // OK
// c = 30;         // Błąd! const nie pozwala na zmianę

// b) Typowanie w JavaScript

let x = 42;        // dynamiczne typowanie – x to liczba
x = "tekst";       // teraz x to string

let y = 5 + "3";   // słabe typowanie – wynik to "53" (string)