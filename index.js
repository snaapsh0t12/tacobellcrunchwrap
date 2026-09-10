
function yummyCrunchwrap() {
    let sound = new Audio("./yummy.mp3");
    console.log("yummy!");
    let playbackrate = Math.random() * (2.0 - 0.5);
    console.log(playbackrate);
    sound.playbackRate = playbackrate;
    // sound.playbackRate = 0.3;
    sound.play();
};