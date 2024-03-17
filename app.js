/* 
window.addEventListener('resize', function () {
    var screenWidth = window.innerWidth;
    var hydraCard = document.querySelector('.hydra-card');

    if (screenWidth < 2000) {
        // Remove the specified data attributes
        hydraCard.removeAttribute('data-tilt');
        hydraCard.removeAttribute('data-tilt-max');
        hydraCard.removeAttribute('data-tilt-reverse');
        hydraCard.removeAttribute('data-tilt-glare');
        hydraCard.removeAttribute('data-tilt-max-glare');
        hydraCard.removeAttribute('data-tilt-full-page-listening');
    } else {
        // Restore the data attributes if the screen width is greater than or equal to 765px
        hydraCard.setAttribute('data-tilt', '');
        hydraCard.setAttribute('data-tilt-max', '8');
        hydraCard.setAttribute('data-tilt-reverse', 'true');
        hydraCard.setAttribute('data-tilt-glare', '');
        hydraCard.setAttribute('data-tilt-max-glare', '0.2');
        hydraCard.setAttribute('data-tilt-full-page-listening', '');
    }
});

// Trigger the resize event initially to apply the changes when the page loads
window.dispatchEvent(new Event('resize'));

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const tiltElement = document.querySelector('.hydra-card.visionary-card');

    // Tilt the element when scrolling
    if (scrollTop > 1300) { // Adjust the scroll threshold as needed
        tiltElement.classList.add('tilted');
    } else {
        tiltElement.classList.remove('tilted');
    }
});
 */