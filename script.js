gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

ScrollSmoother.create({
    smooth: 1.5,
    effects: true
})


//ANIMAÇÕES HERO

gsap.from(".hero", {
    opacity: 0,
    duration: 1
})

gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1
})

gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1
})

//ANIMAÇÕES CARDS

gsap.from(".card", {
    opacity: 0,
    filter: "blur(10px)",   
    y: 30,
    stagger: .4,
    scrollTrigger: {
        trigger: ".cards",
        markers: false,
        start: "0% 85%",
        end: "100% 70%",
        scrub: true
    }
})