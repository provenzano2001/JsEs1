var addBtnListener = function () {
    var btn = document.createElement("button");
    btn.innerHTML = "clicca";

    var body = document.getElementsByTagName("body")[0];
    body.append(btn);

    btn.addEventListener("click", editDom);
}

var editDom = function () {
    document.getElementById("div1").innerHTML = "Ciao Mondo";
    document.getElementById("div1").setAttribute("style", "background-color: red");
    document.getElementById("span1").innerHTML = "span modificato";
}

document.addEventListener("DOMContentLoaded", addBtnListener);