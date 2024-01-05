const createHome = () => {
    const home = document.createElement("section");
    home.setAttribute("id", "home");

    return home;
};

export const loadHome = () => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createHome());
};