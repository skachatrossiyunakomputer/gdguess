counter = document.getElementById('counter');
count = 10;
let txt = document.getElementById('whatguess');
let rnd1, rnd2, rnd3, rnd4, correctImg;
    function next()
    {
        rnd1 = getRandomInt(0, levelNames.length-1);
        rnd2 = getRandomInt(0, levelNames.length-1);
        rnd3 = getRandomInt(0, levelNames.length-1);
        rnd4 = getRandomInt(0, levelNames.length-1);
        correctImg = getRandomInt(1, 4);
        document.getElementById('img1').style.opacity = 100;
        document.getElementById('img2').style.opacity = 100;
        document.getElementById('img3').style.opacity = 100;
        document.getElementById('img4').style.opacity = 100;
        console.log(correctImg)
        counter.innerHTML = count;
        document.getElementById('background').style.background = "url("+dir+rnd3+".jpg)";
        if(count <= 0)
        {
            document.getElementById("background").filter = "blur(30px); ";
        }
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
function checkVariant(variant)
{
    if(variant == correctImg)
    {
        count=count+1;
        next();
    }
    else 
    {
        count=count-1;
        counter.innerHTML = count;
        alert("Неправильно")
        document.getElementById('img'+variant).style.opacity = 0;
    }
}

if (document.title == "Угадайка по музыке")
{
    console.log("huy")
}
