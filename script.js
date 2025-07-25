body {
  margin: 0;
  text-align: center;
  background-color: #a0e8ff;
  font-family: 'Comic Sans MS', cursive, sans-serif;
}

h1 {
  margin: 10px;
  color: #fff;
  background: #2d98da;
  padding: 10px;
  border-radius: 10px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

#gameCanvas {
  background: url('assets/background.png') no-repeat center center;
  background-size: cover;
  border: 3px solid #fff;
}
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    const video = document.getElementById('webcam');
    video.srcObject = stream;
  })
  .catch(function(err) {
    console.error("Camera error:", err);
  });

let fruitImg = new Image();
fruitImg.src = 'watermelon.png';

#webcam {
  display: none;
}
