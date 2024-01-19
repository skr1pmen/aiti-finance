const industryCard = document.querySelectorAll(".industry_card");
industryCard.forEach((item) => {
    item.addEventListener("click", () => {
        let activeCard = document.querySelector(".active");
        if (activeCard !== item) {
            item.classList.add("active");
            document.querySelector(".industry_info_title").innerText = item.querySelector(".industry_card_name").innerText;
            activeCard.classList.remove("active");
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
buildingItem.forEach((item) => {
    item.addEventListener("click", () => {
        let activeTitle = document.querySelector(".build_active_title"),
            nextTitle = activeTitle.nextElementSibling,
            activeItem = document.querySelector(".build_active_item"),
            nextItem = activeItem.nextElementSibling;
        order.push(item.innerText);
        progressBar.style.width = parseInt(progressBar.style.width) + 20 +"%";
        score.innerText = order.length + 1;
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