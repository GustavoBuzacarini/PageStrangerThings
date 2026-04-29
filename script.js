gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

//ANIMAÇÕES HERO

gsap.from(".hero", {
  opacity: 0,
  duration: 1,
});

gsap.from("picture:nth-child(2)", {
  y: 60,
  duration: 1,
});

gsap.from("picture:nth-child(1)", {
  y: -60,
  duration: 1,
});

//ANIMAÇÕES CARDS

gsap.from(".card", {
  opacity: 0,
  filter: "blur(10px)",
  y: 30,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".cards",
    markers: false,
    start: "0% 85%",
    end: "100% 70%",
    scrub: true,
  },
});

gsap.from(".secaoAgradecimento ul li", {
  opacity: 0,
  x: 20,
  filter: "blur(10px)",
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "li",
    markers: false,
    start: "0% 95%",
    end: "100% 55%",
    scrub: true,
  },
});

//ANIMAÇÕES FOOTER

gsap.from("footer", {
  y: -200,
  immediateRneder: false,
  scrollTrigger: {
    trigger: "footer",
    scrub: 2,
    start: "0% 100%",
    end: "100% 80%",
  },
});

// LETRAS ANIMADAS

const textSplit = document.querySelectorAll(".textoSplit");

textSplit.forEach((textoUnicoSplit) => {
  const split = SplitText.create(textoUnicoSplit, {
    type: ",lines words, chars",
    mask: "lines",
  });

  gsap.from(split.chars, {
    y: 40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.04,

  });
});
