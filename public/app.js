function input(e) {
    var a = document.getElementById("res")
    a.value += e
}
function calculation() {
    var a = document.getElementById("res")
    var cal = a.value
    var final = eval(cal)
    a.value = final
}
function clearValue() {
    var a = document.getElementById("res")
    a.value = ""
}
