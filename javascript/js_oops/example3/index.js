//*Array

let num=[19,57,8,3,45]
const sumWithInitial=num.reduce((acc,n)=>acc+n,0)
alert(sumWithInitial)


//A function that takes the array and  return
//the array with squarer of every number of prevouius array

function squareArray(arr){
    let retnArr=[]
    for(let i=0;i<arr.length;i++){
        retnArr.push(arr[i]*arr[i])
    }
    return retnArr
}
console.log(squareArray([1,2,3]))


//function to print reverse of a string
function rev(str){
    let reverseString=""
    for(let i=str.length-1;i>=0;i--){
        reverseString+=str[i]
    }
    console.log(reverseString)
}

rev("shanks")

//function to alert if string is a palindrome'

function palindrome(str){
    let reverseString=""
    for(let i=str.length-1;i>=0;i--){
        reverseString+=str[i]
    }
    if(str===reverseString){
        alert("whoooooooo! string was a palindrome")
    }
}

palindrome("srs")