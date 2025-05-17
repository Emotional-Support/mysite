const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

const imgs = document.getElementsByClassName("carousel__imgs");
const btn_left = document.getElementById("image__left");
const btn_right = document.getElementById("image__right");

let currentIndex = 0;

// Hide all but the first image
for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = i === 0 ? "block" : "none";
}

// Initial button state
updateButtons();

btn_left.addEventListener("click", () => {
    if (currentIndex > 0) {
        imgs[currentIndex].style.display = "none";
        currentIndex--;
        imgs[currentIndex].style.display = "block";
        updateButtons();
    }
});

btn_right.addEventListener("click", () => {
    if (currentIndex < imgs.length - 1) {
        imgs[currentIndex].style.display = "none";
        currentIndex++;
        imgs[currentIndex].style.display = "block";
        updateButtons();
    }
});

// Button state management
function updateButtons() {
    btn_left.disabled = currentIndex === 0;
    btn_right.disabled = currentIndex === imgs.length - 1;
}
