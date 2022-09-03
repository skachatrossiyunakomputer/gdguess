let songer = document.getElementById('songs')
let lineText = document.getElementById('songInput').value;
let playing = false;
songer.volume -= 0.7;   
let songs = [
    "stereo madness",
    "deadlocked",
    "supersonic",
    "sonic wave",
    "trip"
]
let rnd = 0;
function randomize()
{
    document.getElementById('songInput').value = "";
    rnd = getRandomInt(1, songs.length-1);
    console.log(songs[rnd] + " songs/"+rnd+".mp3");
    songer.src = "songs/"+rnd+".mp3";
    songer.play();
    document.getElementById('playbut').innerHTML = "❚❚";
    playing = true;
}
function check()
{
   lineText = document.getElementById('songInput').value;
   if(lineText.toLowerCase() == songs[rnd])
   {
        randomize();
   }
}
function play()
{
    if(playing == false)
    {
        songer.play();
        document.getElementById('playbut').innerHTML = "❚❚";
        playing = true;
    }
    else
    {
        songer.pause();
        document.getElementById('playbut').innerHTML = "▶";
        playing = false; //❚❚
    }
}
songer.addEventListener("ended", function(e) {
    document.getElementById('playbut').innerHTML = "▶";
    playing = false; //❚❚
})
randomize();
document.getElementById("songInput").addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        check();
    }
  });
