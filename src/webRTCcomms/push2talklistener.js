// app.js
let localStream;
let peerConnection;
const gun = Gun();

const constraints = { audio: true };

// Function to handle peer connection and WebRTC setup
function setupPeerConnection() {
    peerConnection = new RTCPeerConnection();

    // Add local audio stream to the peer connection
    localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

    // Set up the event handlers for the peer connection
    peerConnection.onicecandidate = handleIceCandidate;
    peerConnection.ontrack = handleRemoteStream;
    peerConnection.onaddstream = handleLocalStream; // <--- This line is added
}

async function startAudioTransmission() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia(constraints);
        // Update the UI to indicate that audio transmission is active
        // Send audio data from localStream to the other peer here (using WebRTC)
        setupPeerConnection();
    } catch (err) {
        console.error('Error accessing microphone:', err);
    }
}

function stopAudioTransmission() {
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        // Update the UI to indicate that audio transmission is stopped
        // Stop sending audio data to the other peer here (using WebRTC)
    }
}

// Function to handle ICE candidate events
function handleIceCandidate(event) {
    if (event.candidate) {
        // Send ICE candidate to the other peer using GunDB
    }
}

// Function to handle remote stream (audio received from the other peer)
function handleRemoteStream(event) {
    // Attach the remote audio stream to an audio element on the page
    const remoteAudioElement = document.getElementById('remoteAudio');
    remoteAudioElement.srcObject = event.streams[0];
}

function handleLocalStream(event) {
    // Attach the local audio stream to an audio element on the page to create the echo effect
    const localAudioElement = document.getElementById('localAudio');
    localAudioElement.srcObject = event.stream;
}

// Handle push-to-talk button click
document.getElementById('pttButton').addEventListener('mousedown', startAudioTransmission);
document.getElementById('pttButton').addEventListener('mouseup', stopAudioTransmission);

// Handle connect button click
document.getElementById('connectButton').addEventListener('click', connectWithFriend);

// Function to connect with a friend via GunDB
function connectWithFriend() {
    // Implement WebRTC signaling and connection establishment here
    // Use GunDB to exchange WebRTC connection details (SDP offer/answer)
}