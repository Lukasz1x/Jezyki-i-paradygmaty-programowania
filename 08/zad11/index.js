function dlugosc_slowa(napis)
{
    let spacja =false;
    let dlugosc = 0;
    for(let i=0; i < napis.length; i++)
    {
        if (napis[i] == " ")
        {
            spacja = true;
        }else
        {
            if (spacja)
            {
                spacja = false;
                dlugosc = 1;
            }else
            {
                dlugosc += 1;
            }
        }
    }
    return dlugosc;
}



console.log(dlugosc_slowa("Hello World"));
console.log(dlugosc_slowa("   fly me   to   the moon  "));
console.log(dlugosc_slowa("Hello_World"));