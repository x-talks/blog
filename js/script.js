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

// Video.js Player initialisieren
var player = videojs('intro-video');

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('intro-overlay');
    const skipBtn = document.getElementById('skip-intro');

    if (overlay && skipBtn && player) {
        // Skip-Button Event
        skipBtn.addEventListener('click', () => {
            player.pause();
            overlay.classList.add('hidden');
        });

        // Video Ende Event
        player.on('ended', () => {
            overlay.classList.add('hidden');
        });
    }

    // Optional: Sections Fade-In (falls gewünscht)
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => el.style.opacity = 1);
});

/* ---------------------------
   DEFAULT: SHOW ALL SECTIONS
----------------------------*/
showCategory('all');
