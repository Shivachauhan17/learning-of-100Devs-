//*Variable

let x="Sunday"
x=x.toUpperCase()   
console.log(x)

//alert last three characters of a string

let str="CHILL"
alert(str.slice(-3))

//Functions
const exp=[]
for(let i=0;i<5;i++){
    exp.push(i+1)
}
function minus(test){
    let total=100
    for(let i=0;i<5;i++){
        total=total-test[i]
    }
    console.log(total)
}

minus(exp)

//create a function that takes three number console.log highest and lowest value

function highLow(a,b,c){
    let min=a<b?(a<c?a:c):(b<c?b:c)//or Math.min
    let max=a>b?(a>c?a:c):(b>c?b:c)
    console.log(min," ",max)
}

highLow(2,3,4)


//create a function that returns head or tail randomly as fairy as possible

function headTail(){
    let k=Math.random()
    if(k<0.5){
        return "head"
    }
    else{
        return "tail"
    }
}
//loop for x times head tail
let n=6
for(let i=0;i<n;i++){
    console.log(headTail())
}