const navLinks = document.querySelector('.nav__links');
const openIcon = document.querySelector('.area__open');
const closeIcon = document.querySelector('.area__close');

const navToggle = () => {
  openIcon.addEventListener('click', () => {
    navLinks.classList.add('nav__links--show'); // Show Nav Links
    openIcon.classList.add('area__open--hide'); // Hide "open icon"
    closeIcon.classList.add('area__close--show'); // Show "close icon"
  });

  closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('nav__links--show'); // Hide Nav Links
    openIcon.classList.remove('area__open--hide'); // Show "open icon"
    closeIcon.classList.remove('area__close--show'); // Hide "close icon"
  });
};

navToggle();
