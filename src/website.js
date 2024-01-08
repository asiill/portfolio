import { loadHome } from "./home.js";
import { loadAbout } from "./about.js";
import { loadProjects } from "./projects.js";
import { loadContact } from "./contact.js";

const getImagePath = (imageName) => {
    // Check if the body has the "dark" class
    const isDarkMode = document.body.classList.contains("dark");

    // Define image paths for light/dark modes
    const lightPath = `./images/${imageName}-light.svg`;
    const darkPath = `./images/${imageName}-dark.svg`;

    // Return the path based on the mode
    return isDarkMode ? darkPath : lightPath;
};

const updateImagePaths = () => {
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

const createLinks = () => {
    const links = document.createElement("ul");
    links.classList.add("links");

    /* --- Github link item --- */
    const firstItem = document.createElement("li");

    const github = document.createElement("a");
    github.classList.add("github-link");
    github.href = "https://github.com/asiill";

    const githubImg = document.createElement("img");
    githubImg.src = getImagePath("github");
    githubImg.title = "github";

    /* --- Codepen link item ---*/
    const secondItem = document.createElement("li");

    const codepen = document.createElement("a");
    codepen.classList.add("codepen-link");
    codepen.href = "https://codepen.io/asiill";

    const codepenImg = document.createElement("img");
    codepenImg.src = getImagePath("codepen");
    codepenImg.title = "codepen";

    github.appendChild(githubImg);
    codepen.appendChild(codepenImg);

    firstItem.appendChild(github);
    secondItem.appendChild(codepen);

    links.appendChild(firstItem);
    links.appendChild(secondItem);

    return links;
}

const createActions = () => {
    const actions = document.createElement("div");
    actions.classList.add("actions");

    /* --- Language toggle --- */
    const language = document.createElement("button");
    language.classList.add("toggle-language");
    language.textContent = "FR";

    /* --- light/dark mode toggle --- */
    const mode = document.createElement("button");
    mode.classList.add("toggle-mode");
    mode.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.classList.toggle("dark");
        updateImagePaths();
    });

    const modeImg = document.createElement("img");
    modeImg.src = getImagePath("mode");
    modeImg.title = "toggle mode";

    mode.appendChild(modeImg);

    actions.appendChild(mode);
    actions.appendChild(language);

    return actions;
}

const createNav = () => {
    const nav = document.createElement("nav");

    const home = document.createElement("button");
    home.classList.add("home-btn");
    home.textContent = "Home";
    home.addEventListener("click", loadHome);

    const about = document.createElement("button");
    about.classList.add("about-btn");
    about.textContent = "About";
    about.addEventListener("click", loadAbout);

    const projects = document.createElement("button");
    projects.classList.add("projects-btn");
    projects.textContent = "Projects";
    projects.addEventListener("click", loadProjects);

    const contact = document.createElement("button");
    contact.classList.add("contact-btn");
    contact.textContent = "Contact";
    contact.addEventListener("click", loadContact);

    nav.appendChild(home);
    nav.appendChild(about);
    nav.appendChild(projects);
    nav.appendChild(contact);

    return nav;
};

const createHeader = () => {
    const header = document.createElement("header");

    const logo = document.createElement("h1");
    logo.classList.add("logo");
    logo.textContent = "A...";

    const firstRow = document.createElement("div");
    firstRow.classList.add("first-header-row");

    const secondRow = document.createElement("div");
    secondRow.classList.add("second-header-row");

    firstRow.appendChild(logo);
    firstRow.appendChild(createActions());

    secondRow.appendChild(createNav());
    secondRow.appendChild(createLinks());

    header.appendChild(firstRow);
    header.appendChild(secondRow);
    
    return header;
};

const createMain = () => {
    const main = document.createElement("main");

    return main;
};

const createFooter = () => {
    const footer = document.createElement("footer");

    const copyright = document.createElement("h3");
    copyright.classList.add("copyright");
    copyright.textContent = "© 2024 asiill";
    
    footer.appendChild(copyright);

    return footer;
};

export const loadWebsite = () => {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());

    loadHome();
};

