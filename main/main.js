document.addEventListener("DOMContentLoaded",()=>{
    let twoPlus = 5/6;
    let threePlus = 4/6;
    let fourPlus = 3/6;
    let fivePlus = 2/6;
    let sixPlus = 1/6;

    let submit = document.getElementById("btnSubmit");
    
  
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log("asdf");
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