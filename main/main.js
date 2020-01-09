document.addEventListener("DOMContentLoaded",()=>{
    let submit = document.getElementById("btnSubmit");
    let rerollHitsOnes = document.getElementById("rerollHitsOnes");
    let rerollHitsAll = document.getElementById("rerollHitsAll");
    let rerollWoundsOnes = document.getElementById("rerollWoundsOnes");
    let rerollWoundsAll = document.getElementById("rerollWoundsAll");
    let rerollArmorOnes = document.getElementById("rerollArmorOnes");
    let rerollArmorAll = document.getElementById("rerollArmorAll");


    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        console.clear();
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
        armor = calcArmor(armorOptions,rendOptions);   

        // Things to display to user
        let totalHits = getHits(diceCount, toHit);
        let totalWounds = getWounds(totalHits, toWound);
        let totalSuccesses = armorCheck(armor,totalWounds);
        let totalDamage = damageThrough(totalSuccesses, damage);
        displayTotals(totalHits,totalWounds,rend,armor,totalDamage);



        // Gather to hits

        // Check To hit options

        // To Wound

        // To Wound Options

        // Saves

        // Save Options

        // Extra Save Options
        
    });




    // *** HOUSE KEEPING ***
    rerollHitsOnes.addEventListener("click", (e)=> {
        rerollHitsAll.checked = false;
    });

    rerollHitsAll.addEventListener("click",(e)=>{
        rerollHitsOnes.checked = false;
    });

    rerollWoundsOnes.addEventListener("click", (e)=>{
        rerollWoundsAll.checked = false;
    });

    rerollWoundsAll.addEventListener("click",(e)=>{
        rerollWoundsOnes.checked = false;
    });

    rerollArmorOnes.addEventListener("click", (e)=>{
        rerollArmorAll.checked = false;
    });

    rerollArmorAll.addEventListener("click", (e)=>{
        rerollArmorOnes.checked = false;
    });
    // *** END OF HOUSE KEEPING ***


})

function getHits(attacks, toHit)
{
    let result = attacks * toHit;
    return Math.floor(result);
}

function getWounds(hits, toWound)
{
    let result = hits * toWound;
    return Math.floor(result);
}

function armorCheck(targetArmor, wounds)
{

    console.log("**************************");
    console.log("target armor: " + targetArmor);
    console.log("wounds: " + wounds);
    console.log("**************************");
    
    if (targetArmor <= 2)
    {
        targetArmor = 1/6;
    }
    else if (targetArmor == 3)
    {
        targetArmor = 2/6;
    }
    else if (targetArmor == 4)
    {
        targetArmor = 3/6;
    }
    else if (targetArmor == 5)
    {
        targetArmor = 4/6;
    }
    else if (targetArmor == 6)
    {
        targetArmor = 5/6
    }
    else if (targetArmor > 6)
    {
        targetArmor = 0;
    }
    else
    {
        console.log("Something is wrong with armor check");
    }

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
    else if (value == "-" || value > 6)
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
    console.log("Total Hits: " + hits);
    console.log("Total Wounds: " + wounds);
    console.log("Rend: " + rend);
    console.log("Target's Armor: " + armor);
    console.log("Total Damage: " + damage);
}

function calcArmor(armorOptions, rendOptions)
{
    let armor = 0;
    let rend = 0;
    let totalArmor = 0;
    for (let i = 0; i < armorOptions.length; i++)
    {
        if (armorOptions[i].checked)
        {
            armor = armorOptions[i].value;
            if (armor == "-")
            {
                armor = 0;
            }
        }

        if (rendOptions[i].checked)
        {
            rend = rendOptions[i].value;
            if (rend == "-")
            {
                rend = 0;
            }
        }
    }
    totalArmor = Number(armor) + Number(rend);
    console.log("**************************");
    console.log("target armor: " + totalArmor);
    console.log("**************************");

    return totalArmor;
}

function mortalWoundsOnSix(value)
{
    let returnValue = value * (1/6);
    return Math.floor(returnValue);
}

// Mortal wounds on hit that end attack sequence

function explodingSixes(value)
{
    // Get sixes then multiply by 2
    let returnValue = (value * (1/6)) * 2;
    return Math.floor(returnValue);
}

function rerollingOnes(value, toHit)
{
    // Get ones then reroll
    let returnValue = (value * (1/6)) * toHit;
    return Math.floor(returnValue);

}

function rerollingAll(value, toHit)
{
    let returnValue = (value - Math.floor((value * toHit))) * toHit;
    
    return Math.floor(returnValue);
}
