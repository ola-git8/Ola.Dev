const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const navCollapseElement = document.getElementById("primary-navigation");
if (navCollapseElement && window.bootstrap?.Collapse) {
  const navCollapse = window.bootstrap.Collapse.getOrCreateInstance(
    navCollapseElement,
    { toggle: false },
  );
  const menuToggle = document.querySelector(".menu-toggle");
  let closeAfterExpand = false;

  const hideMobileMenu = () => {
    if (!window.matchMedia("(max-width: 767.98px)").matches) return;
    if (navCollapseElement.classList.contains("collapsing")) {
      if (menuToggle?.getAttribute("aria-expanded") === "true")
        closeAfterExpand = true;
      return;
    }
    navCollapse.hide();
  };

  navCollapseElement.addEventListener("shown.bs.collapse", () => {
    if (closeAfterExpand) {
      closeAfterExpand = false;
      navCollapse.hide();
    }
  });

  navCollapseElement.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", hideMobileMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideMobileMenu();
  });
}

const reveals = document.querySelectorAll(".reveal, .project-card");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("visible"));
}
