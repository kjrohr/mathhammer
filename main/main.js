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
                console.log("To Hit: " + toHitOptions[i].value);
                toHit = toHitOptions[i].value;
                break;
            }
        }

        for (let i = 0; i < toWoundOptions.length;i++)
        {
            if(toWoundOptions[i].checked)
            {
                console.log("To Wound: " + toWoundOptions[i].value);
                toWound = toWoundOptions[i].value;
                break;
            }
        }

        for (let i = 0; i < rendOptions.length;i++)
        {
            if (rendOptions[i].checked)
            {
                console.log("Rend: " + rendOptions[i].value);
                rend = rendOptions[i].value;
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
                break;
            }
        }
        
        console.log("Damage per attack: " + damage);
        //armorCheck(0,4,10);


    });

    // console.log("Roll 40 dice looking for 4 up.")
    // let diceCount = 40;
    // let result = diceCount * fourPlus;
    // console.log("Out of " + diceCount + " dice, " + result + " were successes.");


})


function getHits(attacks, toHit)
{
    let result = attacks * toHit;
    return result;
}

function getWounds(hits, toWound)
{
    let result = hits * toWound;
    return result;
}

function armorCheck(rend, targetArmor, wounds)
{
    let armor = targetArmor - rend;
    let chanceToBeat = (armor-1)/6;

    console.log("rend: " + rend);
    console.log("target armor: " + targetArmor);
    console.log("armor: " + armor);

    console.log(chanceToBeat);
    let result = wounds * chanceToBeat;

    return result;



}

function damageThrough(successfulWounds, damage)
{

    // TODO: Account for dx damage
    return successfulWounds * damage;
}