particlesJS.load('particleContainer', 'particle_config.json', function() {
	  console.log('particles loaded');
});


var song_player = document.getElementById("song_container"); 
var song_playing = false;
document.querySelector("#pause-icon").style.visibility = 'hidden'

let song = _.shuffle([
	'songs/1.mp3',
	'songs/2.mp3',
	'songs/1.mp3',
	'songs/2.mp3',
	'songs/1.mp3',
	'songs/2.mp3',
	'songs/1.mp3',
	'songs/2.mp3',
	'songs/1.mp3',
	'songs/2.mp3',
]);

song_player.volume = 0.3; 
song_player.src = song[0]; 

document.querySelector("#audio-player").addEventListener("click", () => {

	if(!song_playing){
		song_player.play();
		song_playing = true;
		document.querySelector("#pause-icon").style.visibility = 'visible'
		document.querySelector("#play-icon").style.visibility = 'hidden'
	}else{
		song_player.pause();
		song_playing = false;
		document.querySelector("#play-icon").style.visibility = 'visible'
		document.querySelector("#pause-icon").style.visibility = 'hidden'
	}

});



document.getElementById("outer3").addEventListener("click", toggleState3);
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";
     
    for (let i = 0; i < imgObject.length - 1; i++) {

			let linkTag = document.createElement("a");
      linkTag.style.display =  "block";
			linkTag.setAttribute('data-lightbox',imgObject[i])
			linkTag.setAttribute('href',imgObject[i])
			linkTag.setAttribute('data-title','1 year anniversary <3 - mnk')

      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background =  "url(" + imgObject[i] + ")  no-repeat center center";
      tileItem.style.backgroundSize =  "contain";
      tileItem.style.height =  "300px";
      tileItem.style.width =  "300px";
			tileItem.style.backgroundSize = "cover";
			tileItem.style.position = "relative";
			tileItem.style.zIndex = "4";

			linkTag.appendChild(tileItem);
			tilesContainer.appendChild(linkTag);      
    }

		particlesJS.load('particleContainer', 'particle_config.json', function() {
				console.log('particles loaded');
		});
  };
}

let imgObject = _.shuffle([
  "pics/1.jpg",
  "pics/2.jpg",
  "pics/3.jpg",
  "pics/4.jpg",
  "pics/5.jpg",
  "pics/6.jpg",
  "pics/7.jpg",
  "pics/8.jpg",
  "pics/9.jpg",
  "pics/10.jpg",
  "pics/11.jpg",
  "pics/12.jpg",
  "pics/13.jpg",
  "pics/14.jpg",
  "pics/15.jpg",
  "pics/16.jpg",
  "pics/17.jpg",
  "pics/18.jpg",
  "pics/19.jpg",
  "pics/20.jpg",
  "pics/21.jpg",
  "pics/22.jpg",
  "pics/23.jpg",
  "pics/24.jpg",
  "pics/25.jpg",
  "pics/26.jpg",
  "pics/27.jpg",
  "pics/28.jpg",
  "pics/29.jpg",
]);

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ") no-repeat center center";
	mainView.style.backgroundSize = "cover";
	mainView.style.position = "relative";
	mainView.style.zIndex = "3";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ") no-repeat center center";
	leftView.style.backgroundSize = "cover";
	leftView.style.position = "relative";
	leftView.style.zIndex = "3";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ") no-repeat center center";
	rightView.style.backgroundSize = "cover";
	rightView.style.position = "relative";
	rightView.style.zIndex = "3";
  
  let linkTag = document.getElementById("linkTag")
	linkTag.setAttribute('data-lightbox',imgObject[mainImg])
	linkTag.setAttribute('data-title','thank you for being a bestfriend <3 - mnk')
  linkTag.href = imgObject[mainImg];

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();
