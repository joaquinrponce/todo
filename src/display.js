const toDo = function(item) {
    let container = document.getElementById(item.category);
    let newDiv = document.createElement('div');
    newDiv.classList.add('todo')
    newDiv.id = item.date;
    newDiv.textContent = item.title;
    container.appendChild(newDiv);
}

const list = function(item) {
    let container = document.getElementById('container-main');
    let newDiv = document.createElement('div');
    newDiv.classList.add('container');
    newDiv.classList.add('list');
    newDiv.id = item.listName;
    container.appendChild(newDiv);
    addToDos(item);
}

const addToDos = function(item) {
    let items = item.getToDos();
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        toDo(items[i]);
    }
}

export {list}