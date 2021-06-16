//Interfaces --------------------

// function showTodo(todo: {
//     title: string, 
//     text: string})
//     {
//     console.log(todo.title + " : " + todo.text)
// }
// var myTodo = {title: "Kei", text: "Moto"};
// showTodo(myTodo);

interface Todo{
    title: string,
    text: string
}

function showTodo(todo: Todo){
    console.log(todo.title + " : " + todo.text)
}
var myTodo = {title: "Kei", text: "Moto is going to V88"};
showTodo(myTodo);