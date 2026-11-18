const admissionModal = document.querySelector('#admission-modal');
const admissionCloseControls = document.querySelectorAll('[data-close-modal]');
const admissionCta = document.querySelector('[data-admission-cta]');

function closeAdmissionPopup() {
  if (!admissionModal) return;
  admissionModal.classList.remove('is-open');
  admissionModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function openAdmissionPopup() {
  if (!admissionModal) return;
  admissionModal.classList.add('is-open');
  admissionModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const closeBtn = admissionModal.querySelector('.admission-modal__close');
  if (closeBtn) {
    try { closeBtn.focus(); } catch (e) {}
  }
}

// Ensure the popup appears reliably on mobile, desktop, and reloads
let popupTriggered = false;
function triggerAdmissionPopup() {
  if (popupTriggered) return;
  popupTriggered = true;
  openAdmissionPopup();
}

if (window.littleverseReady) {
  window.setTimeout(triggerAdmissionPopup, 300);
} else {
  window.addEventListener('littleverse:ready', () => {
    window.setTimeout(triggerAdmissionPopup, 300);
  }, { once: true });

  // Fallback timer ensures the popup shows even if preloader is skipped or delayed
  window.setTimeout(triggerAdmissionPopup, 1600);
}

// Allow user to also trigger admission popup by clicking on any link with href="#admissions"
document.querySelectorAll('a[href="#admissions"]').forEach((link) => {
  link.addEventListener('click', () => {
    window.setTimeout(openAdmissionPopup, 100);
  });
});

admissionCloseControls.forEach((control) => control.addEventListener('click', closeAdmissionPopup));
if (admissionCta) admissionCta.addEventListener('click', closeAdmissionPopup);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && admissionModal && admissionModal.classList.contains('is-open')) {
    closeAdmissionPopup();
  }
});
