function firstPageAnimation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -30,
    duration: 0.6,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  });

  tl.from(".center-part-1 h1 , .center-part-1 p", {
    x: -150,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });

  tl.from(".center-part-1 button", {
    y: 200,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  });

  tl.from(
    ".center-part-2 img",
    {
      x: 150,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.4"
  );

  tl.from(".section1bottom img", {
    x: 100,
    opacity: 0,
    stagger: 0.3,
    duration: 0.5,
    ease: "power2.out",
  });
}

function scrollBasedAnimation() {
  gsap.from(".services h1", {
    x: -100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".services",
      start: "top 80%",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.from(".services p", {
    x: 200,
    opacity: 0,
    duration: 0.6,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".services",
      start: "top 80%",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.from(".elem-part2, .part1-elem, .elem-img", {
    x: -400,
    opacity: 0,
    duration: 0.8,
    stagger: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".elem",
      start: "top 90%",
      end: "bottom top",
      scrub: 1,
    },
  });
}

function btnHoverEffects() {
  var navBtn = document.querySelector("nav button");
  navBtn.addEventListener("mouseenter", function () {
    gsap.to(navBtn, {
      color: "#111",
      backgroundColor: "#B9FF66",
      scale: 1.1,
      border: "none",
      duration: 0.3,
    });
  });

  navBtn.addEventListener("mouseleave", function () {
    gsap.to(navBtn, {
      color: "",
      backgroundColor: "",
      scale: 1,
      border: "",
      duration: 0.3,
    });
  });

  var centerBtn = document.querySelector(".center-part-1 button");
  centerBtn.addEventListener("mouseenter", function () {
    gsap.to(centerBtn, {
      color: "#111",
      backgroundColor: "#B9FF66",
      scale: 1.1,
      duration: 0.3,
    });
  });

  centerBtn.addEventListener("mouseleave", function () {
    gsap.to(centerBtn, {
      color: "",
      backgroundColor: "",
      scale: 1,
      duration: 0.3,
    });
  });
}

function scrollBasedSection3Animation() {
  gsap.from(".section3 .floating-text h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section3 .floating-text h1",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1,
    },
  });

  gsap.from(".section3 .floating-text p", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section3 .floating-text p",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1,
    },
  });

  gsap.from(".section3 .buttonget button", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section3 .buttonget button",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1,
    },
  });

  gsap.from(".section3 img", {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section3 img",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1,
    },
  });
}

function scrollBasedSection4Animation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".section4 .blackbg div").forEach((elem, i) => {
    gsap.from(elem, {
      x: i % 2 === 0 ? -200 : 200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elem,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
      },
    });
  });
}


firstPageAnimation();
scrollBasedAnimation();
btnHoverEffects();
scrollBasedSection3Animation();
scrollBasedSection4Animation();
