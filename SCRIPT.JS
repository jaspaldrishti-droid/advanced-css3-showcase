// ============================
// Theme Toggle
// ============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.innerHTML = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.innerHTML = "🌙";
        localStorage.setItem("theme", "dark");
    }

});

// Load Saved Theme

window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
        themeBtn.innerHTML = "☀️";
    }

});


// ============================
// Scroll Reveal Animation
// ============================

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {

            card.classList.add("show");

        }

    });

});


// ============================
// Counter Animation
// ============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    let start = 0;

    const target = +counter.getAttribute("data-target");

    const updateCounter = () => {

        const increment = target / 100;

        if (start < target) {

            start += increment;

            counter.innerText = Math.ceil(start);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// ============================
// Smooth Navigation Active Link
// ============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});