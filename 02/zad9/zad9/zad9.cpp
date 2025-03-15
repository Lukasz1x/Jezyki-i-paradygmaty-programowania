#include <iostream>
#include <chrono>

using namespace std;

class tablica
{
    int* tab;
    long long rozmiar;
public:
    tablica(long long r)
    {
        rozmiar = r;
        tab = new int[rozmiar];
    }
    tablica(const tablica& o)
    {
        this->rozmiar = o.rozmiar;
        this->tab = new int[rozmiar];
        memcpy(this->tab, o.tab, rozmiar*sizeof(int));
    }
    ~tablica()
    {
        delete[] tab;
    }
};


void funkcja1(tablica &a) {}

void funkcja2(tablica a) {}

int main()
{
    tablica a(1'000'000'000);
    {
        auto begin = chrono::high_resolution_clock::now();
        funkcja1(a);
        auto end = chrono::high_resolution_clock::now();
        auto elapsed = chrono::duration_cast<chrono::nanoseconds>(end - begin);
        printf("Czas przekazywania przez referencje: %.6f sekund.\n", elapsed.count() * 1e-9);
        //Czas przekazywania przez referencje: 0.000001 sekund.
    }
    {
        auto begin = chrono::high_resolution_clock::now();
        funkcja2(a);
        auto end = chrono::high_resolution_clock::now();
        auto elapsed = chrono::duration_cast<chrono::nanoseconds>(end - begin);
        printf("Czas przekazywania przez wartość: %.6f sekund.\n", elapsed.count() * 1e-9);
        //Czas przekazywania przez wartoťŠ: 3.213010 sekund.
    }

}
