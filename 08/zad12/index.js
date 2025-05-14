function schody(n)
{
    if (n==1)
    {
        return 1;
    }
    if (n==2)
    {
        return 2;
    }
    return schody(n - 1)+schody(n - 2);
}

for (var i = 1; i <= 45; i++)
{
    console.log(i, schody(i));
}
