function parallax(e) {
	this.querySelectorAll('.parallax').forEach(parallax=>{
		let speed = parallax.getAttribute('data-speed');
		let x = (window.innerWidth - e.pageX * speed) / 200;
		let y = (window.innerWidth - e.pageY * speed) / 200;

		parallax.style.transform = `translateX(${x}px)
									translateY(${y}px)`
	})
}

document.addEventListener('mousemove', parallax);


TweenMax.to('.title-1', 2, {
	x: 0,
	opacity: 1,
	ease: Expo.easeInOut
});

TweenMax.to('.title-2', 2, {
	delay: 0.2,
	x: -80,
	opacity: 1,
	ease: Expo.easeInOut
});

TweenMax.from('.runner', 2, {
	delay: 1.6,
	x: -80,
	opacity: 0,
	ease: Expo.easeInOut
});

TweenMax.from('.box-1', 4, {
	delay: 1,
	rotation: 200,
	transformOrigin: "50% 50%",
	opacity: 0,
	x: -100,
	ease: Expo.easeInOut
});

TweenMax.staggerFrom('.menu ul li', 2, {
	delay: 1.6,
	y: 20,
	opacity: 0,
	ease: Expo.easeInOut,
});
TweenMax.from(".cart", 2, {
            delay: 1.7,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
            });

            TweenMax.from(".content p", 2, {
            delay: 2.4,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
            });

            TweenMax.from(".content button", 2, {
            delay: 2.6,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
            });