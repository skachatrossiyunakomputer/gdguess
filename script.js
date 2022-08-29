 //ЧЁ СМОТРИШЬ?
 let lineValue = document.getElementById("levelInput").value;
 img = document.getElementById("level");
 let count = 0;
 let rnd = 0;
 let levelNames = [
"stereo madness",
"stereo madness",
"back on track",
"back on track",
"polargeist",
"polargeist",
"dry out",
"dry out",
"dry out",
"base after base",
"base after base",
"can't let go",
"can't let go",
"can't let go",
"jumper",
"jumper",
"time machine",
"time machine",
"time machine",
"cycles",
"cycles",
"cycles",
"xstep",
"xstep",
"clutterfunk",
"clutterfunk",
"clutterfunk",
"theory of everything",
"theory of everything",
"theory of everything",
"theory of everything",
"theory of everything",
"electroman adventures",
"electroman adventures",
"electroman adventures",
"electroman adventures",
"electroman adventures",
"clubstep",
"clubstep",
"clubstep",
"electrodynamix",
"electrodynamix",
"electrodynamix",
"electrodynamix",
"hexagon force",
"hexagon force",
"hexagon force",
"hexagon force",
"blast processing",
"blast processing",
"blast processing",
"blast processing",
"blast processing",
"theory of everything 2",
"theory of everything 2",
"theory of everything 2",
"theory of everything 2",
"geometrical dominator",
"geometrical dominator",
"geometrical dominator",
"deadlocked",
"deadlocked",
"deadlocked",
"deadlocked",
"deadlocked",
"fingerdash",
"fingerdash",
"fingerdash",
"fingerdash",
"retray",
"retray",
"retray",
"retray",
"the nightmare",
"the nightmare",
"the nightmare",
"dark paradise",
"dark paradise",
"outerspace",
"outerspace",
]
 let max = levelNames.length;
 function randomize()
 {
     rnd = Math.floor(Math.random() * max);
 }
 randomize();
 img.src = "levels/"+rnd+".jpg";
 document.getElementById('ch').style.background = "url(levels/"+rnd+".jpg)";
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
         img.src = "levels/"+rnd+".jpg";
 	 document.getElementById('ch').style.background = "url(levels/"+rnd+".jpg)";
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
         img.src = "levels/"+rnd+".jpg";
     }
 }
 document.getElementById("levelInput").addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
      check()
    }
  });