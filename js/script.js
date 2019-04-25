var catalogShowStyle = document.querySelector(".catalog-navigation-wrapper");
var buttonCatalogShow = document.querySelector(".site-navigation-catalog");

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
