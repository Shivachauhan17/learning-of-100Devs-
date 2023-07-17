/*exp1*/
const promise = new Promise((resolve,reject)=>{
    const error=false
    if(!error){
        resolve('promise has been fullfilled')
    }
    else{
        reject('error : operation has failed')
    }
})

console.log(promise)
promise
    .then(data => console.log(data))
    .catch(err => console.log(err))


/*exp2*/

function houseOne(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('paper delivered to house 1')
        },1000)
    })
}

function houseTwo(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('paper delivered to house 2')
        },2000)
    })
}

function houseThree(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('paper delivered to house3')
        },1000)
    })
}

houseOne()
    .then(data => console.log(data))
    .then(houseTwo)
    .then(data => console.log(data))
    .then(houseThree)
    .then(data => console.log(data))
    .catch(err => console.log(err))