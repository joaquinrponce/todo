import * as list from './list.js'
import * as display from './display.js'
import * as database from './database.js'


document.getElementById('newListButton').addEventListener('click', function() { database.newList()
})


document.getElementById('newToDoButton').addEventListener('click', function() { database.newToDo()
})

display.list(database.currentList)