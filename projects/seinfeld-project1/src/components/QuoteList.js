import React, {Component} from 'react'
import './styles.css'
import axios from 'axios'
import Quiz from './Quiz'
import Quote from './Quote'
import HandleSubmit from './HandleSubmit'
import Answer from './Answer.js'


class QuoteList extends Component{
    constructor(){
        super()
        this.state ={
            quotes: [],
            userSelection: "",
            currentQuoteIndex: 0,
            showimage: '',
            answerChoice: false
        }
    }
    componentDidMount(){
        this.getQuotes()
    }
    handleChange=(event)=>{
     
        this.setState({
            userSelection: event.target.value
        })
    }


    handleSubmit =(event,props)=>{ 
        event.preventDefault()
        //  this.setState({answerChoice = false})
        // console.log(props.userSelection)
        if(this.state.userSelection === this.state.quotes[this.state.currentQuoteIndex].author){
            this.setState({answerChoice: true})
            
        } else {
            console.log('wrong answer')
            // answerChoice = false
        }
        this.setState(prevState => {
            console.log(this.state.answerChoice)
         return {
            currentQuoteIndex: prevState.currentQuoteIndex + 1
         }

        })



        // After saying either correct or incorrect
        // set state and increment the currentQuoteIndex prevState.cureentquotein +1 

        // if(mappedQuotes[0] === charArr[5].name && userSelection === charArr[5]){
        //     // <Characters img={props.img}/>
        // }else{
        //     console.log('Wrong answer,try again.')
        // }
        // if(mappedQuotes[1] === charArr[5].name && userSelection === charArr[5]){
        //     console.log('display img')
        // }else{
        //     console.log('try again')
        // }
    }
    
    getQuotes = () => { axios.get('https://seinfeld-quotes.herokuapp.com/quotes')
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
        const mappedQuotes = quotesArr.map(quote => <Quiz userSelection={this.state.userSelection} answer={quote.author} answerChoice={this.state.answerChoice} quote={quote.quote} key={Quote._id} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>)
        return(
            <div>
                {mappedQuotes[this.state.currentQuoteIndex]}
            </div>
        )
    } 
}
export default QuoteList