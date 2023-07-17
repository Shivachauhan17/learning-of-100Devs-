function houseOne(){
    console.log("we are at house 1")
}

function houseTwo(){
    setTimeout(() => {console.log("we are at house 2")},
         3000)
}

function houseThree(){
    console.log("we are at house 3")
}


/*using CALLBACKS*/

function houseOne(){
    console.log("we are at house 1")
}

function houseTwo(callback){
    setTimeout(() => {console.log("we are at house 2")
        callback()
        },
         3000)
}

function houseThree(){
    console.log("we are at house 3")
}

houseOne()
houseTwo(houseThree)