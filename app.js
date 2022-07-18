document.querySelector('body').style.margin = 0;

const canvasDOM = document.querySelector('canvas');
const WIDTH = (canvasDOM.width = innerWidth);
const HEIGHT = (canvasDOM.height = innerHeight);

const canvas = canvasDOM.getContext('2d');
const gradientCircle = canvas.createLinearGradient(0, 0, 0, HEIGHT);
const CircleArray = [];

const circleRadialGradient = canvas.createRadialGradient(
  WIDTH / 2,
  HEIGHT / 2,
  30,
  50,
  200,
  WIDTH
);

for (let i = 0; i <= 10; i++) {
  if (i == 0) {
    circleRadialGradient.addColorStop(i / 10, 'blue');
  } else if (i % 2 == 0) {
    circleRadialGradient.addColorStop(i / 10, 'red');
  } else {
    circleRadialGradient.addColorStop(i / 10, 'black');
  }
}

const background = () => {
  const backgroundRadialGradient = canvas.createRadialGradient(
    WIDTH / 2,
    HEIGHT / 2,
    30,
    50,
    200,
    WIDTH
  );
  for (let i = 0; i <= 10; i++) {
    if (i == 0) {
      backgroundRadialGradient.addColorStop(i / 10, 'white');
    } else if (i % 2 == 0) {
      backgroundRadialGradient.addColorStop(i / 10, 'black');
    } else {
      backgroundRadialGradient.addColorStop(i / 10, 'red');
    }
  }
  canvas.fillStyle = backgroundRadialGradient;
  canvas.fillRect(0, 0, WIDTH, HEIGHT);
};

class Circle {
  constructor(x, y, r, dx, dy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
  }
  draw() {
    canvas.beginPath();
    canvas.fillStyle = circleRadialGradient;
    canvas.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    canvas.fill();

    if (this.x + this.r >= WIDTH || this.x - this.r <= 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.r > HEIGHT || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

const animation = () => {
  background();

  for (i = 0; i < CircleArray.length; i++) {
    CircleArray[i].draw();
  }
  canvas.beginPath();
  canvas.font = '20px Cursive';

  canvas.fillText('Z1adH0sny', WIDTH - 140, HEIGHT - 20);
  requestAnimationFrame(animation);
};

for (i = 0; i < 50; i++) {
  const r = Math.random() * 15 + 5;
  const dx = Math.random() * 3 + 1;
  const dy = Math.random() * 3 + 1;
  const x = Math.random() * (WIDTH - 2 * r) + r;
  const y = Math.random() * (HEIGHT - 2 * r) + r;
  CircleArray.push(new Circle(x, y, r, dx, dy));
}
requestAnimationFrame(animation);
