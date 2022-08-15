console.log("Welcome to Musify");

//Initialising the avriables
let songIndex = 0;
let audioElement = new Audio('Images/Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    { songName: "Pasoori", filePath: "Images/Songs/1.mp3", coverPath: "Images/Songs/Song Logo/1.jpg" },
    { songName: "Kesariya", filePath: "Images/Songs/2.mp3", coverPath: "Images/Songs/Song Logo/2.jpg" },
    { songName: "Chaand Baaliyan", filePath: "Images/Songs/3.mp3", coverPath: "Images/Songs/Song Logo/3.jpg" },
    { songName: "Kana Yaari", filePath: "Images/Songs/4.mp3", coverPath: "Images/Songs/Song Logo/4.jpg" },
    { songName: "Haareya", filePath: "Images/Songs/5.mp3", coverPath: "Images/Songs/Song Logo/5.jpg" },
    { songName: "Distance Love", filePath: "Images/Songs/6.mp3", coverPath: "Images/Songs/Song Logo/6.jpg" },
    { songName: "Baari", filePath: "Images/Songs/7.mp3", coverPath: "Images/Songs/Song Logo/7.jpg" },
]

//Handle Play/Pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
})
//listen to events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

Array.from(document.getElementsByClassName('play')).forEach((Element) => {
    Element.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id);
        audioElement.src = `Images/Songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play(); 
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 6){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
        audioElement.src = `Images/Songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = `Images/Songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
})