//1.0: Records audio, plays back at 10% or 20% speed.

//Record audio
//Process audio

const recorder = document.getElementById('recorder');
const player = document.getElementById('player');

recorder.addEventListener('change', function(e) {
	const file = e.target.files[0];
	const url = URL.createObjectURL(file);
	// Do something with the audio file.
	player.src = url;
});

player.playbackRate = 0.5;

/*
var shouldStop = false;
var stopped = false;
var downloadLink = document.getElementById('download');
var stopButton = document.getElementById('stop');
var startButton = document.getElementById('start');

stopButton.addEventListener('click', function() {
	shouldStop = true;
});

var handleSuccess = function(stream) {
	var options = {mimeType: 'audio/webm'};
	var recordedChunks = [];
	var mediaRecorder = new MediaRecorder(stream, options);

	mediaRecorder.addEventListener('dataavailable', function(e) {
		if (e.data.size > 0) {
			recordedChunks.push(e.data);
		}

		if(shouldStop === true && stopped === false) {
			mediaRecorder.stop();
			stopped = true;
			}
	});

	mediaRecorder.addEventListener('stop', function() {
		downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
		downloadLink.download = 'acetest.wav';
	});

	mediaRecorder.start();
	startButton.addEventListener('click', function() {
	});
};
*/


navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(handleSuccess);

//Playback audio
/*
var vid = document.getElementById("myVideo");
vid.playbackRate = 0.5;
*/

