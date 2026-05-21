const productData = {
  "professional-displays": {
    title: "Professional Displays",
    href: "professional-displays.html",
    lede: "Commercial display systems for reliable communication in offices, classrooms, retail spaces, and public environments.",
    subtitle: "Clear, durable displays for everyday business use.",
    description:
      "GPRK professional displays are built for high-visibility presentations, information sharing, and brand communication. They are suited for meeting rooms, reception areas, classrooms, command spaces, and customer-facing environments.",
    features: [
      ["Commercial Reliability", "Designed for longer operating hours, consistent brightness, and stable performance."],
      ["Flexible Installation", "Useful for wall mounting, meeting spaces, signage points, and multi-display environments."],
      ["Easy Content Use", "Supports simple content playback, presentation workflows, and workplace communication."],
    ],
  },
  "outdoor-video-walls": {
    title: "Outdoor Video Walls",
    href: "outdoor-video-walls.html",
    lede: "High-impact outdoor LED video walls built for visibility, scale, and public communication.",
    subtitle: "Large-format visuals made for outdoor attention.",
    description:
      "Outdoor video walls help brands, institutions, and venues communicate clearly in bright and open environments. GPRK focuses on visibility, site planning, mounting, service access, and durable operation.",
    features: [
      ["High Brightness", "Built for outdoor readability where sunlight and distance are major factors."],
      ["Weather-Ready Planning", "Installation planning considers exposure, structure, cable routing, and service access."],
      ["Large Audience Reach", "Ideal for campuses, public venues, storefronts, outdoor events, and civic communication."],
    ],
  },
  "indoor-video-walls": {
    title: "Indoor Video Walls",
    href: "indoor-video-walls.html",
    lede: "Seamless indoor video wall solutions for command centers, lobbies, auditoriums, and presentation spaces.",
    subtitle: "Immersive display surfaces for high-value interiors.",
    description:
      "Indoor video walls create premium visual surfaces for information, presentations, dashboards, and brand experiences. GPRK handles planning, alignment, calibration, control, and handover.",
    features: [
      ["Seamless Presence", "Designed for impactful indoor visuals with clean alignment and strong viewing experience."],
      ["Control Integration", "Works with processors, inputs, content sources, and room control requirements."],
      ["Premium Environments", "Suited for boardrooms, lobbies, control rooms, auditoriums, and experience centers."],
    ],
  },
  "interactive-display": {
    title: "Interactive Display",
    href: "interactive-display.html",
    lede: "Touch-enabled displays for learning, training, collaboration, and hybrid workspaces.",
    subtitle: "Turn rooms into interactive collaboration spaces.",
    description:
      "Interactive displays help teams teach, present, annotate, train, and collaborate. GPRK supports selection, installation, user orientation, and practical workflows for education and business environments.",
    features: [
      ["Touch Collaboration", "Useful for annotation, whiteboarding, classroom interaction, and team discussions."],
      ["Education Ready", "Supports modern classrooms, training rooms, and digital learning experiences."],
      ["Meeting Friendly", "Can support hybrid work, content sharing, and collaborative presentation workflows."],
    ],
  },
};

const productKey = document.body.dataset.product;
const product = productData[productKey] || productData["professional-displays"];

document.title = `GPRK | ${product.title}`;
document.querySelector("#product-title").textContent = product.title;
document.querySelector("#product-lede").textContent = product.lede;
document.querySelector("#product-subtitle").textContent = product.subtitle;
document.querySelector("#product-description").textContent = product.description;

product.features.forEach(([title, text], index) => {
  const number = ["one", "two", "three"][index];
  document.querySelector(`#feature-${number}-title`).textContent = title;
  document.querySelector(`#feature-${number}-text`).textContent = text;
});

const otherProductsGrid = document.querySelector("#other-products-grid");
Object.entries(productData)
  .filter(([key]) => key !== productKey)
  .forEach(([, item]) => {
    const card = document.createElement("article");
    const title = document.createElement("h3");
    const text = document.createElement("p");
    const link = document.createElement("a");

    title.textContent = item.title;
    text.textContent = item.lede;
    link.href = item.href;
    link.textContent = "View product";

    card.append(title, text, link);
    otherProductsGrid.append(card);
  });

document.querySelectorAll(".product-page > :not(.other-products), .product-grid article, .other-products-grid article").forEach((item, index) => {
  item.classList.add("motion-reveal");
  item.style.setProperty("--delay", `${Math.min(index * 25, 120)}ms`);
});

requestAnimationFrame(() => {
  document.querySelectorAll(".motion-reveal").forEach((item) => item.classList.add("is-visible"));
});
