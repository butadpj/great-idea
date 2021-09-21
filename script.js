const navLinks = document.querySelector('.nav__links');

const navToggle = () => {
  document.querySelector('.area__open').addEventListener('click', () => {
    navLinks.classList.add('nav__links--show');
    document.querySelector('.area__open').classList.add('area__open--hide');
    document.querySelector('.area__close').classList.add('area__close--show');
  });

  document.querySelector('.area__close').addEventListener('click', () => {
    navLinks.classList.remove('nav__links--show');
    document.querySelector('.area__open').classList.remove('area__open--hide');
    document
      .querySelector('.area__close')
      .classList.remove('area__close--show');
  });
};

navToggle();
