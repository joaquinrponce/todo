import * as display from './display.js'

const toDo = (date, title, category, done = false) => {
  return { date, title, category, done }
}

const listProto = {
  getToDos () {
    return this.toDos
  },
  addToDo (date, title) {
    const newToDo = toDo(date, title, this.name)
    this.toDos.push(newToDo)
    display.appendToDos([newToDo])
  },
  removeToDo (index) {
    this.toDos[index] = null
  }
}

const create = (name) => {
  const props = { name, toDos: [] }
  const newList = Object.assign(Object.create(listProto), props)
  display.list(newList)
  return newList
}

const fromJSON = (json) => {
  return Object.assign(Object.create(listProto), JSON.parse(json))
}

// const list = (name) => {
//   const toDos = [];
//    const listName = name;
//   const getToDos = () => {
//       return toDos;
//   };
//   const addToDo = (date, title) => {
//       toDos.push(toDo(date, title, listName))
//  };
//   return {listName, toDos, getToDos, addToDo}
// }

export { create, fromJSON }
