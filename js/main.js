const nav = document.querySelectorAll(".nav-btn");

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
        target.scrollIntoView({ behavior: "smooth" });
    }
};
