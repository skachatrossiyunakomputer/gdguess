function relocate()
{
   let select = document.getElementById("mode").value;
   if (select == "pictureGuess") {
       window.location.replace("index.html");
   }
   if (select == "nameGuess") {
       window.location.replace("pict.html");
   }
   if (select == "musicGuess") {
       window.location.replace("music.html");
   }
   if (select == "selectMode") {
    window.location.replace("https://youtu.be/dQw4w9WgXcQ");
}
}