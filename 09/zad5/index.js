/*Domknięcie to sytuacja, w której funkcja zapamiętuje zmienne ze swojego otoczenia (zakresu), nawet jeśli ten zakres już się skończył.
Można stwierdzić, że zwrócona funkcja to kapsuła czasu, która zapamiętuje wszystko, co było wokół niej w momencie, gdy została stworzona – szczególnie zmienne lokalne.
Nawet jeśli funkcja ta zostanie wykonana później, gdzie indziej, to nadal ma dostęp do tych zmiennych, jakby miała swój własny plecak z nimi.
*/

function createCounter()
{
    let licznik = 0;
    return function()
    {
        licznik++;
        return licznik;
    }
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2