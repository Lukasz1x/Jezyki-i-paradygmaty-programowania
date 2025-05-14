function printNumbers(nr)
{
    let result = "";
    for (let i = 0; i < nr; i++)
    {
        result += i + " ";
    }
    return result;
}

console.log(printNumbers(5));
