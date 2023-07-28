let localStream;
let peerConnection;
const gun = Gun();

const constraints = { audio: true };

// Handle push-to-talk button click
document.getElementById('pttButton').addEventListener('mousedown', startAudioTransmission);
document.getElementById('pttButton').addEventListener('mouseup', stopAudioTransmission);

// Handle connect button click
document.getElementById('connectButton').addEventListener('click', connectWithFriend);

async function startAudioTransmission() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia(constraints);
        // Send audio data from localStream to the other peer here
    } catch (err) {
        console.error('Error accessing microphone:', err);
    }
}

function stopAudioTransmission() {
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        // Stop sending audio data to the other peer here
    }
}

function connectWithFriend() {
    // Implement WebRTC signaling and connection establishment here
    // Use GunDB to exchange WebRTC connection details (SDP offer/answer)
}