var tl = gsap.timeline();


tl.from('.section', {
    stagger: .3,
    width: 0,
    duration: 2,
    opacity: 0,
    ease: 'Expo.easeInOut'
}).from('nav a', {
    stagger: .1,
    x: 30,
    duration: 1.5,
    opacity: 0,
    ease: 'Expo.easeInOut'
}, '-=1')
.from('#circle', {
    rotate: '90deg',
    opacity: 0,
    ease: 'Expo.easeInOut',
    duration: 2
}, '-=2')
.from('#vsmcircle', {
    rotate: '-90deg',
    ease: 'Expo.easeInOut',
    duration: 2
}, '-=1.5')
.from('#vsmcircle i', {
    opacity: 0,
    scale: .6,
    ease: 'Expo.easeInOut',
    duration: 1
}, '-=.5')
.from('#circle img', {
    y: '800',
    ease: 'Expo.easeInOut',
    duration: 1.5
}, '-=1')
.from('.rtem', {
    opacity: 0,
    stagger: .2,
    y: 60, 
    duration: 3,
    ease: 'Expo.easeInOut'
}, '-=3')