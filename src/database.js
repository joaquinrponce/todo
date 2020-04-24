import * as list from './list.js'

let currentList = findList('Default') || list.create('Default');
let savedListNames = getStoredListNames();
let allLists = getAllLists();

function newList () {
    let name = document.getElementById('newListTitle').value; 
    let newList = list.create(name);
    saveToLocal(newList);
    currentList = newList;
    return newList;
}

function newToDo () {
    let date = document.getElementById('newToDoDate').value; 
    let title = document.getElementById('newToDoTitle').value; 
    currentList.addToDo(date, title)
    saveToLocal(currentList);
}

function saveToLocal (list) {
    if (!savedListNames.includes(list.name)){
        savedListNames.push(list.name);
    }
    localStorage.setItem('ListNames', JSON.stringify(savedListNames))
    localStorage.setItem(list.name, JSON.stringify(list))
}

function findList(name) {
    return list.fromJSON(localStorage.getItem(name))
}

function getStoredListNames() {
    return JSON.parse(localStorage.getItem('ListNames')) || []
}

function getAllLists() {
    let lists = [];
    savedListNames.forEach(name => lists.push(findList(name)));
    return lists;
}



export {newList, newToDo, saveToLocal, findList, allLists, currentList}