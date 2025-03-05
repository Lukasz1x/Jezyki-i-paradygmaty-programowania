#include <iostream>
#include <iomanip>


using namespace std;

int main() {
    double suma=0;
    cout << std::setprecision(16) << endl;
    for (long long k=0;;k++)
    {
        suma += double(k % 2 == 0 ? 1 : -1) / double(2 * k + 1);
        if(k%1000000==0)
            cout << suma * 4 << " - dla k = " << k << "\n";
    }
    return 0;
}
