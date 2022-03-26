let arrayTime = [
    "images/00.gif",
    "images/01.gif",
    "images/02.gif",
    "images/03.gif",
    "images/04.gif",
    "images/05.gif",
    "images/06.gif",
    "images/07.gif",
    "images/08.gif",
    "images/09.gif"
]

setInterval(function(){
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()

    document.getElementById("hour1").src = arrayTime[Math.floor(hours/10)]
    document.getElementById("hour2").src = arrayTime[hours%10]

    document.getElementById("minute1").src = arrayTime[Math.floor(minutes/10)]
    document.getElementById("minute2").src = arrayTime[minutes%10]

    document.getElementById("second1").src = arrayTime[Math.floor(seconds/10)]
    document.getElementById("second2").src = arrayTime[seconds%10]

    if(0<=hours && hours<=12){
        document.getElementById("greeting").textContent = "Chào buổi sáng"
    }
    else if(12<=hours && hours<=17){
        document.getElementById("greeting").textContent = "Chào buổi chiều"
    }
    else{
        document.getElementById("greeting").textContent = "Chào buổi tối"
    }

},0)


setInterval(function(){
    document.getElementById("greeting").style.color = "red"

    setTimeout(function(){
        document.getElementById("greeting").style.color = "black"
    })

})