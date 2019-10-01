import React, {Component} from 'react'
import axios from 'axios'
import './styles.css'
import Quiz from './Quiz'
import Quote from './Quote'


class QuoteList extends Component{
    constructor(){
        super()
        this.state ={
            quotes: []
        }
    }
    componentDidMount(){
        this.getQuotes()
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    getQuotes =()=>{ axios.get(' https://seinfeld-quotes.herokuapp.com/quotes')
            .then(response =>{
                const favorites = [421,389,396,398,303]
                const bestQuotes = response.data.quotes.filter((item, i)=>{
                    return favorites.includes(i)
                })

                this.setState({
                    quotes: bestQuotes 
                })
                console.log(this.state.quotes)
            })
            .catch(error => console.log(error))
            
    } 
    render() {  
        const quotesArr = this.state.quotes
        const mappedQuotes = quotesArr.map(quote => <Quiz answer={quote.author} quote={quote.quote} key={Quote._id}/>)
        return(
            <div>
                {mappedQuotes}
                <Quiz {...this.props}/>    
            </div>
        )
    } 
}
export default QuoteList