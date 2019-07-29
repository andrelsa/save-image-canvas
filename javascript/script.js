var player = document.getElementById('player');
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');

var handleSuccess = function(stream) {        
    player.srcObject = stream;
};

navigator.mediaDevices.getUserMedia({video: true})
.then(handleSuccess);

function save_image(){
    var context = snapshot.getContext('2d');
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);            
    var canvas = document.getElementById("snapshot");    
    Canvas2Image.saveAsJPEG(canvas);
    console.log();
}