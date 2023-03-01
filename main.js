let buttonBegin, buttonPause, buttonCancel;
let displayRect, displayTextbox;
let playlist1, playlist2, playlist3, playlist4, playlist5;
let playlistCurrent, randomInt, playlistArray, playlistTitle, playlistTitles;
let textCurrent = "Press below to begin!";

function preload(){

    playlist1 = loadSound('assets/playlist1.wav');
    playlist2 = loadSound('assets/playlist2.wav');
    playlist3 = loadSound('assets/playlist3.wav');
    playlist4 = loadSound('assets/playlist4.wav');
    playlist5 = loadSound('assets/playlist5.wav');

}

function setup(){
    createCanvas(innerWidth, innerHeight);
    background(0, 0, 0);
    
    displayRect = rect(10, 10, 300, 100,);
        
    buttonBegin = createButton('BEGIN');
    buttonBegin.position(20, 130);
    buttonBegin.size(300, 50);
    buttonBegin.mousePressed(pressBegin);

    buttonPause = createButton('PAUSE / RESUME');
    buttonPause.position(20, 190);
    buttonPause.size(300, 50);
    buttonPause.mousePressed(pressPause);

    buttonCancel = createButton('CANCEL');
    buttonCancel.position(20, 250);
    buttonCancel.size(300, 50);
    buttonCancel.mousePressed(pressCancel);

    playlistArray = [playlist1, playlist2, playlist3, playlist4, playlist5];
    playlistTitles = ["Playlist 1", "Playlist 2", "Playlist 3", "Playlist 4", "Playlist 5"];

    
}

function draw(){
    displayRect = rect(10, 10, 300, 100,);
    displayText(textCurrent);
}

function displayText(textCurrent){
    displayTextbox = text("", 10, 10, 300, 100);
    displayTextbox.textAlign(CENTER, CENTER);
    displayTextbox.textSize(20);

    displayTextbox = text(textCurrent, 10, 10, 300, 100);
}

function pressBegin(){
    // console.log("BEGIN pressed");
    // textCurrent = `${playlistCurrent} started`;
    // playlistCurrent = random(playlistArray);
    // console.log(playlistCurrent);
    // playlistCurrent.play();

    console.log("BEGIN pressed");
    randomInt = int(random(5));
    console.log(`Random integer is ${randomInt}.`);
    playlistCurrent = playlistArray[randomInt];
    playlistTitle = playlistTitles[randomInt];
    textCurrent = `${playlistTitle} started`;
    console.log(`${playlistTitle} selected.`);
    console.log(playlistCurrent);
    playlistCurrent.play();
}

function pressPause(){
    console.log("PAUSE/RESUME pressed");

    if(playlistCurrent.isPlaying() == true){
        console.log("pausing current playlist");
        textCurrent = `${playlistTitle} paused`;
        playlistCurrent.pause();
    }
    else {
        console.log("resuming current playlist");
        textCurrent = `${playlistTitle} resumed`;
        playlistCurrent.play();
    }
}

function pressCancel(){
    console.log("CANCEL pressed");
    textCurrent = `${playlistTitle} cancelled`;
    playlistCurrent.stop();
}