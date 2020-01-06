document.addEventListener("DOMContentLoaded",()=>{
    let submit = document.getElementById("btnSubmit");
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        console.clear();
        // console.log("asdf");
        let diceCount = document.getElementById("diceCount").value;
        console.log("Dice Count: " + diceCount);
        let toHitOptions = document.getElementsByName("hit");
        let toWoundOptions = document.getElementsByName("wound");
        let rendOptions = document.getElementsByName("rend");
        let armorOptions = document.getElementsByName("armor");
        let damage = document.getElementById("totalDamage").value;
        let toHit = 2;
        let toWound = 2;
        let rend = 0;
        let armor = 2;

        toHit = checkOptions(toHitOptions);
        toWound = checkOptions(toWoundOptions);
        rend = checkOptions(rendOptions);
        armor = checkOptions(armorOptions);
        
        console.log("To Hit: " + toHit);
        console.log("To Wound: " + toWound);
        console.log("Rend: " + rend);
        console.log("Armor: " + armor);
        console.log("*************************************");



        let totalHits = getHits(diceCount, toHit);
        let totalWounds = getWounds(totalHits, toWound);
        let totalSuccesses = armorCheck(rend,armor,totalWounds);
        let totalDamage = damageThrough(totalSuccesses, damage);
    });
})

function getHits(attacks, toHit)
{
    let result = attacks * toHit;
    console.log("*************************************");
    console.log("Total Hits: " + result);
    console.log("*************************************");

    return Math.floor(result);
}

function getWounds(hits, toWound)
{
    let result = hits * toWound;
    console.log("*************************************");
    console.log("Total Wounds: " + result);
    console.log("*************************************");

    return Math.floor(result);
}

function armorCheck(rend, targetArmor, wounds)
{
    let armor = 0;
    let result = 0;
    if (targetArmor == 0)
    {
        result = wounds;
        return Math.floor(result);
    }

    result = wounds * targetArmor;

    if (result > wounds)
    {
        result = wounds;
    }

    console.log("*************************************");
    console.log("Total Unsaved Wounds: " + result);
    console.log("*************************************");

    return Math.floor(result);
}

function damageThrough(successfulWounds, damage)
{

    let totalDamage = 0;
    if (isNaN(damage))
    {
        
        if (damage == "d3")
        {
            for(let i = 0; i < successfulWounds;i++)
            {
                totalDamage += 2;
            }
            
        }
        else if (damage == "d6")
        {
            for(let i = 0; i < successfulWounds;i++)
            {
                totalDamage += 4;
            }
        }
        else
        {
            // Nothing Valid
        }
    }
    else
    {
        // is number
        totalDamage = successfulWounds * damage;
    }

    console.log("*************************************");
    console.log("Total Damage: " + totalDamage);
    console.log("*************************************");

    return totalDamage;
}

function whichValue(value)
{
    let realValue = 0;
    if (value == 2)
    {
        realValue = 5/6;
    }
    else if (value == 3)
    {
        realValue = 4/6;
    }
    else if (value == 4)
    {
        realValue = 3/6;
    }
    else if (value == 5)
    { 
        realValue = 2/6;
    }
    else if (value == 6)
    {
        realValue = 1/6;
    }
    else if (value == "-")
    {
        returnValue = 0;
    }
    else
    {
        console.log("issue with whichValue function");
    }

    return realValue;
}

function checkOptions(value)
{
    let returnValue = 0;

    for (let i = 0; i < value.length;i++)
    {
        if(value[i].checked)
        {
            // This is reversed
            returnValue = whichValue(value[i].value);
            break;
        }
    }
    return returnValue;
}

function displayTotals(hits,wounds,rend,armor,damage)
{

}