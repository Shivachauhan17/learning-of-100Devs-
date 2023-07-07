function Mouse(color,size,eyesColor,name){
    this.color=color
    this.size=size
    this.eyesColor=eyesColor
    this.name=name

    this.turnLeft=function()
    {
        console.log("turned left")
    }
    this.turnRight=function(){
        console.log("turned right")
    }
    this.stop=function(){
        console.log("oiiii ! i am already stopped")
    }

}

let micky=new Mouse("white","large","red","micky")
micky.stop()

Mouse.prototype.alive=true

micky.alive=false