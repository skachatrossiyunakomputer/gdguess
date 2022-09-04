let lineValue = document.getElementById("levelInput").value;
let img = document.getElementById("levelImage");
let count = 0.0;
let hardest = 'easy';
let difficulity = document.getElementById("diff");
let rnd = 0;
document.getElementsByTagName('img').ondragstart = function() { return false; };
function next()
{
    switch(hardest)
    {
        case "easy":
            rnd = getRandomInt(0,easyar.length-1);
            img.src = dir+"easy/"+rnd+fmt;
            document.getElementById("levelInput").value = "";
            console.log("Легко, "+easyar[rnd]);
            break;
        case "hard":
            rnd = getRandomInt(0,hardar.length-1);
            document.getElementById("levelInput").value = "";
            img.src = dir+"hard/"+rnd+fmt;
            console.log("Сложно, "+hardar[rnd]);
            break;
        case "impossible":
            rnd = getRandomInt(0,impossiblear.length-1);
            document.getElementById("levelInput").value = "";
            img.src = dir+"impossible/"+rnd+fmt;
            console.log("Невозможно, "+impossiblear[rnd]);
            break;
    }
}
next();
function check()
{
    switch(hardest)
    {
        case "easy":
            if(lineValue == easyar[rnd])
            {
                count = count+0.5;
                lineValue = "";
                document.getElementById("levelInput").placeholder = count;
                next();
            }
            else
            {
                console.log("neprawilno");
            }
            break;
        case "hard":
            if(lineValue == hardar[rnd])
            {
                count = count+1;
                lineValue = "";
                document.getElementById("levelInput").placeholder = count;
                next();
            }
            else
            {
                alert("Неправильно");
            }
            break;
        case "impossible":
            if(lineValue == impossiblear[rnd])
            {
                count = count+3;
                lineValue = "";
                document.getElementById("levelInput").placeholder = count;
                next();
            }
            else
            {
                alert("Неправильно");
            }
            break;
    }
}
document.getElementById("levelInput").addEventListener('keypress', function (e)
{
    //SHITCODE
    if(e.key == "Enter")
    {
        lineValue = document.getElementById("levelInput").value;
        check()
    }
})
difficulity.addEventListener('change', function (e) {
    switch(e.target.value)
    {
        case "easy":
            hardest = "easy";
            next();
            break;
        case "hard":
            hardest = "hard";
            next();
            break;
        case "impossible":

            hardest = "impossible";
            next();
            break;
    }
  })
function skip()
{
    if(count <= 0)
    {
        alert("0 очков.")
    }
    else
    {
        switch(hardest)
        {
            case "easy":
                alert("Ответ: "+ easyar[rnd]);
                count = count - 0.5;
                document.getElementById("levelInput").placeholder = count;
                next();
                break;
            case "hard":
                alert("Ответ: "+ hardar[rnd]);
                count = count - 1;
                document.getElementById("levelInput").placeholder = count;
                next();
                break;
            case "impossible":
                alert("Ответ: "+ impossiblear[rnd]);
                count = count - 1;
                document.getElementById("levelInput").placeholder = count;
                next();
                break;
        }
    }
}
window.onresize = function(){
    document.getElementById("levelInput").style.fontSize = document.documentElement.clientHeight/30+"px";
    document.getElementById("levelInput").style.borderRadius = document.documentElement.clientWidth/200+"px";
    document.getElementById("levelInput").style.borderWidth = document.documentElement.clientWidth/500+"px";
    document.getElementById("press").style.fontSize = document.documentElement.clientHeight/30+"px";
    document.getElementById("press").style.borderRadius = document.documentElement.clientWidth/200+"px";
    document.getElementById("press").style.borderWidth = document.documentElement.clientWidth/500+"px";
    document.getElementById("diff").style.fontSize = document.documentElement.clientHeight/30+"px";
    document.getElementById("diff").style.borderRadius = document.documentElement.clientWidth/200+"px";
    document.getElementById("diff").style.borderWidth = document.documentElement.clientWidth/500+"px";
}
document.getElementById("levelInput").oninput = function(){
    lineValue = document.getElementById("levelInput").value;
    check();
  };
