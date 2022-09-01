 //ВНИМАНИЕ! МНОГО ГОВНОКОДА. ИСПРАВЛЮ ПОЗЖЕ!
 //WARNING! A LOT OF SHITCODE. FIX LATER!
 dir = "lvls/"
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 let levelNames = [
    "stereo madness",
    "back on track",
    "polargeist",
    "dry out",
    "base after base",
    "can't let go",
    "jumper",
    "time machine",
    "cycles",
    "xstep",
    "clutterfunk",
    "theory of everything",
    "electroman adventures",
    "clubstep",
    "electrodynamix",
    "hexagon force",
    "blast processing",
    "theory of everything 2",
    "geometrical dominator",
    "deadlocked",
    "fingerdash",
    "retray"
]
 if (document.title == "Угадайка уровней")
 {
 let lineValue = document.getElementById("levelInput").value;
 img = document.getElementById("level");
 let count = 0;
 let rnd = 0;

 function randomize()
 {
     rnd = Math.floor(Math.random() * levelNames.length);
 }
 randomize();
 img.src = dir+rnd+".jpg";
 document.getElementById('ch').style.background = "url("+dir+rnd+".jpg)";
 
 function check()
 {
     lineValue = document.getElementById("levelInput").value;
     if(lineValue.toLowerCase() == levelNames[rnd])
     {
         document.getElementById("levelInput").value = "";
         count=count+1;
         console.log("+1, "+count)
         document.getElementById("levelInput").placeholder = "Правильных ответов: "+count;
         randomize();
         img.src = dir+rnd+".jpg";
 	 document.getElementById('ch').style.background = "url("+dir+rnd+".jpg)";
     }
     else 
     {
         alert("Неправильно");
         document.getElementById("levelInput").value = "";
     }
     
 }
 function skip()
 {
     if(count == 0)
     {
         //lol
     }
     else
     {
         document.getElementById("levelInput").value = "";
         count = count-1;
         alert("Это "+levelNames[rnd])
         console.log("-1, "+count)
         randomize();
         img.src = dir+rnd+".jpg";
     }
 }
 document.getElementById("levelInput").addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
      check()
    }
  });
}
 function sl()
 {
    let a = document.getElementById("mode").value;
    if (a == "guesser") {
        window.location.replace("index.html");
    }
    if (a == "naming") {
        window.location.replace("pict.html");
    }
    if (a == "music") {
        window.location.replace("music.html");
    }
 }
if(document.title == "Угадайка по названию")
{
    let txt = document.getElementById('whatguess');
    let rnd1, rnd2, rnd3, rnd4, correctImg;
    function next()
    {
        rnd1 = getRandomInt(0, levelNames.length-1);
        rnd2 = getRandomInt(0, levelNames.length-1);
        rnd3 = getRandomInt(0, levelNames.length-1);
        rnd4 = getRandomInt(0, levelNames.length-1);
        correctImg = getRandomInt(1, 4);
        console.log(correctImg)
        if(rnd1 == rnd2 || rnd1 == rnd3 || rnd1 == rnd4 || rnd2 == rnd1 || rnd2 == rnd3 || rnd2 == rnd4 || rnd3 == rnd1 || rnd3 == rnd2 || rnd3 == rnd4 || rnd4 == rnd1 || rnd4 == rnd2 || rnd4 == rnd3)
        {
            next()
        }
        txt.innerHTML = levelNames[rnd1];
    if(correctImg == 1)
    {
        document.getElementById('img2').src = dir+rnd2+".jpg";
        document.getElementById('img3').src = dir+rnd3+".jpg";
        document.getElementById('img4').src = dir+rnd4+".jpg";
    }
    if(correctImg == 2)
    {
        document.getElementById('img1').src = dir+rnd2+".jpg";
        document.getElementById('img3').src = dir+rnd3+".jpg";
        document.getElementById('img4').src = dir+rnd4+".jpg";
    }
    if(correctImg == 3)
    {
        document.getElementById('img1').src = dir+rnd2+".jpg";
        document.getElementById('img2').src = dir+rnd3+".jpg";
        document.getElementById('img4').src = dir+rnd4+".jpg";
    }
    if(correctImg == 4)
    {
        document.getElementById('img1').src = dir+rnd2+".jpg";
        document.getElementById('img2').src = dir+rnd3+".jpg";
        document.getElementById('img3').src = dir+rnd4+".jpg";
    }
    document.getElementById('img'+correctImg).src = dir+rnd1+".jpg";
    
    }
    next();
function checkv(variant)
{
    if(variant == correctImg)
    {
        next();
    }
    else 
 {
    alert("Неправильно")
 }
}
}

if (document.title == "Угадайка по музыке")
{
    console.log("huy")
}
