const createProjects = () => {
    const projects = document.createElement("section");
    projects.setAttribute("id", "projects");
    
    return projects;
};

export const loadProjects = () => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createProjects());
};