import * as list from './list.js'
import * as display from './display.js'

let currentList = findList('Default') ? findList('Default') : list.create('Default');
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

function removeToDo (target) {
    currentList.removeToDo(target);
    saveToLocal(currentList);
    display.list(currentList);
}

function saveToLocal (list) {
    if (!savedListNames.includes(list.name)){
        savedListNames.push(list.name);
    }
    localStorage.setItem('ListNames', JSON.stringify(savedListNames))
    localStorage.setItem(list.name, JSON.stringify(list))
}

function findList(name) {
    let saved_list = localStorage.getItem(name)
    if (saved_list === null) {
        return false
    }
    return list.fromJSON(saved_list)
}

function getStoredListNames() {
    return JSON.parse(localStorage.getItem('ListNames')) || []
}

function getAllLists() {
    let lists = [];
    savedListNames.forEach(name => lists.push(findList(name)));
    return lists;
}

function switchList (target) {
    currentList = target;
}



export {newList, newToDo, saveToLocal, findList, allLists, currentList, switchList, removeToDo}