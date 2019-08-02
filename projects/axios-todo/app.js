const divContainer = document.getElementById("addToDo")

function getTodos(){
    axios.get("https://api.vschool.io/lynnknapp/todo")
        .then(response =>{
            const todoArr = response.data
            console.log(response)
            listToDos(todoArr)
        })  
               
}
    getTodos()
function listToDos(todos){
    document.getElementById("divContainer").innerHTML = ""
    for(let i = 0; i < todos.length; i++){
        const todoContainer = document.createElement("div")
        todoContainer.classList.add("todoContainer")
        const h1 = document.createElement("h1");
        h1.textContent = todos[i].title

        const img =document.createElement("img")
        img.src =todos[i].imgUrl || ""

        const price =document.createElement("price")
        price.innerText =todos[i].price

        const description =document.createElement("description")
        description.innerText =todos[i].description

        const deleteBtn =document.createElement("button")

        deleteBtn.textContent ="delete"
        deleteBtn.addEventListener("click", function(){
            axios.delete("https://api.vschool.io/lynnknapp/todo/" + todos[i]._id)
            .then (response => {
                getTodos()
                console.log(response.data)
            })
            
            // )
        })



        const checkbox = document.createElement( "input" );
        checkbox.type = "checkbox";
        checkbox.value = "test";
        checkbox.checked =todos[i].completed
        checkbox.addEventListener("click", function(){
            const updates = todos[i].completed
        })    

        axios.put(`https://api.vschool.io/lynnknapp/todo/${todos[i]._id}`,updates) 
        .then (response => {
            getTodos()
            console.log(response.data)
        })
        // .catch (error => console.log(error)
            
    }




    const complete =todos[i].completed
    console.log(complete) 
    if (complete === true){
        h1.className = "strike"
    }else if (complete === false){
        // h1.className = todos[i]
    }

    todoContainer.appendChild(h1)
    todoContainer.appendChild(img)
    todoContainer.appendChild(price)
    todoContainer.appendChild(description)
    todoContainer.appendChild(deleteBtn)
    todoContainer.appendChild(checkbox)
    divContainer.appendChild(todoContainer)

}

const addTodoForm =document["add-todo"]

addTodoForm.addEventListener("submit",function(){
    // event.preventDefault()
    console.log(addTodoForm)
    const todoImgUrl =addTodoForm.imgUrl.value
    const todoPrice =addTodoForm.price.value
    const todoDescription =addTodoForm.description.value
    const todoTitle =addTodoForm.title.value
    
   
    const newTodo ={
    title: todoTitle,
    imgUrl: todoImgUrl,
    price: todoPrice,
    description: todoDescription,

}
    axios.post("https://api.vschool.io/lynnknapp/todo",newTodo )
        .then(response =>{
            console.log(response)
            getTodos()
        })
        .catch(error => console.log(error))
})  




