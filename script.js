const canvas = document.querySelector("#heroCanvas");
const ctx = canvas?.getContext("2d");

let width = 0;
let height = 0;
let nodes = [];
let animationFrame = 0;

function resizeCanvas() {
  if (!canvas || !ctx) {
    return;
  }

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
  if (!canvas || !ctx) {
    return;
  }

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
if (canvas && ctx) {
  resizeCanvas();
  animate(0);
}

const navItems = Array.from(document.querySelectorAll(".nav-item"));
let closeTimer = 0;

function closeMenus(exceptItem) {
  navItems.forEach((item) => {
    if (item !== exceptItem) {
      item.classList.remove("is-open");
      item.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "false");
    }
  });
}

function openMenu(item) {
  window.clearTimeout(closeTimer);
  closeMenus(item);
  item.classList.add("is-open");
  item.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "true");
}

function scheduleClose(item) {
  window.clearTimeout(closeTimer);
  closeTimer = window.setTimeout(() => {
    if (!item.matches(":hover") && !item.contains(document.activeElement)) {
      item.classList.remove("is-open");
      item.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "false");
    }
  }, 120);
}

navItems.forEach((item) => {
  const toggle = item.querySelector(".nav-toggle");

  item.addEventListener("mouseenter", () => openMenu(item));
  item.addEventListener("mouseleave", () => scheduleClose(item));
  item.addEventListener("focusin", () => openMenu(item));
  item.addEventListener("focusout", () => scheduleClose(item));

  if (toggle) {

    toggle.addEventListener("click", (event) => {

      event.preventDefault();

      event.stopPropagation();

      if (window.innerWidth <= 980) {

        navItems.forEach((otherItem) => {

          if (otherItem !== item) {
            otherItem.classList.remove("mobile-open");
          }

        });

        item.classList.toggle("mobile-open");

        return;
      }

      if (item.classList.contains("is-open")) {

        item.classList.remove("is-open");

        toggle.setAttribute("aria-expanded", "false");

        return;
      }

      openMenu(item);

    });

  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".main-nav")) {
    closeMenus();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenus();
  }
});

if (canvas && ctx) {
  window.addEventListener("beforeunload", () => cancelAnimationFrame(animationFrame));
}
document.addEventListener("DOMContentLoaded", () => {

  const mobileMenuButton =
    document.querySelector(".mobile-menu-toggle");

  const navWrapper =
    document.querySelector(".nav-wrapper");

  const mobileOverlay =
    document.querySelector(".mobile-overlay");

  const mobileClose =
   document.querySelector(".mobile-close");

  mobileMenuButton?.addEventListener("click", () => {

    navWrapper.classList.toggle("active");
    document.body.classList.toggle("menu-open");
    mobileOverlay.classList.toggle("active");

  });

  mobileOverlay?.addEventListener("click", () => {

    navWrapper.classList.remove("active");
    document.body.classList.remove("menu-open");
    mobileOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");

  });

  mobileClose?.addEventListener("click", () => {

    navWrapper.classList.remove("active");

    mobileOverlay.classList.remove("active");

    document.body.classList.remove("menu-open");

  });

});