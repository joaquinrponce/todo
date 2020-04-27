import * as database from './database.js'
import * as display from './display.js'

let listDisplay = document.getElementById('showLists')

function switchList(e) {
    database.switchList(database.findList(e.target.textContent)) 
    console.log(database.currentList.name);
    display.list(database.currentList)
};
document.getElementById('newListButton').addEventListener('click', database.newList );
document.getElementById('newToDoButton').addEventListener('click', database.newToDo );
display.list(database.currentList);

database.allLists.forEach(list => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#'>${list.name}</a>`;
    listItem.addEventListener('click', switchList);
    listDisplay.appendChild(listItem);
})