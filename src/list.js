const toDo = (date, title, category) => {
    return { date, title, category }
}

const create = (name) => {
    let toDos = [];
    let listName = name;
    const getToDos = () => {
        return toDos;
    };
    const addToDo = (date, title) => {
        toDos.push(toDo(date, title, listName))
    };
    return {listName, getToDos, addToDo}
}

export {create}