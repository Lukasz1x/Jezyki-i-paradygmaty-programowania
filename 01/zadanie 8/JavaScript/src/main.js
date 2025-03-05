function potega(x, n)
{
  if(n==0)
  {
    return 1;
  }
  if(n % 2 == 0)
  {
    let w = potega(x, n/2);
    return w*w;
  }else
  {
    return x * potega(x, n-1);
  }
}

const liczba = 5;
const wykladnik = 3;


console.log(potega(liczba, wykladnik));

