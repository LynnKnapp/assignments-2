import React,{Component} from 'react'
import axios from 'axios';


class App extends Component{
    constructor(){
        super()
        this.state ={
            quotes: []
        }
    }
    componentDidMount(){
        axios.get(' https://seinfeld-quotes.herokuapp.com/quotes')
            .then(response => {
                this.setState({
                    //the response goes into the quotes array
                    quotes: response.data.quotes 
                }, () => console.log(this.state))
            })
            .catch(error => console.log(error))
    }
    render(){
        const mappedQuotes = this.state.quotes.map(quote =>{
            return(
                <div key = {quote._id}>
                    <p>{quote.author}</p>
                    <p>{quote.quote}</p>
                    <p>{quote.image}</p>
                </div>
            )
        })
        return(
            <div>
                {mappedQuotes}
            </div>
        )
    }
}
export default App