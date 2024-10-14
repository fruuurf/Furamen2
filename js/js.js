//ヘッダーフッター
document.addEventListener("DOMContentLoaded", function() {
    fetch("/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
    fetch("/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});

//index背景画像
document.addEventListener("DOMContentLoaded", function() {
    var backgroundimgnum = Math.floor(Math.random() * 24) + 1;
    var backgroundimg = "./images/background/" + backgroundimgnum + ".jpg";
    var background = document.getElementById("background");
    background.style.backgroundImage = "url('" + backgroundimg + "')";
})


//フッターの右の文のやつ(作りかけ)
/*
var footer_memo = document.getElementById("footer_memo");
footer_memo.innerHTML = "a";
*/