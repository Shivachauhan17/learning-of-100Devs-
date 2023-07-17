try{
    function houseOne(){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('paper delivered to the house 1')
            },3000)
        })
    }

    function houseTwo(){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('paper delivered to house 2')
            },1000)
        })
    }

    function houseThree(){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('paper delivered to house 3')
            })
        })
    }


    async function getpaid(){
        const houseOneWait = await houseOne()
        const houseTwoWait = await houseTwo()
        const houseThreeWait = await houseThree()

        console.log(houseOneWait)
        console.log(houseTwoWait)
        console.log(houseThreeWait)
    }

    getpaid()

}

catch(error){
    console.log(error)
}