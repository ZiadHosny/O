document.querySelector('body').style.margin = 0;
document.querySelector('body').style.overflow = 'hidden'

const canvasDOM = document.querySelector('canvas');
const WIDTH = (canvasDOM.width = innerWidth);
const HEIGHT = (canvasDOM.height = innerHeight);

const canvas = canvasDOM.getContext('2d');
const gradientCircle = canvas.createLinearGradient(0, 0, 0, HEIGHT);
const CircleArray = [];

const circleRadialGradient = canvas.createRadialGradient(
  WIDTH / 2,
  HEIGHT / 2,
  50,
  WIDTH / 2,
  HEIGHT / 2,
  300
);

const circleRadialGradient2 = canvas.createRadialGradient(
  WIDTH / 2,
  HEIGHT / 2,
  50,
  WIDTH / 2,
  HEIGHT / 2,
  300
);

const circle1 = () => {
  for (let i = 0; i <= 10; i++) {
    if (i == 0) {
      circleRadialGradient.addColorStop(i / 10, 'red');
    } else if (i % 2 == 0) {
      circleRadialGradient.addColorStop(i / 10, 'red');
    } else {
      circleRadialGradient.addColorStop(i / 10, 'black');
    }
  }
};

const circle2 = () => {
  for (let i = 0; i <= 10; i++) {
    if (i == 0) {
      circleRadialGradient2.addColorStop(i / 10, 'white');
    } else if (i % 2 == 0) {
      circleRadialGradient2.addColorStop(i / 10, 'white');
    } else {
      circleRadialGradient2.addColorStop(i / 10, 'black');
    }
  }
};

circle1();
circle2();

const background = () => {
  const backgroundRadialGradient = canvas.createRadialGradient(
    WIDTH / 2,
    HEIGHT / 2,
    50,
    WIDTH / 2,
    HEIGHT / 2,
    500
  );
  for (let i = 0; i <= 10; i++) {
    if (i == 0 || i == 6) {
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

let flag = false;

class Circle {
  constructor(x, y, r, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }
  draw() {
    canvas.beginPath();

    if (flag) {
      canvas.fillStyle = circleRadialGradient;
    } else {
      canvas.fillStyle = circleRadialGradient2;
    }
    canvas.arc(this.x, this.y, this.r, 0, 2 * Math.PI);

    if (this.x + this.r >= WIDTH || this.x - this.r <= 0) {
      this.dx = -this.dx;
      flag = !flag;
    }

    if (this.y + this.r > HEIGHT || this.y - this.r < 0) {
      this.dy = -this.dy;
      flag = !flag;
    }
    this.x += this.dx;
    this.y += this.dy;
    canvas.fill();
  }
}

const animation = () => {
  background();

  for (i = 0; i < CircleArray.length; i++) {
    CircleArray[i].draw();
  }
  canvas.beginPath();
  canvas.font = '50px Cursive';

  canvas.fillText('Z1adH0sny', WIDTH - 270, HEIGHT - 50);
  requestAnimationFrame(animation);
};

for (i = 0; i < 50; i++) {
  const r = Math.random() * 20 + 5;
  const dx = Math.random() * 3 + 1;
  const dy = Math.random() * 3 + 1;
  const x = Math.random() * (WIDTH - 2 * r) + r;
  const y = Math.random() * (HEIGHT - 2 * r) + r;
  CircleArray.push(new Circle(x, y, r, dx, dy));
}
requestAnimationFrame(animation);
