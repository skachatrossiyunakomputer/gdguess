dir = "lvls/"
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
function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}