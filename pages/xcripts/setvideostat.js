var video = document.getElementById("Video");
var bttn = document.getElementById("VidBttn");

function setVideo() {
  if (video.paused) {
    video.play();
    bttn.innerHTML = "Pause";
  } else {
    video.pause();
    bttn.innerHTML = "Play";
  }
}
/* this goes in html


	<button id="VidBttn" onclick="setVideo()">Play</button>
				<script >
				var video = document.getElementById("Video");
						var bttn = document.getElementById("VidBttn");
						
						function setVideo() {
						  if (video.paused) {
							video.play();
							bttn.innerHTML = "Pause";
						  } else {
							video.pause();
							bttn.innerHTML = "Play";
						  }
						}
				</script>

<video autoplay muted loop id="Video">
<source src="redneckMV.mp4" type="video/mp4">
Your browser does not support HTML5 video.
</video>*/