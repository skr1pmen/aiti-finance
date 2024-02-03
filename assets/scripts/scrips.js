window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".preloader").remove();
        document.body.style.overflowY = 'visible';
    }, 1000);
});

const industryCard = document.querySelectorAll(".industry_card");
const title = document.querySelector(".industry_info_title")
let isIcon = false;
industryCard.forEach((item) => {
    item.addEventListener("click", () => {
        let activeCard = document.querySelector(".active");
        if (activeCard !== item) {
            item.classList.add("active");
            title.innerText = item.querySelector(".industry_card_name").innerText;
            if (window.innerWidth > 480) {
                activeCard.classList.remove("active");
            }
        }
        if (window.innerWidth <= 480) {
            let svg = item.querySelector(".industry_card_name").previousElementSibling;
            let cloveSvg = svg.cloneNode(true);
            if (!isIcon) {
                isIcon = true;
                document.querySelector(".industry_title").insertBefore(cloveSvg,title);
            }
            if (item.classList.contains("active")) {
                item.classList.remove("active");
            }
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

            console.log(order)
        }
    });
});

const userFile = document.querySelector("#user_file");
userFile.addEventListener("change", (event) => {
    if (userFile.files[0].size !== 5242880) {
        userFile.value = '';
        return false;
    }
    return true;
});

const userPhone = document.querySelector(".input[name='user_phone']");
userPhone.addEventListener("input", () => {
   userPhone.value = userPhone.value.replace(/\D/, '');
});


if (window.innerWidth <= 480) {
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
        if (!link.classList.contains("btn")) {
            link.classList.add('deactivate');
        }
    });
    document.querySelector(".industry_card").classList.remove("active");
    const checkboxs = document.querySelectorAll(".checkbox");
    checkboxs[0].checked = false;
    checkboxs.forEach(item => {
        item.setAttribute("type", "checkbox");
    });
    document.querySelector(".industry_card_info").addEventListener("click", () =>{
        document.querySelectorAll(".checkbox").forEach((item) => {
            item.checked = false;
        });
    });
}

particlesJS.load('particles-js', './assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


document.querySelector("#particles-js").style.height=document.body.offsetHeight+"px";