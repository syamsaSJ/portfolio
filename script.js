const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  // Tukar icon hamburger ↔ X
  menuBtn.innerHTML = mobileMenu.classList.contains("hidden")
    ? `<i class="fa-solid fa-bars"></i>`
    : `<i class="fa-solid fa-xmark"></i>`;
});

/* Spotlight Move */
document.addEventListener("mousemove", (e) => {
  spotlight.style.clipPath = `circle(160px at ${e.clientX}px ${e.clientY}px)`;
});

/* Reveal On Scroll */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add("visible");
  });
});

// Tabs Logic
const tabButtons = document.querySelectorAll(".tab-btn");
const skillsTab = document.getElementById("skills-tab");
const toolsTab = document.getElementById("tools-tab");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Reset all buttons
    tabButtons.forEach((b) => {
      b.classList.remove("bg-cyan-400/20", "text-cyan-200");
      b.classList.add("bg-white/5", "text-gray-200");
    });

    // Highlight active button
    btn.classList.add("bg-cyan-400/20", "text-cyan-200");
    btn.classList.remove("bg-white/5", "text-gray-200");

    // Show tab content
    const tab = btn.dataset.tab;
    if (tab === "skills") {
      skillsTab.classList.remove("hidden");
      toolsTab.classList.add("hidden");
    } else {
      skillsTab.classList.add("hidden");
      toolsTab.classList.remove("hidden");
    }
  });
});

// Project Data
const projectsData = {
  website: [
    {
      title: "Point of Sale Web",
      desc: "POS system for sales & inventory management.",
      img: "img/nakopipos.png",
      link: "#",
    },
    {
      title: "Management Information System",
      desc: "A web platform for a sales & inventory web system for a coffee supplier.",
      img: "img/butikkopi.png",
      link: "#",
    },
    {
      title: "Cafe Explorer on Purwokerto",
      desc: "Web app to search and view cafe details in Purwokerto.",
      img: "img/cafeexploreronpwt.png",
      link: "https://cafeexploreronpwt.netlify.app/",
    },
    {
      title: "BlueSoul Web",
      desc: "A web platform for anonymous emotional sharing and song recommendations.",
      img: "img/bluesoul.png",
      link: "https://bluesoul.wuaze.com/",
    },
    {
      title: "SkillPath Web",
      desc: "A platform to learn and practice with interactive levels.",
      img: "img/skillpath.png",
      link: "https://skillpath.wuaze.com/",
    },
    {
      title: "StrataAcademy Web",
      desc: "A medical learning platform designed to help students understand clinical concepts and scientific research in depth.",
      img: "img/stratacademy.png",
      link: "https://stratacademy.my.id/",
    },
  ],
  uiux: [
    {
      title: "Cafe Explorer on Purwokerto UI/UX",
      desc: "UI/UX design mockup for Cafe Explorer on Purwokerto Web app.",
      img: "img/designCafeExplorer.png",
      link: "#",
    },
    {
      title: "Point of Sale UI/UX",
      desc: "UI/UX design mockup for Point of Sale Web.",
      img: "img/designnakopipos.png",
      link: "#",
    },
    {
      title: "Management Information System UI/UX",
      desc: "UI/UX design mockup for Management Information System.",
      img: "img/cafeexplorer_uiux.png",
      link: "#",
    },
  ],
  another: [
    {
      title: "Redesign Website SatriaTech",
      desc: "A web platform for IT consultancy & software development based in Indonesia.",
      img: "img/satriatech.png",
      link: "https://satriatech.com/",
    },
  ],
};

let currentTab = "website";
let index = 0;

const card = document.getElementById("project-card");
const title = document.getElementById("project-title");
const desc = document.getElementById("project-desc");
const image = document.getElementById("project-image");
const link = document.getElementById("project-link");

// Show project
function showProject() {
  const project = projectsData[currentTab][index];
  card.classList.add("opacity-0", "translate-y-4");
  setTimeout(() => {
    title.textContent = project.title;
    desc.textContent = project.desc;
    image.src = project.img;
    link.href = project.link;
    card.classList.remove("opacity-0", "translate-y-4");
  }, 300);
}

// Next / Prev buttons
document.getElementById("next-project").onclick = () => {
  index = (index + 1) % projectsData[currentTab].length;
  showProject();
};
document.getElementById("prev-project").onclick = () => {
  index = (index - 1 + projectsData[currentTab].length) % projectsData[currentTab].length;
  showProject();
};

// Tabs Logic
const projectTabBtns = document.querySelectorAll(".project-tab-btn");
projectTabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Reset buttons
    projectTabBtns.forEach((b) => {
      b.classList.remove("bg-cyan-400/20", "text-cyan-200");
      b.classList.add("bg-white/5", "text-gray-200");
    });
    // Highlight active
    btn.classList.add("bg-cyan-400/20", "text-cyan-200");
    btn.classList.remove("bg-white/5", "text-gray-200");

    // Change tab
    currentTab = btn.dataset.tab;
    index = 0; // reset index
    showProject();
  });
});

// Auto switch every 5s
setInterval(() => {
  index = (index + 1) % projectsData[currentTab].length;
  showProject();
}, 10000);

// Initial load
window.addEventListener("load", showProject);
