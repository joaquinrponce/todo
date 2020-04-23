import * as list from './list.js'
import * as display from './display.js'

let myList = list.create('Things');
myList.addToDo('Tomorrow', 'Wash the dishes');
console.log(myList.getToDos());
display.list(myList);