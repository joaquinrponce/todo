const toDo = (date, title, category, done = false) => {
    return { date, title, category, done }
}

const listProto = {
    getToDos() {
        return this.toDos;
    },
    addToDo(date, title) {
        this.toDos.push(toDo(date, title, listName))
    }
}

const list = (name) => {
    const toDos = [];
    const listName = name;
    const getToDos = () => {
        return toDos;
    };
    const addToDo = (date, title) => {
        toDos.push(toDo(date, title, listName))
    };
    return {listName, toDos, getToDos, addToDo}
}


export {list}