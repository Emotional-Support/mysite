const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
let stories = [["2012-2017", "Where it all started. I got my hands on my first ever Desktop and used Windows for the first time."], ["2018-2021", "My introduction to coding and html/css in school. Completely hated it from day 1."], ["2022-2024", "Tried learning my first language, Python, before everyone else in school. Thought I'd try and get ahead while i could. Definitely changed my life. Learnt everything I could then got cocky and didn't bother trying to expand my stack."], ["2025-Present", "Finally started learning HTML/CSS/JS for real, partially to prep for college, partially because I was slacking off too much."], ["The Future", "No idea what's yet to come, but I hope it all pays off in the end."]];

const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);
menuLinks.addEventListener("click", () => {
    menu.classList.remove("is-active");
    menuLinks.classList.remove("active");
});


const imgs = document.getElementsByClassName("carousel__photo");
const btn_left = document.getElementById("left-arrow");
const btn_right = document.getElementById("right-arrow");

let cIndex = 0;

for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].width > imgs[i].height) {
        imgs[i].classList.add("rotate");
    }

    imgs[i].style.display = i === 0 ? "block" : "none";
}
updateButtons();

btn_left.addEventListener("click", () => {
    if (cIndex > 0) {
        imgs[cIndex].style.display = "none";
        cIndex--;
        imgs[cIndex].style.display = "block";
        updateButtons();
    }
});

btn_right.addEventListener("click", () => {
    if (cIndex < imgs.length - 1) {
        imgs[cIndex].style.display = "none";
        cIndex++;
        imgs[cIndex].style.display = "block";
        updateButtons();
    }
});

function updateButtons() {
    btn_left.disabled = cIndex === 0;
    btn_right.disabled = cIndex === imgs.length - 1;
}
const path = document.getElementById('timelinePath');
const dot = document.getElementById('movingDot');


const dates = document.getElementsByClassName("time");
const totalPoints = 5;
const totalLength = path.getTotalLength();

const points = Array.from({ length: totalPoints }, (_, i) =>
    path.getPointAtLength((i / (totalPoints - 1)) * totalLength)
);

let currentIndex = 0;

const updateTextShadow = (forward) => {
    const currDate = dates[currentIndex];
    currDate.setAttribute("fill", "red");
    // currDate.style.textShadow = "#FFFECE 0px 0px 3px";
    if (forward) {
        dates[currentIndex - 1].style.textShadow = "none";
        dates[currentIndex - 1].setAttribute("fill", "white");
    }
    else {
        dates[currentIndex + 1].style.textShadow = "none";
        dates[currentIndex + 1].setAttribute("fill", "white");
    }

}

const updateStory = () => {
    let currentStory = stories[currentIndex];

    let title = document.getElementById("project__title");
    let para = document.getElementById("project__info");

    title.textContent = currentStory[0];
    para.textContent = currentStory[1];
}

function updateDot() {
    const point = points[currentIndex];
    dot.setAttribute("cx", point.x);
    dot.setAttribute("cy", point.y);
}

function moveToNextPoint() {
    if (currentIndex < points.length - 1) {
        currentIndex++;
        updateDot();
        updateStory();
        updateTextShadow(true);
    }
}

function moveToPrevPoint() {
    if (currentIndex > 0) {
        currentIndex--;
        updateDot();
        updateStory();
        updateTextShadow(false);
    }
}

updateDot();
updateStory();
updateTextShadow()

const bar = document.querySelector('.stk__bar');
bar.innerHTML += bar.innerHTML;

const stk = document.querySelector('.tape__text');
stk.innerHTML += stk.innerHTML;

let flip = document.getElementById("flip__btn1");
let flip2 = document.getElementById("flip__btn2");
let flip_box = document.getElementById("proj__textbox_flip")
flip.addEventListener("click", () => { flip_box.classList.toggle("activeFlip") });
flip2.addEventListener("click", () => { flip_box.classList.toggle("activeFlip") });


const slider__boxes = document.getElementsByClassName("slider__flip");
let in_focus = 0;

let p_btn = document.getElementById("prevBtn");
let n_btn = document.getElementById("nextBtn");

const updateVisibility = () => {
    for (let bx of slider__boxes) {
        if (bx.classList.contains("in-focus")) {
            bx.style.display = "block";
        } else {
            bx.style.display = "none";
        }
    }

    p_btn.disabled = in_focus <= 0;
    n_btn.disabled = in_focus >= slider__boxes.length - 1;
};

const updateFocusRight = () => {
    if (in_focus < slider__boxes.length - 1) {
        slider__boxes[in_focus].classList.remove("in-focus");
        in_focus++;
        slider__boxes[in_focus].classList.add("in-focus");
        updateVisibility();
    }
};

const updateFocusLeft = () => {
    if (in_focus > 0) {
        slider__boxes[in_focus].classList.remove("in-focus");
        in_focus--;
        slider__boxes[in_focus].classList.add("in-focus");
        updateVisibility();
    }
};

p_btn.addEventListener("click", updateFocusLeft);
n_btn.addEventListener("click", updateFocusRight);

slider__boxes[in_focus].classList.add("in-focus");
updateVisibility();
