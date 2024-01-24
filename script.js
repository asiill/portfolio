import { englishData } from "./data/englishData.js";
import { frenchData } from "./data/frenchData.js";

export const getLanguageData = (type) => {
    // Check if the body has the "french" class
    const isFrenchMode = document.body.classList.contains("french");

    // Define language data for english/french
    const english = englishData[type];
    const french = frenchData[type];

    // Return the data based on the current language
    return isFrenchMode ? french : english;
};

const updateHeader = () => {
    const actionsData = getLanguageData("actions");
    const navData = getLanguageData("nav");
    
    const language = document.querySelector(".toggle-language");
    if (language) {
        language.textContent = actionsData["switchTo"];
    }

    const home = document.querySelector(".home-nav");
    if (home) {
        home.textContent = navData["home"];
    }

    const about = document.querySelector(".about-nav");
    if (about) {
        about.textContent = navData["about"];
    }

    const projects = document.querySelector(".projects-nav");
    if (projects) {
        projects.textContent = navData["projects"];
    }

    const contact = document.querySelector(".contact-nav");
    if (contact) {
        contact.textContent = navData["contact"];
    }
};

const updateHome = () => {
    const homeData = getLanguageData("home");

    const greeting = document.querySelector(".greeting");
    if (greeting) {
        greeting.textContent = homeData["greeting"];
    }

    const title = document.querySelector(".title");
    if (title) {
        title.textContent = homeData["title"];
    }

    const aboutLink = document.querySelector(".about-link");
    if (aboutLink) {
        aboutLink.textContent = homeData["aboutText"];
    }

    const projectsLink = document.querySelector(".projects-link");
    if (projectsLink) {
        projectsLink.textContent = homeData["projectsText"];
    }
};

const updateAbout = () => {
    const aboutData = getLanguageData("about");

    const introHeader = document.querySelector(".intro-header");
    if (introHeader) {
        introHeader.textContent = aboutData["introHeader"];
    }

    const introTitle = document.querySelector(".intro-title");
    if (introTitle) {
        introTitle.textContent = aboutData["introTitle"];
    }

    const introDescription = document.querySelector(".intro-description");
    if (introDescription) {
        introDescription.textContent = aboutData["introDescription"];
    }

    const toolsHeader = document.querySelector(".tools-header");
    if (toolsHeader) {
        toolsHeader.textContent = aboutData["toolsHeader"];
    }
};

const updateProjects = () => {
    const projectsData = getLanguageData("projects");
    const list = projectsData["list"];

    const header = document.querySelector(".projects-header");
    if (header) {
        header.textContent = projectsData["header"];
    }

    const descriptions = document.querySelectorAll(".project-description");
    if (descriptions) {
        descriptions.forEach((des) => {
            let parentElement = des.parentNode;
            let nameElement = parentElement.querySelector(".project-name");
            let name = nameElement.textContent;
            let project = list.find(p => p.name === name);
            des.textContent = project.description;
        });
    }
};

const updateContact = () => {
    const contactData = getLanguageData("contact");

    const header = document.querySelector(".contact-header");
    if (header) {
        header.textContent = contactData["header"];
    }

    const name = document.querySelector("label[for='contact-name']");
    if (name) {
        name.textContent = contactData["name"];
    }

    const email = document.querySelector("label[for='contact-email']");
    if (email) {
        email.textContent = contactData["email"];
    }

    const message = document.querySelector("label[for='contact-message']");
    if (message) {
        message.textContent = contactData["message"];
    }

    const submit = document.getElementById("submit-btn");
    if (submit) {
        submit.textContent = contactData["submit"];
    }
};

const updateLanguageData = () => {
    updateHeader();
    updateHome();
    updateAbout();
    updateProjects();
    updateContact();
};

const getImagePath = (imageName) => {
    // Check if the body has the "dark" class
    const isDarkMode = document.body.classList.contains("dark");

    const isHomePage = document.getElementById("home") !== null;
    const basePath = isHomePage ? "./" : "../";

    // Define image paths for light/dark modes
    const lightPath = `${basePath}./images/${imageName}-light.svg`;
    const darkPath = `${basePath}./images/${imageName}-dark.svg`;

    // Return the path based on the mode
    return isDarkMode ? darkPath : lightPath;
};

const updateImagePaths = () => {
    const modeImg = document.querySelector(".toggle-mode img");
    if (modeImg) {
        modeImg.src = getImagePath("mode");
    }
};

const addEventListeners = () => {
    const language = document.querySelector(".toggle-language");
    const mode = document.querySelector(".toggle-mode");

    language.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.classList.toggle("french");
        localStorage.setItem("french", body.classList.contains("french"));
        updateLanguageData();
    });

    mode.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.classList.toggle("dark");
        localStorage.setItem("dark", body.classList.contains("dark"));
        updateImagePaths();
    });
};

const getLocalStorage = () => {
    if (localStorage.getItem("french")) {
        document.body.classList.add("french");
        updateLanguageData();
    }
    
    if (localStorage.getItem("dark")) {
        document.body.classList.add("dark");
        updateImagePaths();
    }
};

const initializePage = () => {
    getLocalStorage();
    addEventListeners();
};

initializePage();