// Start webcam stream
console.log("Script loaded");

const canvas = document.getElementById('gameCanvas');
if (!canvas) {
  console.error("Canvas not found!");
}
const ctx = canvas.getContext('2d');

let fruitImg = new Image();
fruitImg.src = 'assets/watermelon.png';
fruitImg.onload = () => {
  console.log("Fruit image loaded");
  ctx.drawImage(fruitImg, 300, 200, 100, 100);
};

navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    const video = document.getElementById('webcam');
    video.srcObject = stream;
  })
  .catch(function(err) {
    console.error("Camera error:", err);
  });

// Load fruit image
let fruitImg = new Image();
fruitImg.src = 'assets/watermelon.png';

// Draw on canvas (basic example)
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

fruitImg.onload = () => {
  ctx.drawImage(fruitImg, 300, 200, 100, 100); // position and size
};
