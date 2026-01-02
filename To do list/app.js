let input = document.querySelector(".task-area #text-inp");
let btntxt = document.querySelector(".task-area #addtxt-btn");
let addcont = document.querySelector('.add-cont');

window.addEventListener("load", (event) => {
    let keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let text = localStorage.getItem(key);
        creatElement(text, key);
    }
});

let creatElement = (text, key) => {
    if (!text) {
        text = input.value;
    }

    if (text !== '' && text !== null) {
        let element = document.createElement('div');
        element.innerHTML =
            `<div class="old-task">${text}</div>
        <button class="del-task">delete</button>`
        element.classList.add('tasks-added');

        addcont.append(element);
        input.value = '';

        storage(element, key);
    };
}

btntxt.addEventListener("click", (evt) => {
    evt.preventDefault();
    creatElement();
});


let storage = (ele, key) => {
    let del = ele.querySelector('.del-task');
    let item = ele.querySelector('.old-task').innerText;

    if (!key) {
        key = Date.now();
        localStorage.setItem(key, item);
    }

    del.addEventListener('click', () => {
        localStorage.removeItem(key);
        ele.remove();
    });
}
