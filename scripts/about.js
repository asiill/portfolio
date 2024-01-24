const createTools = () => {
    const toolsList = document.querySelector(".tools-list");

    let list = ["HTML", "CSS", "Javascript", "React.js", "Git", "npm", "webpack", "Jest"];
    let elements = [];

    for (let i = 0; i < list.length; i++) {
        let string = list[i];
        let str = string.toLowerCase().replace(".", "");
        let path = `../images/tools/${str}.svg`;

        const el = document.createElement("div");
        el.classList.add("tool-element");

        const img = document.createElement("img");
        img.src = path;

        const text = document.createElement("p");
        text.textContent = string;

        el.appendChild(img);
        el.appendChild(text);

        elements.push(el);
    }

    for (let i = 0; i < elements.length; i++) {
        let el = elements[i];
        toolsList.appendChild(el);
    }
};

createTools();