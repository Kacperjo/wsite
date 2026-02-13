const ball = document.getElementById("ba1");
const border = document.getElementById("bor");

let x = 5;
let y = 5;

let speedX = 3;
let speedY = 1;

let bounce = 0.7;

function update() {

    x += speedX;
    y += speedY;
    speedY += 0.0;

    // pobieramy rozmiary
    const borderWidth = border.clientWidth;
    const borderHeight = border.clientHeight;
    const ballSize = ball.clientWidth;

    // kolizja prawa/lewa
    if (x <= 0 || x + ballSize >= borderWidth) {
        speedX *= -1;
    }

    // kolizja góra
    if (y <= 0) {
        speedY *= -1;
    }

    if (y + ballSize >= borderHeight) {
        speedY *= -bounce;
    } 

    ball.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(update);
}

update();
