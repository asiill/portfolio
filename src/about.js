const createAbout = () => {
    const about = document.createElement("section");
    about.setAttribute("id", "about");

    return about;
};

export const loadAbout = () => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createAbout());
};