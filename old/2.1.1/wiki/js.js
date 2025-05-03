document.addEventListener("DOMContentLoaded", function() {
    var imgnum = Math.floor(Math.random() * 9) + 1;
    var img = "./image/今日の一枚/" + imgnum + ".jpg";
    var TodaysPictures = document.getElementById("今日の一枚の写真");
    TodaysPictures.src = img;

    console.log(imgnum,img,TodaysPictures);

    var exp = document.getElementById("今日の一枚の説明");
    switch(imgnum){
        case 1:
            exp.innerHTML = "スガキヤラーメン";
            break;
        case 2:
            exp.innerHTML = "天下一品";
            break;
        case 3:
            exp.innerHTML = "シロノワール";
            break;
        case 4:
            exp.innerHTML = "うま屋ラーメン";
            break;
        case 5:
            exp.innerHTML = "ラーメン横綱";
            break;
        case 6:
            exp.innerHTML = "さわやか";
            break;
        case 7:
            exp.innerHTML = "ブタメン";
            break;
        case 8:
            exp.innerHTML = "なんだっけこれ";
            break;
        case 9:
            exp.innerHTML = "大晦日の30分放置カレーメシ";
            break;
        default:
    }
  })
  