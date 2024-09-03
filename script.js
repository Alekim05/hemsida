// Smooth scrolling and section highlighting

// Get all navigation links and sections
const navLinks = document.querySelectorAll('header nav ul li a');
const sections = document.querySelectorAll('section');

// Function to highlight active section link
function highlightSection() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section, index) => {
        if (scrollPosition >= section.offsetTop - 60 && scrollPosition < section.offsetTop + section.offsetHeight - 60) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
}

// Smooth scroll to section on click
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight the section on scroll
window.addEventListener('scroll', highlightSection);

// Initially highlight the correct section on page load
highlightSection();

// Fade-in animation for cards

const cards = document.querySelectorAll('.services-section .card');

function checkCards() {
    let triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', checkCards);

// Initially check card positions
checkCards();

// JavaScript to handle header visibility on scroll
const header = document.querySelector('header');

function handleScroll() {
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Listen to scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case of direct access to the page
handleScroll();

// Array of phrases to type out
const phrases = ["SEO Experts", "SEM Strategists", "Social Media Gurus", "Front End Developers", "Full Stack Marketing Agency"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

const typedTextElement = document.getElementById("typed-text");

function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    let displayedText = "";

    if (isDeleting) {
        displayedText = currentPhrase.substring(0, currentCharIndex--);
    } else {
        displayedText = currentPhrase.substring(0, currentCharIndex++);
    }

    typedTextElement.textContent = displayedText;

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // Pause after typing the phrase
        setTimeout(() => {
            isDeleting = true;
        }, 1500);
    } else if (isDeleting && currentCharIndex === 0) {
        // Move to the next phrase
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        isDeleting = false;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

// Start typing animation
type();