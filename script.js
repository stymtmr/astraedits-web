// ===== AstraEdits — interactions =====
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const hamb = document.querySelector('.hamb');
  const links = document.querySelector('.nav-links');
  if (hamb && links) {
    hamb.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Animated stat counters
  const counters = document.querySelectorAll('[data-count]');
  const cIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.count, suffix = el.dataset.suffix || '';
      let cur = 0; const step = Math.max(1, target / 60);
      const tick = () => { cur += step; if (cur >= target) { el.textContent = target + suffix; } else { el.textContent = Math.floor(cur) + suffix; requestAnimationFrame(tick); } };
      tick(); cIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => cIO.observe(el));

  // Portfolio filters
  const filters = document.querySelectorAll('.filter');
  const reels = document.querySelectorAll('.reel');
  filters.forEach(f => f.addEventListener('click', () => {
    filters.forEach(x => x.classList.remove('active'));
    f.classList.add('active');
    const cat = f.dataset.cat;
    reels.forEach(r => {
      const show = cat === 'all' || r.dataset.cat === cat;
      r.style.display = show ? '' : 'none';
    });
  }));

  // Lazy-load YouTube embed on click (keeps page fast)
  document.querySelectorAll('.reel[data-yt]').forEach(reel => {
    reel.addEventListener('click', () => {
      if (reel.dataset.loaded) return;
      const id = reel.dataset.yt;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      reel.appendChild(iframe);
      reel.dataset.loaded = '1';
    });
  });
});
