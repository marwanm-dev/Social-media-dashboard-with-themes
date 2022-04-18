const round = document.querySelector('.round');
//  FUNCTIONS
const loadingAnimation = () => {
  const loadingContainer = document.querySelector('.loading-container');
  const loading = document.querySelector('.loading');
  const loadingTitle = document.querySelector('.loading-title');
  const body = document.querySelector('body');
  const otherSections = document.querySelectorAll('section:not(.loading-container)');

  // Start
  body.style.overflow = 'hidden';
  loadingContainer.style.display = 'initial';
  loadingTitle.innerHTML = 'Switching Theme';
  setTimeout(() => {
    loadingContainer.style.transform = 'translateY(0%)';
    loadingContainer.style.opacity = 1;
    otherSections.forEach(section => {
      section.style.opacity = 0;
    });
    setTimeout(() => {
      loading.style.opacity = 1;
      loadingTitle.style.opacity = 1;
    }, 150);
  }, 350);

  // Finish
  setTimeout(() => {
    loading.style.opacity = 0;
    loadingTitle.style.opacity = 0;
    setTimeout(() => {
      loadingTitle.innerHTML = '';
      loadingContainer.style.transform = 'translateY(100%)';
      setTimeout(() => {
        loadingContainer.style.opacity = 0;
      }, 100);
      otherSections.forEach(section => {
        section.style.opacity = 1;
      });
      setTimeout(() => {
        loadingContainer.style.display = 'none';
        body.style.overflow = 'initial';
      }, 350);
    }, 250);
  }, 1750);
};

let currentTheme = null;
const switchToDark = () => {
  loadingAnimation();
  setTimeout(() => {
    currentTheme = 'dark';
    root.classList.add('darkTheme');
    round.style.marginLeft = '5px';
  }, 2250);
};
const switchToLight = () => {
  loadingAnimation();
  setTimeout(() => {
    currentTheme = 'light';
    root.classList.remove('darkTheme');
    round.style.marginLeft = '45px';
  }, 2250);
};

const root = document.documentElement;
const useDark = window.matchMedia('(prefers-color-scheme: dark)');
const checkTheme = () => {
  if (useDark.matches) {
    switchToDark();
  } else {
    switchToLight();
  }
};
window.onload = checkTheme;

const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', () => {
  if (currentTheme == 'dark') {
    switchToLight();
  } else if (currentTheme == 'light') {
    switchToDark();
  }
});
