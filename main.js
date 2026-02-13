const ball = document.getElementById("ba1");
const border = document.getElementById("bor");

let x = 0;
let y = 0;

let speedX = 1;
let speedY = 1;

function update() {

    x += speedX;
    y += speedY;

    // pobieramy rozmiary
    const borderWidth = border.clientWidth;
    const borderHeight = border.clientHeight;
    const ballSize = ball.clientWidth;

    // kolizja prawa/lewa
    if (x <= 0 || x + ballSize >= borderWidth) {
        speedX *= -1;
    }

    // kolizja góra/dół
    if (y <= 0 || y + ballSize >= borderHeight) {
        speedY *= -1;
    }

    ball.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(update);
}

update();
