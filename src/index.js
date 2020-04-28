import * as database from './database.js'
import * as display from './display.js'

const listDisplay = document.getElementById('showLists')

function switchList(e) {
    database.switchList(database.findList(e.target.textContent)) 
    display.list(database.currentList)
};

function makeNewList() {
    let list = database.newList();
    appendList(list);
};

function appendList(list) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#'>${list.name}</a>`;
    listItem.addEventListener('click', switchList);
    listDisplay.appendChild(listItem);
}

function collapseList() {
    let style = listDisplay.style.display;
    listDisplay.style.display = style === 'none' ? 'block' : 'none';
}

document.getElementById('newListButton').addEventListener('click', makeNewList );
document.getElementById('newToDoButton').addEventListener('click', database.newToDo );
display.list(database.currentList);

database.allLists.forEach(list => {
    appendList(list);
})

document.getElementById('list-header').addEventListener('click', collapseList )