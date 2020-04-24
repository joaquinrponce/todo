const saveList = function(listDB, list) {
    listDB.doc(list.listName).set({
    listName: list.listName,
    toDos: JSON.stringify(myList.getToDos())
})};

const getLists = function(listDB) {
listDB.get().then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });}).catch(err => {
    console.log('Error getting documents', err);
})};

var db = firebase.firestore();

//var docRef = db.collection("users")

//var allDocs = docRef.get().then(snapshot => {
//    snapshot.forEach(doc => {
//        console.log(doc.id, '=>', doc.data());
//    });
//})
////.catch(err => {
//    console.log('Error getting documents', err);
//})


let listDB = db.collection('lists')

let newList = list.create('Other');

const addThem = function (list, array) {
    for (let i = 0; i < array.length; i++) {
        let item = JSON.parse(array[0]);
        list.addToDo(item.date, item.title)
    }
}

const grabLists = function() {
    let array = [];
    listDB.get().then(snapshot => {
    snapshot.forEach(doc => {
        let parse = JSON.parse(doc.data().toDos);
        parse.forEach(item => {
            array.push(item)
        })
    });}).catch(err => {
    console.log('Error getting documents', err);
})
    return array
}

console.log(grabLists())