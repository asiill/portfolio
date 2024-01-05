const createContact = () => {
    const contact = document.createElement("section");
    contact.setAttribute("id", "contact");

    return contact;
};

export const loadContact = () => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createContact());
};