"use strict";
var OPEN_CLASS = "-open";
document.addEventListener("DOMContentLoaded", function () {
    var _a, _b;
    var mainNavigation = document.querySelector("#main-navigation");
    if (mainNavigation === null) {
        return;
    }
    (_a = document.querySelector("#hamburger-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        mainNavigation.classList.add(OPEN_CLASS);
    });
    (_b = document.querySelector("#close-button")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        mainNavigation.classList.remove(OPEN_CLASS);
    });
});
