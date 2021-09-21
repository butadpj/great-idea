const navArea = document.querySelector('.nav__area');

const navToggle = () => {
  document.querySelector('.area__open').addEventListener('click', () => {
    navArea.classList.add('nav__area--show');
    navArea.classList.remove('nav__area--hide');
  });

  document.querySelector('.area__close').addEventListener('click', () => {
    navArea.classList.remove('nav__area--show');
    navArea.classList.add('nav__area--hide');
  });
};

navToggle();
