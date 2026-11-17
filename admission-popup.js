const admissionModal = document.querySelector('#admission-modal');
const admissionCloseControls = document.querySelectorAll('[data-close-modal]');
const admissionCta = document.querySelector('[data-admission-cta]');
const popupSeenKey = 'littleverse-admission-popup-seen';

function closeAdmissionPopup() {
  admissionModal.classList.remove('is-open');
  admissionModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function openAdmissionPopup() {
  admissionModal.classList.add('is-open');
  admissionModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  admissionModal.querySelector('.admission-modal__close').focus();
}

if (!sessionStorage.getItem(popupSeenKey)) {
  window.addEventListener('littleverse:ready', () => {
    window.setTimeout(() => {
      openAdmissionPopup();
      sessionStorage.setItem(popupSeenKey, 'true');
    }, 450);
  }, { once: true });
}

admissionCloseControls.forEach((control) => control.addEventListener('click', closeAdmissionPopup));
admissionCta.addEventListener('click', closeAdmissionPopup);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && admissionModal.classList.contains('is-open')) closeAdmissionPopup();
});
