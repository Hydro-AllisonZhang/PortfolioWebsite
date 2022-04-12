const faders = document.querySelectorAll(".fade-in");

const sliders = document.querySelectorAll(".slide-in");

const fadeOptions = {
  threshold: 1,
  rootMargin: "0px -100px 0px 0px",
};

const slideOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px 0px 0px",
};

const fadeOnScroll = new IntersectionObserver(function (entries, fadeOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(entry.target);
      entry.target.classList.add("fade");
      fadeOnScroll.unobserve(entry.target);
    }
  });
}, fadeOptions);

const slideOnScroll = new IntersectionObserver(function (
  entries,
  slideOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(entry.target);
      entry.target.classList.add("slide");
      slideOnScroll.unobserve(entry.target);
    }
  });
},
slideOptions);

faders.forEach((fader) => {
  fadeOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  slideOnScroll.observe(slider);
});
