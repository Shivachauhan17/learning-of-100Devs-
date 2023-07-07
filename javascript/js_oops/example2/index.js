//*Variables

let drink=" cola with pizza "
console.log(drink.trim())

let fruits="mango apple banana"
console.log("word find at index:",fruits.search("apple"))


//*Functions
function rockPaperScissors(){
    let randomVal=Math.random
    if(randomVal<.33){
        return "stone"
    }
    else if(randomVal<.66 && randomVal>.33){
        return "paper"
    }
    else{
        return "scissor"
    }
    
}

console.log(rockPaperScissors())

//fucntion to determine lost or win using above function

function winLost(value){
    let called=rockPaperScissors()
    if((value==="paper" && called==="stone")||(value==="stone" && called==="scissor")||(value==="scissor" && called==="paper")){
        console.log("you win")
    }
    else if(value===called){
        console.log("you tied")
    }
    else{
        console.log("you lost")
    }
}

winLost("stone")


//*Array

function winLost4Array(arr){
    arr.forEach(element => winLost(element));
}

winLost4Array(["stone","paper","scissors"])