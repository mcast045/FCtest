let video = document.querySelector('.landing-video__content')

video.addEventListener('loadeddata', function () {
    // Video is loaded and can be played
}, false);


window.Reveal = ScrollReveal()
Reveal.reveal('.zoomIn', { duration: 1500, scale: 0 })
Reveal.reveal('.left-reveal', { distance: '400px', duration: 1500, origin: 'left' })
Reveal.reveal('.bottom-reveal', { distance: '400px', duration: 1500, origin: 'bottom' })
Reveal.reveal('.right-reveal', { distance: '400px', duration: 1500, origin: 'right' })