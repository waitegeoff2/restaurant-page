import "./styles.css";
import { homeContent } from "./home.js";
import { menuContent } from "./menu.js";
import { aboutContent } from "./about.js";

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

homeContent();

homeButton.addEventListener("click", () => {
    homeContent();
});


menuButton.addEventListener("click", () => {
    menuContent();
});

aboutButton.addEventListener("click", () => {
    aboutContent();
});
