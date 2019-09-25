var popupMap = document.querySelector(".popup-map");
var popupMapBtn = document.querySelector(".btn-map");
var popupFeedback = document.querySelector(".popup-feedback");
var popupFeedbackBtn = document.querySelector(".contats-btn");
var feedbackName = document.querySelector("#feedback-form-name");
var popupCloseMap = popupMap.querySelector(".popup-close");
var popupCloseFb = popupFeedback.querySelector(".popup-close");

popupCloseMap.addEventListener("click", function () {
    popupMap.classList.remove("popup-show");
})

popupCloseFb.addEventListener("click", function (evt) {
    evt.preventDefault();
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
