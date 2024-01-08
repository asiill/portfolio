import { englishData } from "./data/englishData.js";
import { frenchData } from "./data/frenchData.js";

export const getLanguageData = (type, name) => {
    // Check if the body has the "french" class
    const isFrenchMode = document.body.classList.contains("french");

    // Define language data for english/french
    const english = englishData[type][name];
    const french = frenchData[type][name];

    // Return the data based on the current language
    return isFrenchMode ? french : english;
};

export const updateLanguageData = () => {
    const language = document.querySelector(".toggle-language");
    if (language) {
        language.textContent = getLanguageData("actions", "switchTo");
    }

    const home = document.querySelector(".home-btn");
    if (home) {
        home.textContent = getLanguageData("nav", "home");
    }

    const about = document.querySelector(".about-btn");
    if (about) {
        about.textContent = getLanguageData("nav", "about");
    }

    const projects = document.querySelector(".projects-btn");
    if (projects) {
        projects.textContent = getLanguageData("nav", "projects");
    }

    const contact = document.querySelector(".contact-btn");
    if (contact) {
        contact.textContent = getLanguageData("nav", "contact");
    }
};

export const getImagePath = (imageName) => {
    // Check if the body has the "dark" class
    const isDarkMode = document.body.classList.contains("dark");

    // Define image paths for light/dark modes
    const lightPath = `./images/${imageName}-light.svg`;
    const darkPath = `./images/${imageName}-dark.svg`;

    // Return the path based on the mode
    return isDarkMode ? darkPath : lightPath;
};

export const updateImagePaths = () => {
    const modeImg = document.querySelector(".toggle-mode img");
    if (modeImg) {
        modeImg.src = getImagePath("mode");
    }

    const githubImg = document.querySelector(".github-link img");
    if (githubImg) {
        githubImg.src = getImagePath("github");
    }

    const codepenImg = document.querySelector(".codepen-link img");
    if (codepenImg) {
        codepenImg.src = getImagePath("codepen");
    }
};