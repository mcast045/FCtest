let video = document.querySelector('.landing-video__content')
window.Reveal = ScrollReveal()

Reveal.reveal('.zoomIn', { duration: 1500, scale: 0 })

if (window.screen.width > 999) {
    Reveal.reveal('.left-reveal', { distance: '400px', duration: 1500, origin: 'left' })
    Reveal.reveal('.bottom-reveal', { distance: '400px', duration: 1500, origin: 'bottom' })
    Reveal.reveal('.right-reveal', { distance: '400px', duration: 1500, origin: 'right' })
}