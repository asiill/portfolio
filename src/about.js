const createSkills = () => {
    const skills = document.createElement("menu");
    skills.classList.add("skills");

    

    return skills;
};

const createAbout = () => {
    const about = document.createElement("section");
    about.setAttribute("id", "about");

    const skills = createSkills();
    about.appendChild(skills);

    return about;
};

export const loadAbout = () => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createAbout());
};