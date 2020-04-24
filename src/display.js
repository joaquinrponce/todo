const toDo = function(item) {
    let container = document.getElementById(item.category);
    let newDiv = document.createElement('div');
    newDiv.classList.add('todo')
    newDiv.id = item.date;
    newDiv.innerHTML = item.title;
    container.appendChild(newDiv);
}

const list = function(item) {
    let container = document.getElementById('container-main');
    let newDiv = document.createElement('div');
    newDiv.classList.add('container');
    newDiv.classList.add('list');
    newDiv.id = item.listName;
    newDiv.textContent = item.listName;
    container.appendChild(newDiv);
    appendToDos(item);
}

const appendToDos = function(item) {
    let items = item.getToDos();
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        toDo(items[i]);
    }
}

const categories = function(storage) {

}

export {list, categories}