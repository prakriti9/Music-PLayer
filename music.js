const music = document.querySelector('audio');
const img = document.querySelector('img');
// <!--------- all the contolers ---------->
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// <-----so that all the titles and artists can be changesd --->
const title = document.getElementById('title');
const artist = document.getElementById('artist');

let isplay = false;

const songs = [
    {
        name: "night-changes",
        title: "Night Changes",
        artist: "One Direction",
        img: '1D'
    },
    {
        name: "slow_hands",
        title: "SLow Hands",
        artist: "Niall Horan",
        img: 'niall'
    },
    {
        name: "two-of-us",
        title: "Two of Us",
        artist: "Louis Tomlinsone",
        img: 'louie'
    },
    {
        name: "blank-space",
        title: "Blank Space",
        artist: "Taylor Swift",
        img: 'taylor'
    },
    {
        name: "who-says",
        title: "Who Says",
        artist: "Selena Gomez",
        img: 'selena'
    }
]
// for making it play
const playMusic = () =>{
    isplay = true;
    music.play();
    img.classList.add("anime");
    play.classList.replace('fa-play' ,'fa-pause');
};

// for making it pause
const pauseMusic = ()=>{
    isplay = false;
    music.pause();
    img.classList.remove("anime");
    play.classList.replace('fa-pause' ,'fa-play');
};

play.addEventListener('click', ()=> {
    if(isplay)
        pauseMusic();
    else
        playMusic();
})

const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = songs.name + ".mp3";
    img.src = songs.img + '.jpg';
}
songIndex = 0;
// loadSong(songs[2]);
const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);
