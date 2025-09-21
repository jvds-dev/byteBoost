const nav = document.querySelectorAll(".nav-btn");
const menuBtn = document.querySelector('.menu')
const menu = document.querySelector("header .container");

nav.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection(btn);
    });
});

const scrollToSection = (btn) => {
    const targetClass = btn.dataset.target;
    const target = document.querySelector(`.${targetClass}`);
    if (target) {
        menu.classList.remove('open')
        target.scrollIntoView({ behavior: "smooth" });
    }
};

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open")
})