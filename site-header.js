const host = document.currentScript.previousElementSibling;

host.outerHTML = `
  <header class="topbar" aria-label="Main navigation">
    <a class="brand" href="../index.html" aria-label="GPRK home">GPRK</a>

    <nav class="main-nav" aria-label="Primary">
      <div class="nav-item">
        <button class="nav-toggle" type="button" aria-expanded="false">
          What we do
          <span class="chevron" aria-hidden="true"></span>
        </button>
        <div class="mega-menu" aria-label="What we do menu">
          <div class="mega-column mega-wide">
            <p class="menu-heading">Our products</p>
            <a href="professional-displays.html"><span class="marker" aria-hidden="true"></span>Professional Displays</a>
            <a href="outdoor-video-walls.html"><span class="marker" aria-hidden="true"></span>Outdoor Video Walls</a>
            <a href="indoor-video-walls.html"><span class="marker" aria-hidden="true"></span>Indoor Video Walls</a>
            <a href="interactive-display.html"><span class="marker" aria-hidden="true"></span>Interactive Display</a>
          </div>

          <div class="mega-column mega-wide">
            <p class="menu-heading">Our services</p>
            <a href="detail.html?slug=video-wall-solution"><span class="marker" aria-hidden="true"></span>Video Wall Solution</a>
            <a href="detail.html?slug=video-conferencing"><span class="marker" aria-hidden="true"></span>Video Conferencing</a>
            <a href="detail.html?slug=digital-signage-display"><span class="marker" aria-hidden="true"></span>Digital Signage Display</a>
            <a href="detail.html?slug=large-format-displays"><span class="marker" aria-hidden="true"></span>Large Format Displays</a>
            <a href="detail.html?slug=auditorium-av-solution"><span class="marker" aria-hidden="true"></span>Auditorium AV Solution</a>
          </div>

          <div class="mega-column side-offerings">
            <p class="menu-heading">Useful links</p>
            <a href="../index.html">Home</a>
            <a href="detail.html?slug=company">About us</a>
            <a href="detail.html?slug=careers">Careers</a>
            <a href="detail.html?slug=contact">Contact</a>
            <a href="detail.html?slug=catalog">Download Catalog</a>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <button class="nav-toggle" type="button" aria-expanded="false">
          Industries we serve
          <span class="chevron" aria-hidden="true"></span>
        </button>
        <div class="dropdown-menu compact-menu" aria-label="Industries menu">
          <a href="detail.html?slug=corporate">Corporate</a>
          <a href="detail.html?slug=education">Education</a>
          <a href="detail.html?slug=retail">Retail</a>
          <a href="detail.html?slug=healthcare">Healthcare</a>
          <a href="detail.html?slug=hospitality">Hospitality</a>
          <a href="detail.html?slug=public-sector">Public Sector</a>
        </div>
      </div>

      <div class="nav-item">
        <button class="nav-toggle" type="button" aria-expanded="false">
          About us
          <span class="chevron" aria-hidden="true"></span>
        </button>
        <div class="dropdown-menu about-menu" aria-label="About menu">
          <a href="detail.html?slug=company">Company</a>
          <a href="detail.html?slug=partners">Partners</a>
          <a href="detail.html?slug=investors">Investors</a>
          <a href="detail.html?slug=insights">Insights</a>
          <a href="detail.html?slug=brand">Brand</a>
          <a href="detail.html?slug=esg">Environment, Sustainability and Governance</a>
          <a href="detail.html?slug=newsroom">Newsroom</a>
          <a href="detail.html?slug=diversity-inclusion">Diversity, Equity and Inclusion</a>
        </div>
      </div>

      <div class="nav-item">
        <button class="nav-toggle" type="button" aria-expanded="false">
          Careers
          <span class="chevron" aria-hidden="true"></span>
        </button>
        <div class="dropdown-menu compact-menu" aria-label="Careers menu">
          <a href="detail.html?slug=careers">Open Roles</a>
          <a href="detail.html?slug=life-at-gprk">Life at GPRK</a>
        </div>
      </div>
    </nav>

    <div class="top-actions">
      <button class="search-button" type="button" aria-label="Search">
        <span aria-hidden="true"></span>
        Search
      </button>
      <div class="group-mark" aria-label="A Crestline Group company">
        <span class="orbit" aria-hidden="true"></span>
        <span>A Crestline<br />Group Company</span>
      </div>
      <a class="contact-button" href="detail.html?slug=contact">Contact</a>
    </div>
  </header>
`;
