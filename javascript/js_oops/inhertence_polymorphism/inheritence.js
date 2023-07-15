/*INHERITENCE*/
/*copy and run on console*/

class Animal{
    constructor(name){ 
        this.name = name
    } 
    speak(){
        console.log(`${this.name} speks some wierd thing`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed
    }
    checkbreed(){
        console.log(` the dog's breed is ${this.breed}`)
    }
}

class Cow extends Animal{
    constructor(name,color){
        super(name)
        this.color=color
    }
    checkcolor(){
        console.log(`the cow's color ${this.color}`)
    }
}




/*right way to make a class for convetion and best practice*/
class Animal{
    constructor(name){ 
        this._name = name
    } 
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this.name} speks some wierd thing`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed
    }
    checkbreed(){
        console.log(` the dog's breed is ${this.breed}`)
    }
}

class Cow extends Animal{
    constructor(name,color){
        super(name)
        this.color=color
    }
    checkcolor(){
        console.log(`the cow's color ${this.color}`)
    }
}




/*POLYMORPHISM*/
class Animal{
    constructor(name){ 
        this._name = name
    } 
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this.name} speks some wierd thing`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        console.log(`${this.name} make sound bh...bh...`)
    }
}
 
class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this._breed=breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        console.log(`${this.name}  make sound of meowww`)
    }
}

let murry = new Cat("murry","whitecat")
let sherry = new Dog("sherry","bull") 

let objs=[murry,sherry]

for(a of objs){
    a.speak()
}