document.addEventListener("DOMContentLoaded",()=>{
    let twoPlus = 5/6;
    let threePlus = 4/6;
    let fourPlus = 3/6;
    let fivePlus = 2/6;
    let sixPlus = 1/6;

    console.log("2+: " + twoPlus);
    console.log("3+: " + threePlus);
    console.log("4+: " + fourPlus);
    console.log("5+ :" + fivePlus);
    console.log("6+ :" + sixPlus);

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

        for (let i = 0; i < toHitOptions.length;i++)
        {
            if(toHitOptions[i].checked)
            {
                // This is reversed
                console.log("To Hit: " + toHitOptions[i].value);
                toHit = (toHitOptions[i].value - 1) / 6;
                console.log("in loop to hit: " + toHit);
                break;
            }
        }

        for (let i = 0; i < toWoundOptions.length;i++)
        {
            if(toWoundOptions[i].checked)
            {
                // This is reversed
                console.log("To Wound: " + toWoundOptions[i].value);
                toWound = (toWoundOptions[i].value -1) / 6;
                break;
            }
        }

        for (let i = 0; i < rendOptions.length;i++)
        {
            if (rendOptions[i].checked)
            {
                console.log("Rend: " + rendOptions[i].value);
                rend = rendOptions[i].value;
                if (rend == "-")
                {
                    rend = 0;
                }
                break;
            }
        }

        for (let i = 0; i < armorOptions.length; i++)
        {
            if (armorOptions[i].checked)
            {
                console.log("Target Armor: " + armorOptions[i].value);
                armor = armorOptions[i].value;
                if (armor == "-")
                {
                    armor = 0;
                }
                else
                {
                    armor--;
                }
                break;
            }
        }
        let totalHits = getHits(diceCount, toHit);
        console.log("Damage per attack: " + damage);
        console.log("Total Hits: " + totalHits)
        let totalWounds = getWounds(totalHits, toWound);
        console.log("Total Wounds: " + totalWounds);
        let totalSuccesses = armorCheck(rend,armor,totalWounds);
        console.log("Total Successes: " + totalSuccesses);
        let totalDamage = damageThrough(totalSuccesses, damage);
        console.log("Total Damage:  " + totalDamage);

        
    });

    // console.log("Roll 40 dice looking for 4 up.")
    // let diceCount = 40;
    // let result = diceCount * fourPlus;
    // console.log("Out of " + diceCount + " dice, " + result + " were successes.");


})


function getHits(attacks, toHit)
{
    console.log('getHits confirmed');
    let result = attacks * toHit;
    return result;
}

function getWounds(hits, toWound)
{
    console.log("getWounds confirmed");
    let result = hits * toWound;
    return result;
}

function armorCheck(rend, targetArmor, wounds)
{
    let armor = 0;
    let chanceToBeat = 0;
    let result = 0;
    console.log("armorCheck confirmed");
    console.log("*************************************");
    if (targetArmor == 0)
    {
        result = wounds;
        return result;
    }
    else
    {
        console.log("Target Armor: " + targetArmor);
        console.log("Rend: " + rend);
        armor = Number(targetArmor) + Number(rend);
        console.log("Armor: " + armor);
        chanceToBeat = Number(armor/6);
        console.log("Chance to beat: " + chanceToBeat);
    }
    
    result = wounds * chanceToBeat;

    if (result > wounds)
    {
        result = wounds;
    }
    return result;
}

function damageThrough(successfulWounds, damage)
{
    console.log("damageThrough confirmed");
    let totalDamage = 0;
    if (isNaN(damage))
    {
        
        if (damage == "d3")
        {
            for(let i = 0; i < successfulWounds;i++)
            {
                totalDamage += Math.round(Math.random() * 3);
            }
            
        }
        else if (damage == "d6")
        {
            for(let i = 0; i < successfulWounds;i++)
            {
                totalDamage += Math.round(Math.random() * 6);
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
    return totalDamage;
}

function whichValue(value)
{
    let realValue = 0;
    if (value == 2)
    {

    }
    else if (value == 3)
    {

    }
    else if (value == 4)
    {

    }
    else if (value == 5)
    {

    }
    else if (value == 6)
    {

    }
    else
    {
        console.log("issue with whichValue function");
    }

    return realValue;
}