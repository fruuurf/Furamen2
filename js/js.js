//ヘッダーフッター
document.addEventListener("DOMContentLoaded", function() {
    fetch("/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            
            //スマホ時ヘッダーが推されたらメニューを表示/非表示
            function menu_open(){
                var mobile_id = document.getElementById("header_flex");
                var mobile_id_display = mobile_id.style.display;

                if(mobile_id_display=="flex"){
                    mobile_id.style.display = "none";
                    console.log("スマホ用メニュー：close");
                }else{
                    mobile_id.style.display = "flex";
                    console.log("スマホ用メニュー：open");
                }
            }
            var mobile_menu = document.getElementById("header_mobile");
            console.log(mobile_menu);
            if(mobile_menu){
                mobile_menu.addEventListener('click',menu_open);
            }
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