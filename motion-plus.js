const magicBackground = document.createElement('div');
magicBackground.className = 'magic-background';
magicBackground.setAttribute('aria-hidden', 'true');

const particleSymbols = ['✦', '●', '✿', '✧', '•', '☀', '♡', '✦', '●', '✿', '✧', '•'];
const particleColors = ['#3478C8', '#8874CE', '#FFC94A', '#A6C96A', '#F5A9C1'];

particleSymbols.forEach((symbol, index) => {
  const particle = document.createElement('span');
  particle.className = 'magic-particle';
  particle.textContent = symbol;
  particle.style.cssText = [
    `left:${(index * 17 + 4) % 96}%`,
    `top:${(index * 29 + 7) % 94}%`,
    `--size:${12 + (index % 4) * 8}px`,
    `--particle-color:${particleColors[index % particleColors.length]}`,
    `--speed:${7 + (index % 5) * 1.6}s`,
    `--delay:-${index * .9}s`,
    `--move-x:${index % 2 ? 34 : -34}px`,
    `--move-y:${index % 3 ? -55 : 48}px`
  ].join(';');
  magicBackground.appendChild(particle);
});

document.body.prepend(magicBackground);

// A gentle depth response: hero artwork follows scrolling only, no cursor tracking.
const heroArt = document.querySelector('.hero-visual');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
window.addEventListener('scroll', () => {
  if (reduceMotion.matches || !heroArt) return;
  const offset = Math.min(window.scrollY * .045, 28);
  heroArt.style.translate = `0 ${offset}px`;
}, { passive: true });
