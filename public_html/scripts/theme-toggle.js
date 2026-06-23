"use strict";


document.addEventListener("DOMContentLoaded", init);

function init() {
    const body = document.getElementsByTagName("body")[0];
    body.addEventListener("click", handleClick);
    const toggleInput = document.getElementById("home-theme-input");
    toggleInput.addEventListener("change", toggleTheme);
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.setAttribute("data-theme", savedTheme);
        if (savedTheme === "dark") {
            toggleInput.removeAttribute("checked");
        }
        else if (savedTheme === "light") {
            toggleInput.setAttribute("checked", true);
        }
    }
    savedTheme = null;
}

function toggleTheme(e) {
    let isLight = e.target.checked
    const body = document.getElementsByTagName("body")[0];
    if (isLight === true) {;
        let span = document.getElementById("sun");
        body.setAttribute("data-theme", "light");

        localStorage.setItem("theme", "light");
    } else {
        let span = document.getElementById("moon");
        body.setAttribute("data-theme", "dark");

        localStorage.setItem("theme", "dark");
    }
    isLight = null;
}

function handleClick(e){
    if (e.target.href){
        cleanUp();
    }
}

function cleanUp(){
    removeEventListener("DOMContentLoaded", init);
    removeEventListener("input", toggleTheme);
    removeEventListener("click", handleClick);
}


