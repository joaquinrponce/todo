const toDo = function(item) {
    let container = document.getElementById(item.category);
    let newDiv = document.createElement('div');
    let dateSpan = document.createElement('span')
    newDiv.classList.add('todo')
    newDiv.id = item.date;
    newDiv.textContent = item.title;
    dateSpan.textContent = item.date; 
    dateSpan.classList.add('date');
    newDiv.appendChild(dateSpan);
    container.appendChild(newDiv);
}

const list = function(item) {
    let container = document.getElementById('container-main');
    let newDiv = document.createElement('div');
    newDiv.classList.add('container');
    newDiv.classList.add('list');
    newDiv.id = item.name;
    newDiv.textContent = item.name;
    container.appendChild(newDiv);
    appendToDos(item.getToDos());
}

const appendToDos = function(items) {
    for (let i = 0; i < items.length; i++) {
        toDo(items[i]);
    }
}

const categories = function(storage) {

}

export {list, categories, appendToDos}