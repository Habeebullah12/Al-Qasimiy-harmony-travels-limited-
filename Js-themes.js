const themes = ["dark", "light", "royal"];

let currentTheme =
    localStorage.getItem("theme") || "dark";

document.documentElement.setAttribute(
    "data-theme",
    currentTheme
);

const button = document.getElementById("themeBtn");

button.addEventListener("click", () => {

    let index = themes.indexOf(currentTheme);

    index++;

    if(index >= themes.length){

        index = 0;

    }

    currentTheme = themes[index];

    document.documentElement.setAttribute(
        "data-theme",
        currentTheme
    );

    localStorage.setItem(
        "theme",
        currentTheme
    );

});
