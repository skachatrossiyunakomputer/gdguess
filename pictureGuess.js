let lineValue = document.getElementById("levelInput").value;
img = document.getElementById("levelImage");
let count = 0;
let rnd = 0;

function randomize()
 {
     rnd = Math.floor(Math.random() * levelNames.length);
 }
randomize();
function next()
 {
    document.getElementById("levelInput").placeholder = "Правильных ответов: "+count;
    randomize();
    img.src = dir+rnd+".jpg";
 	document.getElementById('background').style.background = "url("+dir+rnd+".jpg)";
 }
img.src = dir+rnd+".jpg";
document.getElementById('background').style.background = "url("+dir+rnd+".jpg)";
 
function check()
 {
     lineValue = document.getElementById("levelInput").value;
     if(lineValue.toLowerCase() == levelNames[rnd])
     {
         document.getElementById("levelInput").value = "";
         count+=1;
         console.log("Пользователь угадал уровень. +1, счёт "+count);
         next();
     }
     else 
     {
         alert("Неправильно");
     }
     
 }
function skip()
 {
     if(count == 0)
     {
         alert("Пропускать уровень с 0 очками нельзя");
     }
     else
     {
         document.getElementById("levelInput").value = "";
         count = count-1;
         alert("Это "+levelNames[rnd])
         console.log("Пользователь пропустил уровень, -1, счёт: "+count)
         next();
     }
 }
document.getElementById("levelInput").addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
      check()
    }
  });
