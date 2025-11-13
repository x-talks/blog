/* ---------------------------
   SECTION / SUBCATEGORY TOGGLES
----------------------------*/
function showCategory(category) {
  const sections = {
    'blog': document.getElementById('blog-section'),
    'podcast': document.getElementById('podcast-section'),
    'youtube': document.getElementById('youtube-section'),
    'references': document.getElementById('references-section'),
    'about-me': document.getElementById('about-me-section')
  };
  if (category === 'all') {
    for (let key in sections) sections[key].style.display = 'block';
  } else {
    for (let key in sections) {
      sections[key].style.display = (key === category) ? 'block' : 'none';
    }
  }
}

function toggleSection(headerElem) {
  const subcats = headerElem.parentElement.querySelectorAll('.subcategory');
  subcats.forEach(sc => sc.style.display = (sc.style.display === 'block') ? 'none' : 'block');
}
function toggleSubcategory(subHeader) {
  const format = subHeader.nextElementSibling;
  if (!format) return;
  format.style.display = (format.style.display === 'block') ? 'none' : 'block';
}
function toggleFormat(formatHeader) {
  const episodes = formatHeader.nextElementSibling;
  if (!episodes) return;
  episodes.style.display = (episodes.style.display === 'block') ? 'none' : 'block';
}
function toggleEpisode(epHeader) {
  const text = epHeader.nextElementSibling;
  if (!text) return;
  text.style.display = (text.style.display === 'block') ? 'none' : 'block';
}

/* ---------------------------
   SMOOTH SCROLL NAVIGATION
----------------------------*/
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = link.getAttribute('onclick')?.match(/'(.+)'/);
    if (sectionId) {
      const section = document.getElementById(sectionId[1] + '-section');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ---------------------------
   FADE-IN ON SCROLL
----------------------------*/
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) el.style.opacity = 1;
  });
});

/* ---------------------------
   INTRO VIDEO MODAL
----------------------------*/
const overlay = document.getElementById('intro-overlay');
const skipBtn = document.getElementById('skip-intro');
if (overlay && skipBtn) {
  skipBtn.addEventListener('click', () => overlay.style.display = 'none');
  const video = document.getElementById('intro-video');
  video.addEventListener('ended', () => overlay.style.display = 'none');
}

/* ---------------------------
   DEFAULT: SHOW ALL SECTIONS
----------------------------*/
showCategory('all');
