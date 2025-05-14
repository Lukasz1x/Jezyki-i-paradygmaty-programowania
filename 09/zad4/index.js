/* Dziedziczenie prototypowe polega na tym, że jeśli jakiś obiekt nie ma jakiejś metody lub właściwości, to szuka jej u swojego prototypu (obiektu, po którym dziedziczy).
Jeśli prototyp również jej nie ma, przeszukiwanie trwa dalej w łańcuchu prototypów, aż do końca (czyli do null). Jeśli nie zostanie nic znalezione, zwracana jest wartość undefined.
Klasy w JavaScript to tzw. "syntax sugar", czyli bardziej przyjazna składnia dla czegoś, co wcześniej i tak było możliwe przy użyciu funkcji konstrukcyjnych i prototypów.
Użycie class to tylko ładniejszy sposób zapisu, który ukrywa mechanikę prototypów, ale nadal z niej korzysta.
*/

String.prototype.mirror = function() {
    return this.split('').reverse().join('');
};



console.log("Ala ma kota".mirror() === "atok am alA");
console.log("Hello World!".mirror());