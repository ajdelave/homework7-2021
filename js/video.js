var video= document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener
("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener
("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener
("click", function() {
	video.playbackRate -= 0.05;
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener
("click", function() {
	video.playbackRate += 0.05;
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener
("click", function() {
	console.log("Original Location " + video.currentTime);
	video.currentTime = video.currentTime + 15;
	if(video.currentTime == video.duration){
		video.currentTime = 0;
		console.log("Going Back to beggining");
		video.play();
	}
	console.log("New Location " + video.currentTime);
});

document.querySelector("#mute").addEventListener
("click", function() {
	if (video.muted === false) {    
		video.muted = true;
		document.querySelector('#mute').innerHTML = "Unmute";
 	}
 	else {
	 video.muted = false;
	 document.querySelector('#mute').innerHTML = "Mute";
 	}
});

document.querySelector("#slider").addEventListener("change",function(){
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector('#volume').innerHTML = this.value + "%";
});

document.querySelector("#vintage").addEventListener
("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener
("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});
