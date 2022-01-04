import gsap from "./node_modules/gsap/gsap-core.js";

gsap.registerPlugin(ScrollTrigger);


/*** Different ScrollTrigger setups that respect motion preferences ***/
ScrollTrigger.matchMedia({

	// no motion preferences - go wild!
	"(prefers-reduced-motion: no-preference)": function () {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore. 
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".smile",
				scrub: 1,
				end: "200%",
				pin: true,
				start: 'center center',
				end: 'bottom 20%',
			}
		});
		tl.to(".smile", { scale: 2, rotation: 360 })
			.to(".smile", { scale: 1 });
	},

	//  option with less problematic motion for people with vestibular disorders and motion sensitivities   
	"(prefers-reduced-motion: reduce)": function () {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore. 
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".smile",
				scrub: 1,
				end: "200%",
				pin: true,
				start: 'center center',
				end: 'bottom 20%',
			}
		});
		tl.to(".smile", { opacity: 0.1 })
			.to(".smile", { opacity: 1 });
	},
});

