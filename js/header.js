//スマホ時ヘッダーが推されたらメニューを表示/非表示
function menu_open(){
    console.log("aaa");
    mobile_mode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var mobile_id;
    if(mobile_mode){
        mobile_id = document.getElementById("header_flex_dark");
    }else{
        mobile_id = document.getElementById("header_flex_white");
    }
    mobile_id.style.display = "flex"
}
document.addEventListener("DOMContentLoaded", function() {
    var mobile_menu = document.getElementById("header_mobile");
    console.log(mobile_menu);
    mobile_menu.addEventListener('click',menu_open);
});

console.log("いｔｒせつれいおｗｓｒ");