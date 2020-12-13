const socket = new WebSocket("ws://localhost:25565");

// Connection opened
socket.addEventListener('open', function (event) {
    setTimeout(() => {
        socket.send('Hello Server!');
        console.log('send hello to server');
    }, 100)
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});