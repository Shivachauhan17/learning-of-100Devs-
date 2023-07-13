class MakeCar{
    constructor(carmake,carmodel,carcolor,doors){
        this.make = carmake
        this.model = carmodel
        this.color = carcolor
        this.doors = doors
    }

    hank(){
        alert("beep beep")
    }
    lock(){
        alert(`locked ${this.doors} doors`)
    }
}

let hondaCivic=new MakeCar("Honda", 'Civic', 'Silver', 4)

console.log(hondaCivic.doors)