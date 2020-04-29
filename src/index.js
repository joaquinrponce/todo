import * as database from './database.js'
import * as display from './display.js'

const listDisplay = document.getElementById('showLists')

function switchList (e) {
  database.switchList(database.findList(e.target.textContent))
  display.list(database.currentList)
};

function makeNewList () {
  const list = database.newList()
  appendList(list)
};

function appendList (list) {
  const listItem = document.createElement('li')
  const listLink = document.createElement('a')
  const listYeet = document.createElement('button')
  listLink.textContent = list.name
  listYeet.textContent = 'X'
  listYeet.classList.add('yeetButton')
  listYeet.classList.add('yeetList')
  listLink.addEventListener('click', switchList)
  listItem.appendChild(listLink)
  listItem.appendChild(listYeet)
  listDisplay.appendChild(listItem)
}

function collapseList () {
  const style = listDisplay.style.display
  listDisplay.style.display = style !== 'flex' ? 'flex' : 'none'
}

document.getElementById('newListButton').addEventListener('click', makeNewList)
document.getElementById('newToDoButton').addEventListener('click', database.newToDo)
display.list(database.currentList)

database.allLists.forEach(list => {
  appendList(list)
})

document.getElementById('list-header').addEventListener('click', collapseList)
