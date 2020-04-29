import * as list from './list.js'
import * as display from './display.js'

let currentList = findList('Default') ? findList('Default') : list.create('Default')
const savedListNames = getStoredListNames()
const allLists = getAllLists()

function newList () {
  const name = document.getElementById('newListTitle').value
  const newList = list.create(name)
  saveToLocal(newList)
  currentList = newList
  return newList
}

function newToDo () {
  const date = document.getElementById('newToDoDate').value
  const title = document.getElementById('newToDoTitle').value
  currentList.addToDo(date, title)
  saveToLocal(currentList)
}

function removeToDo (target) {
  currentList.removeToDo(target)
  saveToLocal(currentList)
  display.list(currentList)
}

function saveToLocal (list) {
  if (!savedListNames.includes(list.name)) {
    savedListNames.push(list.name)
  }
  localStorage.setItem('ListNames', JSON.stringify(savedListNames))
  localStorage.setItem(list.name, JSON.stringify(list))
}

function findList (name) {
  const savedList = localStorage.getItem(name)
  if (savedList === null) {
    return false
  }
  return list.fromJSON(savedList)
}

function getStoredListNames () {
  return JSON.parse(localStorage.getItem('ListNames')) || []
}

function getAllLists () {
  const lists = []
  savedListNames.forEach(name => lists.push(findList(name)))
  return lists
}

function switchList (target) {
  currentList = target
}

export { newList, newToDo, saveToLocal, findList, allLists, currentList, switchList, removeToDo }
