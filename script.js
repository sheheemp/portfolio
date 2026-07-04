/*==============================
AOS Animation
==============================*/

AOS.init({
    duration: 1000,
    once: true
});

/*==============================
Typing Animation
==============================*/

var typed = new Typed(".typing", {
    strings: [
        "Java Developer",
        "Full Stack Developer",
        "Frontend Developer",
        "Problem Solver"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

/*==============================
Sticky Header
==============================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 80);
});

/*==============================
Mobile Menu
==============================*/

const menuBtn = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {

    navbar.classList.toggle("show");

    if (navbar.classList.contains("show")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

};

/*==============================
Close Menu After Click
==============================*/

document.querySelectorAll(".navbar a").forEach(link => {

    link.onclick = () => {

        navbar.classList.remove("show");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    }

});

/*==============================
Active Navigation
==============================*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {

        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                document.querySelector(".navbar a[href*=" + id + "]")
                    .classList.add("active");

            });

        }

    });

};

/*==============================
Back To Top Button
==============================*/

const topBtn = document.createElement("div");

topBtn.className = "top";

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

topBtn.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/*==============================
Smooth Scroll
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

/*==============================
Image Hover Animation
==============================*/

const image = document.querySelector(".home-image img");

image.addEventListener("mouseenter", () => {

    image.style.transform = "scale(1.08) rotate(3deg)";

});

image.addEventListener("mouseleave", () => {

    image.style.transform = "scale(1) rotate(0deg)";

});

/*==============================
Button Ripple Effect
==============================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e) {

        let circle = document.createElement("span");

        circle.classList.add("ripple");

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        circle.style.left = x + "px";
        circle.style.top = y + "px";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

/*==============================
Fade Elements on Load
==============================*/

window.addEventListener("load", () => {

    document.body.classList.add("fade-up");

});

/*==============================
Console Welcome
==============================*/

console.log("%cWelcome to Sheheem's Portfolio",
"color:#00C2FF;font-size:20px;font-weight:bold;");

console.log("Built with HTML, CSS & JavaScript");