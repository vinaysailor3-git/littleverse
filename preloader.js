const preloader = document.querySelector('#site-preloader');
const preloadStartedAt = Date.now();
const minimumPreloadTime = 1050;

function finishPreloader() {
  const remaining = Math.max(0, minimumPreloadTime - (Date.now() - preloadStartedAt));
  window.setTimeout(() => {
    preloader.classList.add('is-hidden');
    window.setTimeout(() => preloader.remove(), 600);
    window.dispatchEvent(new Event('littleverse:ready'));
  }, remaining);
}

if (document.readyState === 'complete') finishPreloader();
else window.addEventListener('load', finishPreloader, { once: true });
