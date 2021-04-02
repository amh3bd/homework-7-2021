var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video")
	video.playbackRate *=.95
	console.log("New speed is " + video.playbackRate)
	});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Advance Video")
	console.log("Original Location " + video.currentTime)
	video.currentTime += 15;
	console.log("New Location " + video.currentTime)
		// if (video.currentTime == 67.403333) {
		// document.getElementById("video").loop = true;
		// ;
	//   }
	});


document.querySelector("#mute").addEventListener("click", function() {
	console.log("Muting Video");
	video.muted = true;
	document.querySelector("#mute").innerHTML = "Unmute"
	});

	// document.querySelector("#mute").addEventListener("click", function() {
		// console.log("Un-muting Video");
		// video.muted = false;	
		// });


document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume" )
	console.log(this.value)
	video.volume = this.value /100
	document.querySelector("#volume").innerHTML = video.volume*100+"%"
	});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video")
	video.playbackRate /=.95
	console.log("New speed is " + video.playbackRate)
	});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100+"%"
	});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.play();
	video.classList.add("oldSchool");
	});	


document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS");
	video.play();
	video.classList.remove("oldSchool");
	});	
	
