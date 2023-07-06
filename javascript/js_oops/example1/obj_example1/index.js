const stopwatch={}
stopwatch.currentTime=11

stopwatch.printCurrentTime=function(time){
    alert("current time is",time)
    return time
}

document.querySelector('h1').innerHTML=stopwatch.printCurrentTime(stopwatch.currentTime)


