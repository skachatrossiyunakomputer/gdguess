count = 10;
let txt = document.getElementById('whatguess');
let rnd1, rnd2, rnd3, rnd4, correctImg;
    function next()
    {
        rnd1 = getRandomInt(0, easyar.length-2);
        rnd2 = getRandomInt(0, easyar.length-2);
        rnd3 = getRandomInt(0, easyar.length-2);
        rnd4 = getRandomInt(0, easyar.length-2);
        correctImg = getRandomInt(1, 4);
        document.getElementById('img1').style.opacity = 100;
        document.getElementById('img2').style.opacity = 100;
        document.getElementById('img3').style.opacity = 100;
        document.getElementById('img4').style.opacity = 100;
        console.log(correctImg)
        if(rnd1 == rnd2 || rnd1 == rnd3 || rnd1 == rnd4 || rnd2 == rnd1 || rnd2 == rnd3 || rnd2 == rnd4 || rnd3 == rnd1 || rnd3 == rnd2 || rnd3 == rnd4 || rnd4 == rnd1 || rnd4 == rnd2 || rnd4 == rnd3)
        {
            next()
        }
        txt.innerHTML = easyar[rnd1]+" | "+count;
    if(correctImg == 1)
    {
        document.getElementById('img2').src = dir+"easy/"+rnd2+".jpg";
        document.getElementById('img3').src = dir+"easy/"+rnd3+".jpg";
        document.getElementById('img4').src = dir+"easy/"+rnd4+".jpg";
    }
    if(correctImg == 2)
    {
        document.getElementById('img1').src = dir+"easy/"+rnd2+".jpg";
        document.getElementById('img3').src = dir+"easy/"+rnd3+".jpg";
        document.getElementById('img4').src = dir+"easy/"+rnd4+".jpg";
    }
    if(correctImg == 3)
    {
        document.getElementById('img1').src = dir+"easy/"+rnd2+".jpg";
        document.getElementById('img2').src = dir+"easy/"+rnd3+".jpg";
        document.getElementById('img4').src = dir+"easy/"+rnd4+".jpg";
    }
    if(correctImg == 4)
    {
        document.getElementById('img1').src = dir+"easy/"+rnd2+".jpg";
        document.getElementById('img2').src = dir+"easy/"+rnd3+".jpg";
        document.getElementById('img3').src = dir+"easy/"+rnd4+".jpg";
    }
    document.getElementById('img'+correctImg).src = dir+"easy/"+rnd1+".jpg";
    
    }
    next();
function checkVariant(variant)
{
    if(variant == correctImg)
    {
        count=count+1;
        txt.innerHTML = easyar[rnd1]+" | "+count;
        next();
    }
    else 
    {
        count=count-1;
        txt.innerHTML = easyar[rnd1]+" | "+count;
        document.getElementById('img'+variant).style.opacity = 0;
    }
}

