document.documentElement.classList.add('motion-ready');

const revealTargets = [
  ['.intro > *', ''],
  ['.section-heading > *', ''],
  ['.program-card', ''],
  ['.story-photo', 'from-left'],
  ['.story-copy', 'from-right'],
  ['.facilities .section > *', ''],
  ['.facility-strip article', ''],
  ['.why-image', 'from-left'],
  ['.why > div:last-child', 'from-right'],
  ['.admissions > div', ''],
  ['.contact > *', '']
];

const targets = [];
revealTargets.forEach(([selector, direction]) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    element.classList.add('reveal');
    if (direction) element.classList.add(direction);
    element.style.setProperty('--reveal-delay', `${Math.min(index * 90, 360)}ms`);
    targets.push(element);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: .14, rootMargin: '0px 0px -35px' });

targets.forEach((target) => observer.observe(target));
