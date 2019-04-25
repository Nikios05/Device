var serviceSwitch = document.querySelectorAll(".service-list button");
var serviceActive = document.querySelector(".service-active");
var serviceDescription = document.querySelectorAll(".service-description");
var serviceShow = document.querySelector(".service-show");

serviceSwitch[0].addEventListener("click", function () {
    if (!serviceSwitch[0].classList.contains("service-active")) {
        serviceActive.classList.remove("service-active");
        serviceSwitch[0].classList.add("service-active");
        serviceActive = document.querySelector(".service-active");
        if (!serviceDescription[0].classList.contains("service-show")) {
            serviceShow.classList.remove("service-show");
            serviceDescription[0].classList.add("service-show");
            serviceShow = document.querySelector(".service-show");
        }
    }
})

serviceSwitch[1].addEventListener("click", function () {
    if (!serviceSwitch[1].classList.contains("service-active")) {
        serviceActive.classList.remove("service-active");
        serviceSwitch[1].classList.add("service-active");
        serviceActive = document.querySelector(".service-active");
        if (!serviceDescription[1].classList.contains("service-show")) {
            serviceShow.classList.remove("service-show");
            serviceDescription[1].classList.add("service-show");
            serviceShow = document.querySelector(".service-show");
        }
    }
})

serviceSwitch[2].addEventListener("click", function () {
    if (!serviceSwitch[2].classList.contains("service-active")) {
        serviceActive.classList.remove("service-active");
        serviceSwitch[2].classList.add("service-active");
        serviceActive = document.querySelector(".service-active");
        if (!serviceDescription[2].classList.contains("service-show")) {
            serviceShow.classList.remove("service-show");
            serviceDescription[2].classList.add("service-show");
            serviceShow = document.querySelector(".service-show");
        }
    }
})