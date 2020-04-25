const toDo = function(item) {
    let container = document.getElementById('list-display');
    let newDiv = document.createElement('div');
    let dateSpan = document.createElement('span')
    let yeetSpan = document.createElement('span')
    newDiv.classList.add('todo')
    newDiv.id = item.date;
    newDiv.textContent = item.title;
    dateSpan.textContent = item.date; 
    dateSpan.classList.add('date');
    yeetSpan.innerHTML = '<button type="button">yeet</button>'
    yeetSpan.classList.add('yeet')
    newDiv.appendChild(dateSpan);
    newDiv.appendChild(yeetSpan);
    container.appendChild(newDiv);
}

const wipeDisplay = function() {
    let list = document.getElementById('list-display')
    if (list != null) {
        list.parentNode.removeChild(list);
    }
}

const list = function(item) {
    wipeDisplay();
    let container = document.getElementById('container-main');
    let newDiv = document.createElement('div');
    newDiv.classList.add('container');
    newDiv.classList.add('list');
    newDiv.id = 'list-display'
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