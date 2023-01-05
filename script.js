const hamburger = document.querySelector('.nav-hamburger');
const navbar = document.querySelector('nav')
const navLogo = document.querySelector('.nav-logo')
const navLinks = document.querySelector('.nav-links');
const navSocials = document.querySelector('.nav-socials')
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  navLogo.classList.toggle('active');
  navLinks.classList.toggle('active');
  navSocials.classList.toggle('active');
  bar1.classList.toggle('active')
  bar2.classList.toggle('active')
  bar3.classList.toggle('active')
})

