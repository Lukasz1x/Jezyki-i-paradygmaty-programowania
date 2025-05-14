function fun(strs)
{
    let min = strs[0].length;
    for(let i = 0; i<strs.length; i++)
    {
        if(strs[i]<min)
        {
            min=strs[i].length;
        }
    }
    let prefix=""
    for (let i=0; i<min; i++)
    {
        let dodaj = true;
        let znak=strs[0][i];
        for(let j = 0; j<strs.length; j++)
        {
            if(znak!==strs[j][i])
            {
                dodaj=false;
                break;
            }
        }
        if(dodaj)
        {
            prefix+=znak;
        }
    }
    return prefix;
}

console.log(fun(["flower", "flow", "flight"]));
console.log(fun(["dog","racecar","car"]));
console.log(fun(["adog","aracecar","acar", ""]));
console.log(fun(["dog"]));