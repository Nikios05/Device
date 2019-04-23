var catalogShowStyle = document.querySelector(".catalog-navigation-wrapper");
var buttonCatalogShow = document.querySelector(".site-navigation-catalog");

var serviceSwitch = document.querySelectorAll(".service-list button");
var serviceActive = document.querySelector(".service-active");
var serviceDescription = document.querySelectorAll(".service-description");
var serviceShow = document.querySelector(".service-show");

var popupMap = document.querySelector(".popup-map");
var popupMapBtn = document.querySelector(".btn-map");
var popupFeedback = document.querySelector(".popup-feedback");
var popupFeedbackBtn = document.querySelector(".contats-btn");
var FeedbackName = document.querySelector("#feedback-form-name");
var popupCloseMap = popupMap.querySelector(".popup-close");
var popupCloseFb = popupFeedback.querySelector(".popup-close");

buttonCatalogShow.addEventListener("mouseover", function () {
    catalogShowStyle.classList.add("catalog-navigation-show");
})
buttonCatalogShow.addEventListener("click", function (evt) {
    evt.preventDefault();
})
buttonCatalogShow.addEventListener("mouseout", function () {
    catalogShowStyle.classList.remove("catalog-navigation-show");
})
catalogShowStyle.addEventListener("mouseover", function () {
    catalogShowStyle.classList.add("catalog-navigation-show");
})
catalogShowStyle.addEventListener("mouseout", function () {
    catalogShowStyle.classList.remove("catalog-navigation-show");
})


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

popupCloseMap.addEventListener("click", function () {
    popupMap.classList.remove("popup-show");
})

popupCloseFb.addEventListener("click", function () {
    popupFeedback.classList.remove("popup-show");
})

popupMapBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("popup-show");
})

popupFeedbackBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("popup-show");
    FeedbackName.focus();
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popupMap.classList.contains("popup-show")) {
            popupMap.classList.remove("popup-show");
            evt.preventDefault();
        }
        if (popupFeedback.classList.contains("popup-show")) {
            popupFeedback.classList.remove("popup-show");
            evt.preventDefault();
        }
    }
})