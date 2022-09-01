songer = document.getElementById('songs')
lineText = document.getElementById('songInput').value;
let songs = [
    "stereo madness",
    "deadlocked",
    "ludicrous speed",
    "sonic blaster",
    "trip"
]
let rnd = 0;
function randomize()
{
    rnd = getRandomInt(1, songs.length-1);
    console.log(songs[rnd] + " songs/"+rnd+".mp3");
    songer.src = "songs/"+rnd+".mp3"
}
function check()
{
   lineText = document.getElementById('songInput').value;
   if(lineText.toLowerCase() == songs[rnd])
   {
        randomize();
   }
}
randomize();
document.getElementById("songInput").addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        check();
    }
  });
