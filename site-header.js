const isHomePage =
  window.location.pathname.includes("index.html") ||
  window.location.pathname === "/";

const base = isHomePage ? "pages/" : "";
const home = isHomePage ? "index.html" : "../index.html";

const host = document.currentScript.previousElementSibling;

host.outerHTML = `
  <header class="topbar" aria-label="Main navigation">
    <a class="brand" href="${home}" aria-label="GPRK home">GPRK</a>

    <nav class="main-nav" aria-label="Primary">
      <div class="nav-item">
        <button class="nav-toggle" type="button" aria-expanded="false">
          What we do
          <span class="chevron" aria-hidden="true"></span>
        </button>
        <div class="mega-menu" aria-label="What we do menu">
          <div class="mega-column mega-wide">
            <p class="menu-heading">Our products</p>
            <a href="professional-displays.html"><span class="menu-arrow">›</span>Professional Displays</a>
            <a href="outdoor-video-walls.html"><span class="menu-arrow">›</span>Outdoor Video Walls</a>
            <a href="indoor-video-walls.html"><span class="menu-arrow">›</span>Indoor Video Walls</a>
            <a href="interactive-display.html"><span class="menu-arrow">›</span>Interactive Display</a>
          </div>

          <div class="mega-column mega-wide">
            <p class="menu-heading">Our services</p>
            <a href="detail.html?slug=video-wall-solution"><span class="menu-arrow">›</span>Video Wall Solution</a>
            <a href="detail.html?slug=video-conferencing"><span class="menu-arrow">›</span>Video Conferencing</a>
            <a href="detail.html?slug=digital-signage-display"><span class="menu-arrow">›</span>Digital Signage Display</a>
            <a href="detail.html?slug=large-format-displays"><span class="menu-arrow">›</span>Large Format Displays</a>
            <a href="detail.html?slug=auditorium-av-solution"><span class="menu-arrow">›</span>Auditorium AV Solution</a>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <button class="nav-toggle" type="button" aria-expanded="false">
          Industries we serve
          <span class="chevron" aria-hidden="true"></span>
        </button>
        <div class="dropdown-menu compact-menu" aria-label="Industries menu">
          <a href="detail.html?slug=corporate"><span class="menu-arrow">›</span>Corporate</a>
          <a href="detail.html?slug=education"><span class="menu-arrow">›</span>Education</a>
          <a href="detail.html?slug=retail"><span class="menu-arrow">›</span>Retail</a>
          <a href="detail.html?slug=healthcare"><span class="menu-arrow">›</span>Healthcare</a>
          <a href="detail.html?slug=hospitality"><span class="menu-arrow">›</span>Hospitality</a>
          <a href="detail.html?slug=public-sector"><span class="menu-arrow">›</span>Public Sector</a>
        </div>
      </div>

      <div class="nav-item">
        <button class="nav-toggle" type="button" aria-expanded="false">
          About us
          <span class="chevron" aria-hidden="true"></span>
        </button>
        <div class="dropdown-menu about-menu" aria-label="About menu">
          <a href="detail.html?slug=company">
  <span class="menu-arrow">›</span>
  Company
</a>
          <a href="detail.html?slug=partners"><span class="menu-arrow">›</span>Partners</a>
          <a href="oem.html"><span class="menu-arrow">›</span>OEM Solutions</a>
          <a href="detail.html?slug=investors"><span class="menu-arrow">›</span>Investors</a>
          <a href="detail.html?slug=insights"><span class="menu-arrow">›</span>Insights</a>
          <a href="detail.html?slug=brand"><span class="menu-arrow">›</span>Brand</a>
          <a href="detail.html?slug=esg"><span class="menu-arrow">›</span>Environment, Sustainability and Governance</a>
          <a href="detail.html?slug=newsroom"><span class="menu-arrow">›</span>Newsroom</a>
          <a href="detail.html?slug=diversity-inclusion"><span class="menu-arrow">›</span>Diversity, Equity and Inclusion</a>
        </div>
      </div>

      <div class="nav-item">
        <a class="nav-link" href="detail.html?slug=careers">
          Careers
        </a>
      </div>
    </nav>

    <div class="top-actions">
      <button class="search-button" type="button" aria-label="Search">
        <span aria-hidden="true"></span>
        Search
      </button>
      <div class="group-mark" aria-label="A GPRK Technologies Pvt. Ltd.">
          <span class="orbit" aria-hidden="true"></span>
          <span>GPRK Technologies<br />Pvt. Ltd.</span>
        </div>
      <a class="contact-button" href="contact.html">Contact</a>
    </div>
  </header>
`;
