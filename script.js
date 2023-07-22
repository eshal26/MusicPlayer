console.log("Welcome to Music Player");
let songIndex = 0;
let audioElement = new Audio("Ed_Sheeran_-_Perfect_[NaijaGreen.Com]_.mp3");
let masterPlay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songname : "Perfect", filePath : "Ed_Sheeran_-_Perfect_[NaijaGreen.Com]_.mp3", coverPath: "Ed_Sheeran_Perfect_Single_cover.jpg"},
    {songname : "Photograph", filePath : "Ed_Sheeran_-_Photograph_Naijamusics.com.mp3", coverPath:"artworks-000391930665-04n234-t500x500.jpg" },
    {songname : "Shape of You", filePath : "Ed-Sheeran-Shape-of-You.mp3", coverPath:"shapeofyou.jpg" },
    {songname : "Night Changes", filePath : "Night-Changes_192(PagalWorld).mp3", coverPath: "One_Direction_-_Night_Changes_Single_Cover.png"},
    {songname : "What Makes you Beautiful", filePath : "One_Direction_-_What_Makes_You_Beautiful.mp3", coverPath: "What makes you be....jpg"},
    {songname : "Steal my Girl", filePath : "Steal-My-Girl---One-Direction(PagalWorld).mp3", coverPath: "steal my d...jpg"},
    {songname : "Story of My Life", filePath : "StoryOfMyLife.mp3", coverPath: "What makes you be....jpg"},
    {songname : "Let Her Go", filePath : "Passenger_-_Let_Her_Go_Luvmp.Com_.mp3", coverPath: "let her go.jpg"},
    {songname : "Thinking Out Loud", filePath : "Ed_Sheeran_-_Thinking_Out_Loud_[NaijaGreen.Com]_.mp3", coverPath: "thnking out loud.jpg" },

    ]
    songitems.forEach((element,i) => {
        console.log(element,i);
        console.log('songitems');
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    });

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;

        }
    }
)
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressbar.value = progress;
})
progressbar.addEventListener('change', () =>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
} )
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex-1].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterSongName.innerText = songs[songIndex-1].songname;

    } )
}
)
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex-1].filePath;
    masterSongName.innerText = songs[songIndex-1].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex-1].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
    masterSongName.innerText = songs[songIndex-1].songname;
})


