const form = document.getElementById("addToDo")
let toDoList = []

axios.get("https://api.vschool.io/lynnknapp/todo")
    .then((response) => {
        // toDoList.push(...response.data)
        toDoList = response.data
    })
    .catch(error => {
        return console.log(error);
    })
const postToDo = (newTodo) => {
    axios.post("https://api.vschool.io/lynnknapp/todo/", newTodo).then((response) => {
        toDoList.push(response.data)
        listToDos([response.data])
    })
}

function listToDos(todos, updated) {
    console.log("running list todos func")
    if(updated){
        document.getElementById('todos').innerHTML = ''   
     }
    todos.forEach((todo) => {
        console.log("todo item ")
        let toDoDiv = document.createElement("div")

        let title = document.createElement("h1")
        title.innerText = todo.title

        let description = document.createElement("p")
        description.innerText = todo.description

        let price = document.createElement("p2")
        price.innerText = todo.price

        let img = document.createElement("img")
        img.src = todo.imgUrl || ""
        img.style.width = '70%'
        console.log(todo)
        // img.setAttribute("src", todo.imgUrl)
        let checkbox = document.createElement("input")


        const delBtn = document.createElement("button")
        delBtn.textContent = "delete"
        delBtn.addEventListener("click", function () {
        console.log("add delBtn event listener")
            
            event.preventDefault()
            toDoDiv.style.display = 'none'
            axios.delete("https://api.vschool.io/lynnknapp/todo/" + todo._id)
                .then(response => {
                    // getToDos()
        console.log("deleted")

                    console.log(response.data)
                })
                .catch(error => console.log(error))
        })

        checkbox.addEventListener("click", function () {
        console.log("add click listener on checkbox")

            event.preventDefault()
            checkToDo(todo)
            axios.get(`https://api.vschool.io/lynnknapp/todo`).then(res => {
                toDoList = res.data
            })
        })
        if (todo.completed) {
            checkbox.checked = true
            title.style.textDecoration = "line-through"
        } else {
            title.style.textDecoration = "none"
        }
            toDoDiv.setAttribute("id", "toDoDiv")
            checkbox.setAttribute('type', 'checkBox')
            img.setAttribute('width', '60px')
            toDoDiv.appendChild(title)
            toDoDiv.appendChild(description)
            toDoDiv.appendChild(price)
            toDoDiv.appendChild(img)
            toDoDiv.appendChild(delBtn)
            toDoDiv.appendChild(checkbox)
    
            document.getElementById("toDoDiv").appendChild(toDoDiv)

        })
    }
     


   checkToDo = oldTodo => {
       axios.put(`https://api.vschool.io/lynnknapp/todo/${oldTodo._id}`,{completed : !oldTodo.completed}).then(response =>{
           const newList = toDoList.map(todo => todo._id === oldTodo._id ?
               response.data: todo)
               listToDos(newList, true)
       })
    }
    document.form.addEventListener("submit", function (event) {
        console.log(fhdusia)
        event.preventDefault()
        let title = form.title.value
        let description = form.description.value
        let price = form.price.value
        let imgUrl = document.addTodo.imgUrl.value
    
        let newTodo = {
            title,
            description,
            price,
            imgUrl
        }
        postToDo(newTodo)
    })



    // const postToDo = (newTodo) => {
    //     axios.post("https://api.vschool.io/lynnknapp/todo/", newTodo).then((response) => {
    //         toDoList.push(response.data)
    //         listToDos([response.data])
    //     })
    // }
   
    





