import { loadHome } from "./home.js";
import { loadAbout } from "./about.js";
import { loadProjects } from "./projects.js";
import { loadContact } from "./contact.js";

const createHeader = () => {
    const header = document.createElement("header");

    const name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = "asiill";

    header.appendChild(name);
    
    return header;
};

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

const createMain = () => {
    const main = document.createElement("main");

    return main;
};

const createFooter = () => {
    const footer = document.createElement("footer");

    const copyright = document.createElement("p");
    copyright.classList.add("copyright");
    copyright.textContent = "© 2024 asiill";
    
    footer.appendChild(copyright);

    return footer;
};

export const loadWebsite = () => {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
};

