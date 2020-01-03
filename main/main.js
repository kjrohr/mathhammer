document.addEventListener("DOMContentLoaded",()=>{
    let twoPlus = 5/6;
    let threePlus = 4/6;
    let fourPlus = 3/6;
    let fivePlus = 2/6;
    let sixPlus = 1/6;

    let submit = document.getElementById("btnSubmit");
    
  
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        // console.log("asdf");
        let diceCount = document.getElementById("diceCount").value;
        console.log("Dice Count: " + diceCount);
        let toHit = document.getElementsByName("hit");
        for (let i = 0; i < toHit.length;i++)
        {
            if(toHit[i].checked)
            {
                console.log("To Hit: " + toHit[i].value);
                break;
            }
        }
    });

    // console.log("Roll 40 dice looking for 4 up.")
    // let diceCount = 40;
    // let result = diceCount * fourPlus;
    // console.log("Out of " + diceCount + " dice, " + result + " were successes.");


})


function test()
{
    console.log("caught");
}