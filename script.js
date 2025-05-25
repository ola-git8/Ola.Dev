// toggle between light and dark mode
const body = document.body;
const toggleBtn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

const setTheme = (dark) => {
    body.classList.toggle('dark-mode', dark);
    toggleBtn.classList.replace(dark ? 'btn-light' : 'btn-dark', dark ? 'btn-dark' : 'btn-light');
    icon.setAttribute('class', dark ? 'bi bi-sun' : 'bi bi-moon');
    icon.innerHTML = dark
        ? '<path d="M8 4.5a.5.5 0 0 1 .5.5v1.5h1.5a.5.5 0 0 1 0 1H8.5V9.5a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5a.5.5 0 0 1 .5-.5z"/>'
        : '<path d="M6 0a7 7 0 0 0 0 14c3.866 0 7-3.134 7-7 0-.265-.015-.527-.043-.786A6.978 6.978 0 0 1 6 0zm0 1a6 6 0 0 1 5.917 5.007A7.001 7.001 0 0 0 6 13a6 6 0 0 1 0-12z"/>';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
};

setTheme(localStorage.getItem('theme') === 'dark');
toggleBtn.addEventListener('click', () => setTheme(!body.classList.contains('dark-mode')));

// Navbar scroll effect
const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

  // GSAP Hero Timeline + Loader removal
    window.addEventListener("load", () => {
      // Hide loader after everything loads
      const loader = document.getElementById("loader");
      loader.style.opacity = 0;
      setTimeout(() => loader.style.display = "none", 500);

      // Animate Hero section
      let tl = gsap.timeline({
        defaults: { opacity: 0, ease: "back.inOut(3)" }
      });

      tl.from(".hero", { opacity: 0, ease: "linear", autoAlpha: 0 })
        .from(".hero-title", { x: 80, duration: 1 })
        .from(".hero-subtitle", { x: -80, duration: 1 }, "<")
        .from("#cta-btn", { y: 30, duration: 1 });
    });
    
    // GSAP ScrollTrigger for Services section
    gsap.registerPlugin(ScrollTrigger);


    

    // about section gsap
    let about = gsap.timeline({
      scrollTrigger:{
        trigger: "#about",
        start: "top 70%",
        toggleActions: "restart none restart none",
      }
    })

     about.from(".about-title", {
      x: 20,
      opacity: 0,
      duration: 1
    }, "<+=0.1")

    .from(".about-box", {
  y: 20,
  opacity: 0,
  duration: 1
})
    
    .from(".about-img", {
      scale: 0.8,
      rotation: 45,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    }, "<+=0.1")

   .from(".about-text", {
      y:20,
    opacity: 0,
      duration: 1,
    }, "<+=0.1");
  
// Skill gsap
let skills = gsap.timeline({
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%", 
    toggleActions: "restart none restart none",
  }
});

skills.from(".skills-title", {
  x: -70,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "<+=0.1")
.from(".skill-card", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "back.out(1.7)"
}, "-=1");


let contact = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    toggleActions: "restart none restart none",
  }
})

contact.from(".contact-title", {
  x: 70,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "<+=0.1")


.from(".contact-link", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "back.out(1.7)"
})

// change yearly
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;
