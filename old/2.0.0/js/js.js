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
                    mobile_id.style.opacity = "0";
                    mobile_id.style.display = "none";
                    console.log("スマホ用メニュー：close");
                }else{
                    mobile_id.style.opacity = "1";
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

//年齢系計算
document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var subtractyear = today.getFullYear() - 2008;
    if(today.getMonth()+1 <= 2 && today.getDate() < 6){             //2月6日より前だったら年齢を1引く
        subtractyear -= 1;
    }
    switch(today.getMonth()+1<=3 ? subtractyear-1 : subtractyear){  //3月以前だったら1個前の学年判定
        case 16:
            subtractyear = subtractyear + "才(高2)";
            break;
        case 17:
            subtractyear = subtractyear + "才(高3)";
            break;
        case 18:
            subtractyear = subtractyear + "才(大1)";
            break;
        case 19:
            subtractyear = subtractyear + "才(大2)";
            break;
        case 20:
            subtractyear = subtractyear + "才(大3)";
            break;
        case 21:
            subtractyear = subtractyear + "才(大4)";
            break;
        default:
    }
    console.log("年齢："+subtractyear);

    //PC歴計算
    var subtractPCyear = today.getFullYear() - 2016;
    if(today.getMonth()+1 < 8){                                     //8月以前だったら1年前判定
        subtractPCyear -= 1;
    }
    subtractPCyear = subtractPCyear + "年";
    console.log("PC歴："+subtractPCyear);

    document.getElementById("age").textContent = subtractyear;
    document.getElementById("PCage").textContent = subtractPCyear;
});


//フッターの右の文のやつ(作りかけ)
/*
var footer_memo = document.getElementById("footer_memo");
footer_memo.innerHTML = "a";
*/