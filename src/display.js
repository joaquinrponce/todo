import * as database from './database.js'

const removeToDo = function (e) {
  const ele = e.target
  database.removeToDo(ele.dataset.index)
}

const toDo = function (item, index) {
  const container = document.getElementById('list-display')
  const newDiv = document.createElement('div')
  const dateSpan = document.createElement('span')
  const yeetSpan = document.createElement('span')
  const yeetButton = document.createElement('button')
  newDiv.classList.add('todo')
  newDiv.id = item.date
  newDiv.textContent = item.title
  dateSpan.textContent = item.date
  dateSpan.classList.add('date')
  yeetButton.setAttribute('data-index', index)
  yeetButton.setAttribute('type', 'button')
  yeetButton.textContent = 'X'
  yeetButton.addEventListener('click', removeToDo)
  yeetButton.classList.add('yeetButton')
  yeetSpan.appendChild(yeetButton)
  newDiv.appendChild(dateSpan)
  newDiv.appendChild(yeetSpan)
  container.appendChild(newDiv)
}

const wipeDisplay = function () {
  const list = document.getElementById('list-display')
  if (list != null) {
    list.parentNode.removeChild(list)
  }
}

const list = function (item) {
  wipeDisplay()
  const container = document.getElementById('container-main')
  const newDiv = document.createElement('div')
  const titleDiv = document.createElement('div')
  newDiv.classList.add('container')
  newDiv.classList.add('list')
  newDiv.id = 'list-display'
  titleDiv.textContent = item.name
  titleDiv.classList.add('title')
  newDiv.appendChild(titleDiv)
  container.appendChild(newDiv)
  appendToDos(item.getToDos())
}

const appendToDos = function (items) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === null) {
      continue
    }
    toDo(items[i], i)
  }
}

const categories = function (storage) {

}

export { list, categories, appendToDos }
