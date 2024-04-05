// MOBILE NAV

let btn = document.querySelector('.mobile-nav-button')
let btn2 = document.querySelector('.mobile-nav-button__icon')
let nav = document.querySelector('.mobile-nav')
btn.addEventListener('click', function(event) {
    btn2.classList.toggle('active')
    nav.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
})

// VIDEO

let videoBtn = document.querySelector('#video-story-btn')
let videoFile = document.querySelector('#video-story')
let videoBtnIcon = document.querySelector('#video-story-btn-icon')
let videoOverlay = document.querySelector('#video-story-overlay')

videoFile.addEventListener('click', function(event) {

    function toggleOverlay(event) {
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden')
        } else {
            videoOverlay.classList.remove('hidden')
        }
    }

    if (videoFile.paused) {
        videoFile.play()
        videoBtnIcon.src = './img/story/pause-white.svg'

        videoFile.onmouseleave = toggleOverlay;
        videoFile.onmouseenter = toggleOverlay;


    } else {
        videoFile.pause()
        videoBtnIcon.src = './img/story/play-white.svg'
        videoFile.onmouseleave = null
    }
    
})