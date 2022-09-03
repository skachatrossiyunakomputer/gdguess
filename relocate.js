frame = document.getElementById("fram")
let mode = document.getElementById("mode");
mode.addEventListener('change', function(e) {
        switch(e.target.value)
        {
            case "musicGuess":
                frame.src = "music.html";
                break;
            case "nameGuess":
                frame.src = "pict.html";
                break;
            case "pictureGuess":
                frame.src = "name.html";
                break;
            case "selectMode":
                frame.src = "https://youtu.be/dQw4w9WgXcQ";
                break;
        }
});
