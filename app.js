ScrollReveal().reveal('.card-title',
    {
        delay: 500,
        easing: 'ease-in-out',
        origin: 'bottom'
    }
)

ScrollReveal().reveal('.card-text',
    {
        delay: 500,
        easing: 'ease-in-out',
        origin: 'bottom'
    }
)

ScrollReveal().reveal('.card-title.half-page',
    {
        delay: 500,
        easing: 'ease-in-out',
        origin: 'right'
    }
)

ScrollReveal().reveal('.icon-wrapper:first-child',
    {
        delay: 500,
        easing: 'ease-in-out',
        origin: 'right'
    }
)
ScrollReveal().reveal('.icon-wrapper:nth-child(2)',
    {
        delay: 900,
        easing: 'ease-in-out',
        origin: 'right'
    }
)
ScrollReveal().reveal('.icon-wrapper:last-child',
    {
        delay: 1300,
        easing: 'ease-in-out',
        origin: 'right'
    }
)



/* 
const visionaryCard = document.querySelector('.hydra-card.visionary-card.test');
let isInViewport = false;
let initialTransformValue = 60;

// Function to check if an element is in the viewport
function isTopVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top < window.innerHeight;
}

// Function to handle viewport checks
function checkViewport() {
    isInViewport = isTopVisible(visionaryCard);

    if (isInViewport) {
        const scrollSpeed = Math.max(0, window.scrollY - visionaryCard.offsetTop);
        const transformValue = initialTransformValue - scrollSpeed * 0.055;
        visionaryCard.style.transform = `rotateX(${transformValue}deg)`;
    }
}

// Function to handle scroll and check viewport
function handleScroll() {
    checkViewport();
}

// Initial check on page load
checkViewport();
window.addEventListener('scroll', handleScroll); 
*/