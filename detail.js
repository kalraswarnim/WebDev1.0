const pages = {
  "professional-displays": {
    category: "Our products",
    title: "Professional Displays",
    lede: "Commercial-grade display systems for offices, education, retail, control rooms, and public spaces.",
  },
  "outdoor-video-walls": {
    category: "Our products",
    title: "Outdoor Video Walls",
    lede: "High-brightness LED walls designed for outdoor visibility, weather resistance, and large audience impact.",
  },
  "indoor-video-walls": {
    category: "Our products",
    title: "Indoor Video Walls",
    lede: "Seamless indoor video wall installations for lobbies, command centers, meeting spaces, and venues.",
  },
  "interactive-display": {
    category: "Our products",
    title: "Interactive Display",
    lede: "Touch-enabled displays for classrooms, training rooms, collaboration spaces, and hybrid meetings.",
  },
  "video-wall-solution": {
    category: "Our services",
    title: "Video Wall Solution",
    lede: "End-to-end video wall planning, mounting, processing, calibration, and maintenance.",
  },
  "video-conferencing": {
    category: "Our services",
    title: "Video Conferencing",
    lede: "Conference room systems with displays, cameras, audio, control, and platform-ready integration.",
  },
  "digital-signage-display": {
    category: "Our services",
    title: "Digital Signage Display",
    lede: "Content-ready signage networks for promotions, announcements, wayfinding, and workplace communication.",
  },
  "large-format-displays": {
    category: "Our services",
    title: "Large Format Displays",
    lede: "Oversized display systems for boardrooms, classrooms, stores, reception areas, and events.",
  },
  "auditorium-av-solution": {
    category: "Our services",
    title: "Auditorium AV Solution",
    lede: "Projection, display, sound, control, and stage-ready AV systems for auditoriums and halls.",
  },
  corporate: {
    category: "Industries we serve",
    title: "Corporate",
    lede: "Meeting rooms, boardrooms, lobbies, training centers, and internal communication systems.",
  },
  education: {
    category: "Industries we serve",
    title: "Education",
    lede: "Interactive classrooms, lecture halls, digital notice boards, and campus-wide display solutions.",
  },
  retail: {
    category: "Industries we serve",
    title: "Retail",
    lede: "Digital signage, promotional displays, storefront LED, and customer experience installations.",
  },
  healthcare: {
    category: "Industries we serve",
    title: "Healthcare",
    lede: "Patient communication displays, wayfinding, waiting area screens, and collaboration systems.",
  },
  hospitality: {
    category: "Industries we serve",
    title: "Hospitality",
    lede: "Guest-facing signage, banquet AV, conference areas, and premium display experiences.",
  },
  "public-sector": {
    category: "Industries we serve",
    title: "Public Sector",
    lede: "Reliable display and AV systems for civic buildings, transport hubs, and public communication.",
  },
  about: {
    category: "Useful links",
    title: "About GPRK",
    lede: "GPRK helps organizations plan, install, and maintain professional AV and display technology.",
  },
  company: {
    category: "About us",
    title: "About Us",
    lede: "GPRK develops and delivers technologically advanced display products shaped by research, engineering, and practical industry needs.",
    cards: [
      {
        title: "Research",
        text: "Our products are backed by continuous research and development for changing industry needs.",
      },
      {
        title: "Design",
        text: "We welcome customer designs and work closely to bring those ideas into practical life.",
      },
      {
        title: "Deliver",
        text: "Experienced personnel help us deliver technology distribution, support, and solution guidance.",
      },
    ],
    showCompanyProfile: true,
  },
  leadership: {
    category: "About us",
    title: "Leadership",
    lede: "A delivery-focused team guiding projects from consultation through long-term support.",
  },
  projects: {
    category: "About us",
    title: "Projects",
    lede: "Explore the kinds of display, signage, conferencing, and AV installations GPRK delivers.",
  },
  partners: {
    category: "About us",
    title: "Partners",
    lede: "Technology and channel partnerships help us match the right products to each environment.",
  },
  investors: {
    category: "About us",
    title: "Investors",
    lede: "Business updates, performance signals, and company information for stakeholders.",
  },
  insights: {
    category: "About us",
    title: "Insights",
    lede: "Practical ideas on display technology, AV planning, signage networks, and collaboration spaces.",
  },
  brand: {
    category: "About us",
    title: "Brand",
    lede: "The visual standards, messaging, and identity principles behind GPRK communications.",
  },
  esg: {
    category: "About us",
    title: "Environment, Sustainability and Governance",
    lede: "Responsible business practices for efficient technology, trusted delivery, and long-term value.",
  },
  newsroom: {
    category: "About us",
    title: "Newsroom",
    lede: "Company announcements, project updates, partnerships, and display technology news.",
  },
  "diversity-inclusion": {
    category: "About us",
    title: "Diversity, Equity and Inclusion",
    lede: "A workplace focus on fairness, opportunity, respect, and team growth.",
  },
  careers: {
    category: "Careers",
    title: "Open Roles",
    lede: "Join a team building AV and display experiences for workplaces, campuses, venues, and retail spaces.",
  },
  "life-at-gprk": {
    category: "Careers",
    title: "Life at GPRK",
    lede: "A practical, project-driven culture for people who like technology, sites, clients, and clean delivery.",
  },
  contact: {
    category: "Useful links",
    title: "Contact",
    lede: "Talk to GPRK about your display, video wall, conferencing, signage, or auditorium AV requirement.",
  },
  catalog: {
    category: "Useful links",
    title: "Download Catalog",
    lede: "Browse product categories and service options before choosing the right solution for your site.",
  },
};

const slug = new URLSearchParams(window.location.search).get("slug") || "professional-displays";
const page = pages[slug] || pages["professional-displays"];

document.title = `GPRK | ${page.title}`;
document.querySelector("#page-category").textContent = page.category;
document.querySelector("#page-title").textContent = page.title;
document.querySelector("#page-lede").textContent = page.lede;

const defaultCards = [
  {
    title: "Plan",
    text: "We map requirements, site conditions, and use cases before recommending the right system.",
  },
  {
    title: "Deploy",
    text: "Our team handles installation, integration, testing, and handover.",
  },
  {
    title: "Support",
    text: "We provide training, maintenance, and lifecycle support after launch.",
  },
];

const cards = page.cards || defaultCards;
document.querySelector("#card-one-title").textContent = cards[0].title;
document.querySelector("#card-one-text").textContent = cards[0].text;
document.querySelector("#card-two-title").textContent = cards[1].title;
document.querySelector("#card-two-text").textContent = cards[1].text;
document.querySelector("#card-three-title").textContent = cards[2].title;
document.querySelector("#card-three-text").textContent = cards[2].text;

document.querySelector("#company-profile").hidden = !page.showCompanyProfile;

const revealItems = document.querySelectorAll(
  ".detail-page > *, .detail-grid article, .company-product-strip a, .vision-mission, .journey-section, .company-facts article, .company-sections article",
);

revealItems.forEach((item, index) => {
  item.classList.add("motion-reveal");
  item.style.setProperty("--delay", `${Math.min(index * 25, 120)}ms`);
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px 180px 0px",
      threshold: 0.04,
    },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
