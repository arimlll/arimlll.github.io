function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

sleep(500).then(() => $(function () {
    var c = document.getElementById('hitokoto')
    var hitokoto_from = document.getElementById('hitokoto_from')
    var xhr = new XMLHttpRequest()
    xhr.open('get', 'https://v1.hitokoto.cn')
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText)
            hitokoto.innerText = data.hitokoto
            if(data.from_who == null || data.from_who == data.hitokoto){
                hitokoto_from.innerText = data.from
            }else{
                hitokoto_from.innerText = data.from + "\t" + data.from_who
            }
        } else {
        hitokoto.innerText = "Jiangxi University of Technology High School Grade 2018 Class 7"
    }
    hitokoto.style.color = "var(--ft-light-or-dark)"
    hitokoto_from.style.color = "var(--ft-light-or-dark)"
}
    xhr.send()
}))