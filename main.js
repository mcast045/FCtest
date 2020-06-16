let video = document.querySelector('.landing-video__content')
if (video) {
    video.src = 'my_video_' + value + '.ogg';
    video.load();
}


window.Reveal = ScrollReveal()
Reveal.reveal('.zoomIn', { duration: 1500, scale: 0 })
Reveal.reveal('.left-reveal', { distance: '400px', duration: 1500, origin: 'left' })
Reveal.reveal('.bottom-reveal', { distance: '400px', duration: 1500, origin: 'bottom' })
Reveal.reveal('.right-reveal', { distance: '400px', duration: 1500, origin: 'right' })