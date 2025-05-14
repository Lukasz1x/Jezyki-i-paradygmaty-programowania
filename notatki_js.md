# 🟨 Podstawy JavaScript
### 🔹 Co to jest JavaScript?
JavaScript to język programowania, który działa głównie w przeglądarkach internetowych. Służy do dodawania interaktywności do stron WWW. Może być również używany po stronie serwera (np. z Node.js).
### 🔹 Gdzie umieszczamy JavaScript?
W HTML możemy dodać JavaScript na dwa sposoby:
#### 1. Wewnątrz znacznika `<script>`:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Moja strona</title>
    <script>
      alert("Witaj świecie!");
    </script>
  </head>
  <body>
    <h1>Hello!</h1>
  </body>
</html>
```
#### 2. W osobnym pliku `.js`:
index.html:
```html
<script src="script.js"></script>
```
script.js:
```js
console.log("To działa!");
```
### 🔹 Wyświetlanie danych
`console.log()` – wypisuje dane do konsoli (dla debugowania):
```js
console.log("Hello world");
```
`alert()` – pokazuje okienko z wiadomością:
```js
alert("Uwaga!");
```
`prompt()` – pyta użytkownika o dane:
```js
let imie = prompt("Jak masz na imię?");
console.log("Witaj, " + imie);
```
### 🔹 Komentarze
Jednoliniowy:
```js
// To jest komentarz
```
Wieloliniowy:
```js
/*
  To też jest komentarz,
  ale zajmuje więcej linii
*/
```
### 🔹 Typy danych (przykłady):
Typ	| Przykład
--|--
Liczby|	`42`, `3.14`
Łańcuchy|	`"tekst"`, `'napis'`
Boolean|	`true`, `false`
Tablice|	`[1, 2, 3]`
Obiekty|	`{ imie: "Jan", wiek: 30 }`
`null`|	brak wartości
`undefined`|	niezdefiniowana wartość
# 🟩 Zmienne i tablice w JavaScript
### 🔹 Tworzenie zmiennych
Do deklarowania zmiennych używamy słów kluczowych: let, const, a wcześniej także var (dziś rzadziej używane).

`let` – zmienna, którą można zmieniać:
```js
let wiek = 25;
wiek = 26;  // OK
console.log(wiek); // 26
```
`const` – stała, której nie można zmienić:
```js
const imie = "Ala";
// imie = "Ela"; // ❌ Błąd – nie można zmienić stałej
```
`var` – stara wersja `let`, ma inne zachowanie (np. zasięg działania):
```js
var x = 10;
```
✅ Zalecenie: używaj let i const – są bezpieczniejsze i bardziej przewidywalne.
### 🔹 Nazewnictwo zmiennych
- Muszą zaczynać się od litery, `$` lub `_`
- Nie mogą zawierać spacji
- Warto stosować camelCase:
```js
let liczbaUczniow = 30;
```
### 🔹 Typy danych – przypisanie
```js
let liczba = 123;           // liczba
let tekst = "Hello";        // string
let prawda = true;          // boolean
let nic = null;             // pusta wartość
let nieokreslone;           // undefined
```
### 🔹 Tablice (Arrays)
Tablica to zmienna, która przechowuje wiele wartości:
```js
let liczby = [1, 2, 3, 4, 5];
let imiona = ["Ala", "Ola", "Ela"];
```
Dostęp do elementów:
```js
console.log(liczby[0]); // 1 (pierwszy element)
console.log(imiona[2]); // "Ela"
```
Modyfikacja elementu:
```js
imiona[1] = "Ula";
console.log(imiona); // ["Ala", "Ula", "Ela"]
```
Dodawanie elementów:
```js
imiona.push("Iza"); // dodaje na koniec
console.log(imiona); // ["Ala", "Ula", "Ela", "Iza"]
```
Usuwanie elementu z końca:
```js
imiona.pop(); // usuwa "Iza"
```
Długość tablicy:
```js
console.log(imiona.length); // 3
```
# 🟦 Operacje na stringach w JavaScript
### 🔹 Tworzenie stringów
```js
let tekst1 = "To jest tekst";
let tekst2 = 'To też jest tekst';
let tekst3 = `A to szablon (template string)`;
```
### 🔹 Łączenie stringów (konkatenacja)
Za pomocą `+`:
```js
let imie = "Anna";
let przywitanie = "Cześć, " + imie + "!";
console.log(przywitanie); // "Cześć, Anna!"
```
Za pomocą szablonów (`template literals`):
```js
let imie = "Anna";
let wiek = 28;
let tekst = `Mam na imię ${imie} i mam ${wiek} lat.`;
console.log(tekst); // "Mam na imię Anna i mam 28 lat."
```
### 🔹 Właściwości i metody stringów
`length` – długość tekstu:
```js
let napis = "JavaScript";
console.log(napis.length); // 10
```
`toUpperCase()` i `toLowerCase()`
```js
let slowo = "hello";
console.log(slowo.toUpperCase()); // "HELLO"
console.log(slowo.toLowerCase()); // "hello"
```
`includes()` – sprawdza, czy zawiera podciąg:
```js
let zdanie = "Lubię programować";
console.log(zdanie.includes("program")); // true
```
`indexOf()` – zwraca indeks pierwszego wystąpienia tekstu:
```js
console.log(zdanie.indexOf("program")); // 6
```
`slice(start, end)` – wycina fragment tekstu:
```js
let fragment = zdanie.slice(6, 15);
console.log(fragment); // "programo"
```
`replace()` – zamienia fragment tekstu:
```js
let nowyTekst = zdanie.replace("programować", "czytać książki");
console.log(nowyTekst); // "Lubię czytać książki"
```
`trim()` – usuwa białe znaki z początku i końca:
```js
let surowy = "  tekst  ";
console.log(surowy.trim()); // "tekst"
```
# 🟪 Funkcje w JavaScript
### 🔹 Co to jest funkcja?
Funkcja to blok kodu, który można wielokrotnie wywołać – wykonuje określoną czynność.
### 🔹 Definiowanie funkcji
1. Tradycyjna składnia (function declaration):
```js
function przywitaj(imie) {
  console.log("Cześć, " + imie + "!");
}

przywitaj("Ala"); // Cześć, Ala!
```
2. Funkcja jako wyrażenie (function expression):
```js
const dodaj = function (a, b) {
  return a + b;
};

console.log(dodaj(2, 3)); // 5
```
3. Funkcja strzałkowa (arrow function):
```js
const pomnoz = (a, b) => {
  return a * b;
};

console.log(pomnoz(4, 5)); // 20
```
👉 Jeżeli funkcja strzałkowa ma jedno wyrażenie, można pominąć `{}` i `return`:
```js
const podwoj = x => x * 2;
console.log(podwoj(7)); // 14
```
### 🔹 Parametry i argumenty
```js
function powitanie(imie = "Gościu") {
  console.log(`Witaj, ${imie}`);
}

powitanie("Ola");     // Witaj, Ola
powitanie();          // Witaj, Gościu
```
### 🔹 Zwracanie wartości (`return`)
```js
function kwadrat(x) {
  return x * x;
}

let wynik = kwadrat(6);
console.log(wynik); // 36
```
### 🔹 Funkcja w funkcji (zagnieżdżone):
```js
function outer() {
  function inner() {
    return "wewnątrz";
  }
  return "Na zewnątrz i " + inner();
}

console.log(outer()); // "Na zewnątrz i wewnątrz"
```
### 🔹 Funkcje jako dane (przekazywanie funkcji)
```js
function wykonaj(funkcja) {
  funkcja();
}

wykonaj(() => {
  console.log("Wykonałem funkcję!");
});
```
# 🟫 Klasy i obiekty w JavaScript
### 🔹 Co to jest obiekt?
Obiekt to zbiór par klucz-wartość (tzw. właściwości i metody). Przechowuje dane i funkcje w jednej strukturze.
### 🔹 Tworzenie obiektu (literal obiektowy)
```js
let osoba = {
  imie: "Jan",
  wiek: 30,
  przywitaj: function() {
    console.log("Cześć, mam na imię " + this.imie);
  }
};

console.log(osoba.imie);       // "Jan"
osoba.przywitaj();             // "Cześć, mam na imię Jan"
```
👉 `this` odnosi się do bieżącego obiektu
### 🔹 Dodawanie/usuwanie właściwości
```js
osoba.nazwisko = "Kowalski";
delete osoba.wiek;
```
### 🔹 Klasy (ES6)
Służą do tworzenia wzorów obiektów (tak jak w wielu innych językach).
```js
class Zwierze {
  constructor(imie, gatunek) {
    this.imie = imie;
    this.gatunek = gatunek;
  }

  przedstawSie() {
    console.log(`Jestem ${this.imie}, gatunek: ${this.gatunek}`);
  }
}
```
Tworzenie obiektu na podstawie klasy:
```js
let kot = new Zwierze("Mruczek", "kot");
kot.przedstawSie(); // "Jestem Mruczek, gatunek: kot"
```

