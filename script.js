// Highlight nav link depending on current section in view
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let currentSectionId = '';
  let scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Support keyboard toggling for hamburger for accessibility
hamburger.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    navMenu.classList.toggle('show');
  }
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
    }
  });
});

// Simple contact form submit simulation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

// Animated rotating words on home page
const animatedText = document.getElementById('animatedText');
const words = [
  "I'm a Web Developer",
  "I'm an IoT Developer",
  "I'm a Prompt Engineer",
  "I'm a Backend Developer",
];

let wordIndex = 0;

function showWord() {
  animatedText.style.opacity = 0;
  setTimeout(() => {
    animatedText.textContent = words[wordIndex];
    animatedText.style.opacity = 1;
    wordIndex = (wordIndex + 1) % words.length;
  }, 500);
}

showWord();
setInterval(showWord, 2000);

// Typing animation for about section
const aboutText = `Hello! I am Mansoon Mohanty from Cuttack, Odisha (INDIA). 
I have completed my Diploma in CSE in Suddhananda Residential Polytechnique. 
I have completed my B'Tech in CSE in Synergy Institute of Technology. 
So, I have more than 5 years of experience in Computer Science and Engineering. 
Interested in core subjects like OOPs, OS, DS, Networking, DBMS, Software Engineering, etc...

I am a Web Developer, Backend Developer, Prompt Engineer, and IoT Developer. 
I have built projects regarding frontend and backend as well as have prior experience with Programming Languages like PHP, Python, Core Java, and JavaScript. 
Building websites is my passion.`;

const aboutParagraph = document.getElementById('aboutText');
let index = 0;

function typeText() {
  if (index < aboutText.length) {
    aboutParagraph.innerHTML += aboutText.charAt(index) === '\n' ? '<br>' : aboutText.charAt(index);
    index++;
    setTimeout(typeText, 30); // typing speed
  }
}

typeText();
