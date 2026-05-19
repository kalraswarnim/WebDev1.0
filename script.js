const canvas = document.querySelector("#heroCanvas");
const ctx = canvas.getContext("2d");

let width = 0;
let height = 0;
let nodes = [];
let animationFrame = 0;

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = rect.width;
  height = rect.height;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const nodeCount = Math.round(Math.max(80, Math.min(190, width / 7)));
  nodes = Array.from({ length: nodeCount }, (_, index) => ({
    x: (index * 67) % width,
    y: 28 + ((index * 97) % Math.max(40, height - 56)),
    size: 1 + ((index * 11) % 7),
    speed: 0.18 + ((index * 5) % 8) / 38,
    depth: 0.24 + ((index * 13) % 60) / 100,
  }));
}

function drawGrid(time) {
  ctx.clearRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#2b2b2b");
  gradient.addColorStop(0.48, "#111111");
  gradient.addColorStop(1, "#030303");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < nodes.length; i += 1) {
    const point = nodes[i];
    const drift = Math.sin(time * point.speed + i) * 18;
    const x = (point.x + time * 18 * point.depth + drift) % (width + 80) - 40;
    const y = point.y + Math.cos(time * point.speed * 0.8 + i) * 12;

    ctx.fillStyle = `rgba(255, 255, 255, ${0.08 + point.depth * 0.18})`;
    ctx.fillRect(x, y, point.size * 2.5, point.size * 9);

    if (i % 4 === 0) {
      ctx.strokeStyle = `rgba(255, 79, 71, ${0.05 + point.depth * 0.12})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 80 + point.size * 8, y + 30);
      ctx.stroke();
    }
  }

  ctx.fillStyle = "rgba(255, 79, 71, 0.12)";
  ctx.beginPath();
  ctx.ellipse(width * 0.77, height * 0.34, width * 0.16, height * 0.18, -0.42, 0, Math.PI * 2);
  ctx.fill();
}

function animate(timestamp) {
  drawGrid(timestamp / 1000);
  animationFrame = requestAnimationFrame(animate);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
animate(0);

document.querySelector(".ask-bar").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  input.value = "";
  event.currentTarget.classList.add("pulse");
  window.setTimeout(() => event.currentTarget.classList.remove("pulse"), 280);
});

window.addEventListener("beforeunload", () => cancelAnimationFrame(animationFrame));
