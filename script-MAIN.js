const inputTask = document.querySelector('.getTask input');
const buttonTask = document.querySelector('.getTask button');
const inputFind = document.querySelector('.findTask input');

const span = document.querySelector('span');
const ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

let arrTask = [];


// Remove function

const rmvTask = function (e) {
    e.preventDefault();
    // Find Index of element to remove
    const elemId = e.target.parentNode.id;
    const findI = function (elem) {
        if (elem.id == elemId) return true;
    }
    const findIn = arrTask.findIndex(findI);
    //////////
    arrTask.splice(findIn, 1);
    e.target.parentNode.remove();
    span.textContent = ul.children.length;
}

// Add Task function
const addTask = function (e) {
    e.preventDefault();

    if (inputTask.value) {
        const newLi = document.createElement('li');
        inputTxt = inputTask.value;
        newLi.innerHTML = inputTxt + "<button class=\"remove\">Usuń</button>";

        //Add to arrTask
        if (!ul.textContent) newLi.id = 0;
        else {
            number = arrTask[arrTask.length - 1].id;
            newLi.id = ++number;
        }
        arrTask.push(newLi);
        ul.appendChild(newLi);
        //////////////

        inputTask.value = "";
        span.textContent = ul.children.length;
        newLi.querySelector('button').addEventListener('click', rmvTask);
        li = [...document.querySelectorAll('li')];
    }
};

buttonTask.addEventListener('click', addTask);


const findTask = function (e) {
    e.preventDefault();
    const searchTxt = inputFind.value.toLowerCase();
    ul.textContent = "";

    arrTask.forEach((el) => {
        if (el.childNodes[0].textContent.toLowerCase().includes(searchTxt)) return ul.appendChild(el);
    })
    span.textContent = ul.children.length;
}


inputFind.addEventListener('input', findTask);