let buttonBegin, buttonPause, buttonCancel;
let buttonRS, buttonFC, buttonSL, buttonWS, buttonOB;
let playlist_RS, playlist_FC, playlist_SL, playlist_WF, playlist_OB;
let displayRect, displayTextbox;
let playlistCurrent, randomInt, playlistArray, playlistTitle, playlistTitles;
let textCurrent = "Press below to begin!";

function preload(){

    // playlist1 = loadSound('assets/playlist1.mp3');
    // playlist2 = loadSound('assets/playlist2.mp3');
    // playlist3 = loadSound('assets/playlist3.mp3');
    // playlist4 = loadSound('assets/playlist4.mp3');
    // playlist5 = loadSound('assets/playlist5.mp3');

    playlist_RS = loadSound('assets/playlist_RS.mp3');
    playlist_FC = loadSound('assets/playlist_FC.mp3');
    playlist_SL = loadSound('assets/playlist_SL.mp3');
    playlist_WF = loadSound('assets/playlist_WF.mp3');
    playlist_OB = loadSound('assets/playlist_OB.mp3');


}

function setup(){
    createCanvas(innerWidth, innerHeight);
    background(0, 0, 0);
    
    displayRect = rect(10, 10, 300, 100,);
        
    // buttonBegin = createButton('BEGIN');
    // buttonBegin.position(20, 130);
    // buttonBegin.size(300, 50);
    // buttonBegin.mousePressed(pressBegin);

    buttonRS = createButton('R.S.');
    buttonRS.position(20, 130);
    buttonRS.size(50, 50);
    buttonRS.mousePressed(pressRS);

    buttonFC = createButton('F.C.');
    buttonFC.position(85, 130);
    buttonFC.size(50, 50);
    buttonFC.mousePressed(pressFC);

    buttonSL = createButton('S.L.');
    buttonSL.position(150, 130);
    buttonSL.size(50, 50);
    buttonSL.mousePressed(pressSL);

    buttonWF = createButton('W.F.');
    buttonWF.position(215, 130);
    buttonWF.size(50, 50);
    buttonWF.mousePressed(pressWF);

    buttonOB = createButton('O.B.');
    buttonOB.position(280, 130);
    buttonOB.size(50, 50);
    buttonOB.mousePressed(pressOB);

    buttonPause = createButton('PAUSE / RESUME');
    buttonPause.position(20, 190);
    buttonPause.size(300, 50);
    buttonPause.mousePressed(pressPause);

    buttonCancel = createButton('CANCEL');
    buttonCancel.position(20, 250);
    buttonCancel.size(300, 50);
    buttonCancel.mousePressed(pressCancel);

    // playlistArray = [playlist1, playlist2, playlist3, playlist4, playlist5];
    // playlistTitles = ["Playlist 1", "Playlist 2", "Playlist 3", "Playlist 4", "Playlist 5"];

    
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
    if (playlist1.isPlaying() == true){
        playlist1.stop();
    }
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
        console.log(`pausing ${playlistTitle}`);
        textCurrent = `${playlistTitle} paused`;
        playlistCurrent.pause();
    }
    else {
        console.log(`resuming ${playlistTitle}`);
        textCurrent = `${playlistTitle} resumed`;
        playlistCurrent.play();
    }
}

function pressCancel(){
    console.log("CANCEL pressed");
    textCurrent = `${playlistTitle} cancelled`;
    playlistCurrent.stop();
}

function pressRS(){
    if(playlist_RS.isPlaying() == true){
        playlist_RS.stop();
    }
    else if(playlist_FC.isPlaying() == true){
        playlist_FC.stop();
    }
    else if(playlist_SL.isPlaying() == true){
        playlist_SL.stop();
    }
    else if(playlist_WF.isPlaying() == true){
        playlist_WF.stop();
    }
    else if(playlist_OB.isPlaying() == true){
        playlist_OB.stop();
    }
    else {
        console.log('no playlist currently playing');
    }

    playlist_RS.play();
    playlistCurrent = playlist_RS;
    playlistTitle = 'R.S.';
    textCurrent = `${playlistTitle} started`;

}

function pressFC(){
    if(playlist_RS.isPlaying() == true){
        playlist_RS.stop();
    }
    else if(playlist_FC.isPlaying() == true){
        playlist_FC.stop();
    }
    else if(playlist_SL.isPlaying() == true){
        playlist_SL.stop();
    }
    else if(playlist_WF.isPlaying() == true){
        playlist_WF.stop();
    }
    else if(playlist_OB.isPlaying() == true){
        playlist_OB.stop();
    }
    else {
        console.log('no playlist currently playing');
    }

    playlist_FC.play();
    playlistCurrent = playlist_FC;
    playlistTitle = 'F.C.';
    textCurrent = `${playlistTitle} started`;
}

function pressSL(){
    if(playlist_RS.isPlaying() == true){
        playlist_RS.stop();
    }
    else if(playlist_FC.isPlaying() == true){
        playlist_FC.stop();
    }
    else if(playlist_SL.isPlaying() == true){
        playlist_SL.stop();
    }
    else if(playlist_WF.isPlaying() == true){
        playlist_WF.stop();
    }
    else if(playlist_OB.isPlaying() == true){
        playlist_OB.stop();
    }
    else {
        console.log('no playlist currently playing');
    }

    playlist_SL.play();
    playlistCurrent = playlist_SL;
    playlistTitle = 'S.L.';
    textCurrent = `${playlistTitle} started`;
}

function pressWF(){
    if(playlist_RS.isPlaying() == true){
        playlist_RS.stop();
    }
    else if(playlist_FC.isPlaying() == true){
        playlist_FC.stop();
    }
    else if(playlist_SL.isPlaying() == true){
        playlist_SL.stop();
    }
    else if(playlist_WF.isPlaying() == true){
        playlist_WF.stop();
    }
    else if(playlist_OB.isPlaying() == true){
        playlist_OB.stop();
    }
    else {
        console.log('no playlist currently playing');
    }

    playlist_WF.play();
    playlistCurrent = playlist_WF;
    playlistTitle = 'W.F.';
    textCurrent = `${playlistTitle} started`;
}

function pressOB(){
    if(playlist_RS.isPlaying() == true){
        playlist_RS.stop();
    }
    else if(playlist_FC.isPlaying() == true){
        playlist_FC.stop();
    }
    else if(playlist_SL.isPlaying() == true){
        playlist_SL.stop();
    }
    else if(playlist_WF.isPlaying() == true){
        playlist_WF.stop();
    }
    else if(playlist_OB.isPlaying() == true){
        playlist_OB.stop();
    }
    else {
        console.log('no playlist currently playing');
    }

    playlist_OB.play();
    playlistCurrent = playlist_OB;
    playlistTitle = 'O.B.';
    textCurrent = `${playlistTitle} started`;
}
