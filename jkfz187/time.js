function getRTime(){
    var startTime = new Date('2021/6/19 11:00:00') //起始时间
    var nowTime = new Date()
    var t = nowTime.getTime() - startTime.getTime()
    var d = Math.floor(t / 1000 / 60 / 60 / 24)
    var h = Math.floor(t / 1000 / 60 / 60 % 24)
    var m = Math.floor(t / 1000 / 60 % 60)
    var s = Math.floor(t / 1000 % 60)
    document.getElementById("t_d ").innerHTML = d
    document.getElementById("t_h ").innerHTML = h
    document.getElementById("t_m ").innerHTML = m
    document.getElementById("t_s ").innerHTML = s
}
setInterval(getRTime, 1000)