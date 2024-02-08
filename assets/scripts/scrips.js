"use strict";

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".preloader").remove();
        document.body.style.overflowY = 'visible';
    }, 1000);
});


// БЛОК ОТРАСЛЕЙ

window.addEventListener("load", () => {
    const industry_cart = document.querySelectorAll(".industry_card"),
        industry_info = document.querySelectorAll(".industry_card_info_block");

    industry_cart.forEach((cart, i) => {
        cart.addEventListener("click", () => {
            industry_cart.forEach(cart => {cart.classList.remove("active")});
            industry_info.forEach(info => {info.classList.remove("active")});
            cart.classList.add("active");
            industry_info[i].classList.add("active");
        });
    });
});

// БЛОК ОТРАСЛЕЙ (768PX)

const carts_mobile = document.querySelectorAll(".industry_card_mobile");
carts_mobile.forEach((cart) => {
    cart.addEventListener("click", () => {
        if (cart.classList.contains("active")) {
            cart.classList.remove("active");
        } else {
            carts_mobile.forEach((c) => {c.classList.remove("active")});
            cart.classList.add("active");
        }

    });
});


const stageItems = document.querySelectorAll(".stage_btn");
stageItems.forEach((item) => {
    item.addEventListener("click", () => {
        let panel = item.nextElementSibling;
        console.log(panel.classList.toggle("visible"));
        if (panel.classList.toggle("visible")){
            panel.classList.remove("visible");
        } else {
            panel.classList.add("visible");
        }
    });
});

const order = [];
const buildingItem = document.querySelectorAll(".building_item");
const progressBar = document.querySelector("#prog");
const score = document.querySelector(".hint span");
const titleFinal = document.querySelector(".title_final");
buildingItem.forEach((item) => {
    item.addEventListener("click", () => {
        let activeTitle = document.querySelector(".build_active_title"),
            nextTitle = activeTitle.nextElementSibling,
            activeItem = document.querySelector(".build_active_item"),
            nextItem = activeItem.nextElementSibling;
        order.push(item.innerText);
        progressBar.style.width = parseInt(progressBar.style.width) + 20 +"%";
        score.innerText = order.length + 1;
        let newSpan = document.createElement("span");
        newSpan.textContent = item.innerText
        titleFinal.appendChild(newSpan);
        if (nextTitle !== null) {
            activeTitle.classList.remove("build_active_title");
            nextTitle.classList.add("build_active_title");
        }
        if (nextItem !== null) {
            activeItem.classList.remove("build_active_item");
            nextItem.classList.add("build_active_item");
        }
        if (order.length === 4) {
            document.querySelector(".title_final").classList.add("active");
        }
    });
});

const userFile = document.querySelector("#user_file");
userFile.addEventListener("change", (event) => {
    if (userFile.files[0].size > 5 * 1024 * 1024) {
        userFile.value = '';
        alert("Файл слишком большой!");
        return false;
    }
    return true;
});

const userPhone = document.querySelector(".input[name='user_phone']");
userPhone.addEventListener("input", () => {
   userPhone.value = userPhone.value.replace(/\D/, '');
});

const userMessage = document.querySelector("textarea");
userMessage.addEventListener("keydown", resize)

function resize() {
    let el = this;
    setTimeout(() => {
        el.style.height = el.scrollHeight + 1 + "px"
    },1);
}

if (window.innerWidth <= 1000) {
    particles('./assets/particles_mobile.json');
} else {
    particles('./assets/particles.json');
}

function particles(path) {
    particlesJS.load('particles-js', `${path}`, function() {
        console.debug('callback - particles.js config loaded');
    });
}
