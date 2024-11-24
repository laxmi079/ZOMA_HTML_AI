// JavaScript for interaction

// Highlight search input on focus
const searchInput = document.querySelector('main input');
searchInput.addEventListener('focus', () => {
  searchInput.style.border = '2px solid red';
});
searchInput.addEventListener('blur', () => {
  searchInput.style.border = 'none';
});

// Smooth scrolling for header links
const headerLinks = document.querySelectorAll('header ul li a');
headerLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});
