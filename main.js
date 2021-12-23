const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
// ! 1

// context.fillStyle = "white";
// context.fillRect(0, 0, 50, 50);

//!2

// context.fillStyle = "orange";
// context.fillRect(80, 80, 70, 70);

//!3

// context.fillStyle = "blue";
// context.arc(200, 200, 50, 0, 2 * Math.PI);
// context.fill();

//!4
// context.beginPath();
// context.fillStyle = "red";
// context.arc(300, 300, 30, 0, 2 * Math.PI);
// context.fill();

//!5
// context.beginPath()
// context.fillStyle = "green";
// context.arc(400, 400, 40, 0, 2 * Math.PI);
// context.fill();

// context.beginPath()
// context.fillStyle = "green";
// context.arc(500, 400, 40, 0, 2 * Math.PI);
// context.fill()

//!6
// y = 0;
// context.fillStyle = "yellow";

// setInterval(() => {
//     context.clearRect(600, y, 100, 100)
//     context.clearRect(750, y, 100, 100)
//     context.clearRect(900, y, 100, 100)
//     y += 20
//     context.fillRect(600, y, 100, 100);
//     context.fillRect(750, y, 100, 100);
//     context.fillRect(900, y, 100, 100);
// }, 500);

//!7

// const floor = {
//     x: 0, y: canvas.height - 100, width: canvas.width, height: 100
// }
// context.fillRect(floor.x, floor.y, floor.width, floor.height);
// context.fillStyle = "purple";

//!8
// const player = {
//     x: 0, y: canvas.height - floor.height - 100, width: 100, height: 100
// }

//!9
// const jump = () => {
//     context.clearRect(player.x, player.y, player.width, player.height);
//     context.fillRect(player.x, player.y, player.width, player.height);
//     addEventListener("keydown", (e) => {
//         context.clearRect(player.x, player.y, player.width, player.height);
//         if (e.key == "ArrowUp") {
//             player.y -= 1
//             setTimeout(() => {
//                 context.clearRect(player.x, player.y, player.width, player.height);
//                 player.y += 1;
//             }, 500)
//         }
//     });
//     requestAnimationFrame(jump)
// }

// jump();

//!10
// for (let i = 0; i < 10; i++) {
//     context.fillStyle = "red";
//     context.fillRect(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 50, 50);
// }

//!11
// for (let i = 0; i < 10; i++) {
//     context.beginPath()
//     context.fillStyle = "yellow";
//     context.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 80, 0, 2 * Math.PI);
//     context.fill();
// }

//!12
// for (let i = 0; i < 10; i++) {
//     context.beginPath()
//     context.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16)
//     context.arc(Math.random() * 1000, Math.random() * 400, 30, 0, 2 * Math.PI);
//     context.fill();
// }

//!class
// context.beginPath();
// context.moveTo(20, 20);
// context.lineTo(20, 100);
// context.lineTo(70, 100);
// context.moveTo(20, 20);
// context.lineTo(70, 100);
// context.stroke();


// context.beginPath();
// context.moveTo(120, 120);
// context.lineTo(120, 200);
// context.lineTo(100, 200);
// context.moveTo(120, 120);
// context.lineTo(100, 200);
// context.stroke();


context.beginPath();
context.moveTo(200, 200);
context.lineTo(120, 200);
context.lineTo(90, 120);
context.fill()


