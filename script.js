const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".section, .card, .cta").forEach(el => {
    el.classList.add("hidden");
    obs.observe(el);
});


// ================================
// NAVBAR COLOR CHANGE
// ================================

const navbar = document.getElementById("navbar");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    if(window.scrollY > hero.offsetHeight - 80){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});


// ================================
// HAMBURGER MENU
// ================================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if(hamburger){
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
}


// ================================
// SCROLL TO TOP
// ================================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if(window.scrollY > 400){
        scrollBtn.classList.add("show");
    }else{
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
});
// ================================
// FAQ ACCORDION
// ================================

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
        // Close all other items
        accordionItems.forEach(acc => {
            if (acc !== item) {
                acc.classList.remove("active");
            }
        });

        // Toggle the clicked item
        item.classList.toggle("active");
    });
});
