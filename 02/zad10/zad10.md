### Program:
```
int x = 2;
int y = 1;

void f() {
 x = x + 1;
 y = y + 2;
 print(x, y);
}

void g() {
 int x = 1;
 x = x + 2;
 y = y + 1;      
 print(x, y);
 f();      
}

void main() {
 g();
 f();
}
```

### Statyczne ustalanie zakresów:
Odwołanie do zmiennej `x` w funkcji `g()` odnosi się do jej własnej lokalnej zmiennej `x`. Natomiast w funkcji `f()` odwołanie do `x` odnosi się do zmiennej globalnej `x`. Kroki działania:
- w funkcji `g()` tworzymy zmienną `x` 
- do lokalnej zmiennej `x` dodajemy `2`
- następnie wypisujemy lokalną zmienną `x` i wychodzi `3`
- wywołujemy funkcję `f()` która modyfikuje globalną zmienną `x` oraz zwiększa jej wartość o `1` i wypisuje `3`
- na koniec jeszcze raz wywołujemy funkcję `f()`, znowu modyfikujemy globalne `x` i wypisuje `4`

Wynik:
```
3 2
3 4
4 6
```
### Dynamiczne ustalanie zakresów:
Odwołanie do zmiennej `x` w funkcji `g()` odnosi się do jej własnej lokalnej zmiennej `x`. Tym razem w funkcji `f()` odwołanie do `x` odnosi się do zmiennej `x` utworzonej w funkcji która ją wywołała, czyli fukcji `g()`. Kroki działania:
- w funkcji `g()` tworzymy zmienną `x` 
- do lokalnej zmiennej `x` dodajemy `2`
- następnie wypisujemy zmienną `x` i wychodzi `3`
- wywołujemy funkcję `f()` która modyfikuje zmienną `x` z funkcji `g()` oraz zwiększa jej wartość o `1` i wypisuje `4`
- na koniec jeszcze raz wywołujemy funkcję `f()`, ale tym razem operuje ona na globalnej zmiennej `x`, ponieważ została wywołana bezpośrednio z `main()`. Dlatego zwiększa globalne `x` z `2` na `3` i wypisuje `3`

Wynik:
```
3 2
4 4
3 6
```


W krokach działania pominąłem obliczenia związane ze zmienną `y`, ponieważ w obu przypadkach są wykonywane na globalnej zmiennej `y`.