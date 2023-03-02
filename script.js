//acces elements
let Display=document.querySelector('.DisplayTimer')

let[hours,minutes,seconds,milliseconds]=[0,0,0,0]
//
let start=document.getElementById('startBtn').addEventListener('click',()=>{
    if(int!=null)
    {
        clearInterval(int)
    }
    int=setInterval(DisplayTimer,10)
})

//stop
document.getElementById('stopBtn').addEventListener('click',()=>{
    clearInterval()
})


//reset
document.getElementById('resetBtn').addEventListener('click',()=>{
clearInterval(int)
[hours,minutes,seconds,milliseconds]=[0,0,0,0]
Display.innerHTMl='00:00:00:00'

})

///display timer function
function DisplayTimer()
{
    milliseconds++
    if(milliseconds==1000)
    {
        milliseconds=0
        seconds++
        if(seconds==60)
        {
            seconds=0
            minutes++
            if(minutes==60)
            {
                minutes=0
                hours++
            }
        }
    }
}

let h=hours<10? '0'+hours:hours
let m=minutes<10? '0'+minutes:minutes
let s=seconds<10? '0'+seconds:seconds
let ms=milliseconds<10? '00' +milliseconds:mil <100? '00' +milliseconds:milliseconds

Display.innerHTMl=' ${h}:${m}:${s}:${ms} ';