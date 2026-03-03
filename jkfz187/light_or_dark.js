if (navigator.cookieEnabled) {
    var cookie = document.cookie;
    if (cookie == "mode = dark") {
        dark()
    } else if (cookie == "mode = light") {
        light()
    } else {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            light()
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            dark()
        } else {
            document.getElementById("no-light-or-dark").style.display = "block"
        }
    }
} else {
    document.getElementById("no-cookie").style.display = "inline"
}



function dark() {
    document.documentElement.style.setProperty('--bg-light-or-dark', "#161616")
    document.documentElement.style.setProperty('--bd-light-or-dark', "#000000")
    document.documentElement.style.setProperty('--ft-light-or-dark', "#999999")
    document.documentElement.style.setProperty('--im-light-or-dark', "opacity(50%)")
    //dqh
    document.documentElement.style.setProperty('--dqh', "invert(50%)")
    //cookie
    document.cookie = "mode = dark;path=/";
    //czp
    document.documentElement.style.setProperty('--bg-cl', '#000000')
    document.documentElement.style.setProperty('--ft-cl', '#999999')
    document.getElementById("czp_dark").style.display = "none"
    document.getElementById("czp_light").style.display = "inline"
}

function light() {
    document.documentElement.style.setProperty('--bg-light-or-dark', "#f8f9fb")
    document.documentElement.style.setProperty('--bd-light-or-dark', "white")
    document.documentElement.style.setProperty('--ft-light-or-dark', "black")
    document.documentElement.style.setProperty('--im-light-or-dark', "opacity(100%)")
    //dqh
    document.documentElement.style.setProperty('--dqh', "invert(0%)")
    //cookie
    document.cookie = "mode = light;path=/";
    //czp
    document.documentElement.style.setProperty('--bg-cl', '#FAF9DE')
    document.documentElement.style.setProperty('--ft-cl', 'black')
    document.getElementById("czp_light").style.display = "none"
    document.getElementById("czp_dark").style.display = "inline"
}
