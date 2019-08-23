import React  from 'react'
import axios from 'axios'
import TodoList from './TodoList'


class App extends React.Component{
    constructor(){
        super()
        this.state ={
            todos:[{
                completed: false,
                _id: "",
                title: "",
                description: "",
                price: 0,
                imgUrlcd: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqs-Jq9vh6SBlPcwKZAv84wq9TW9DcBUZ3kqd3TNlgWKfWcYi",
            }]

        }
    }
    componentDidMount(){
        axios.get('https://api.vschool.io/lynnknapp/todo')
            .then(res =>{
                this.setState({
                    todos: res.data
                })
            })
    }
    render(){
        return(
        <div>
            <h1>Todos</h1>
            <TodoList array= {this.state.todos}/>
        </div>
        )
    }

}
export default App