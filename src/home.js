const createHome = () => {
    const home = document.createElement("section");
    home.setAttribute("id", "home");

    const info = document.createElement("div");
    info.classList.add("info");

    const name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = "asiill"

    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = "Front end developer";

    const graphic = document.createElement("div");
    graphic.classList.add("graphic");
    graphic.textContent = "...";

    info.appendChild(name);
    info.appendChild(title);

    home.appendChild(info);
    home.appendChild(graphic);

    return home;
};

export const loadHome = () => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createHome());
};