// import React from 'react'

// const Square = (props) => {
//     const boxStyle ={
//         backgroundColor: props.color
//     }
//     return(
//         <div className = 'square' style ={boxStyle}>
            
//         </div>
//     )
// } 


// export default Square

import React from 'react'
class Square extends React.Component{
   constructor(props){
       super(props)
       this.state = {
           origColor: this.props.color,
           boxColor: this.props.color
       }
   }
   changeColor = () => {
       this.setState(prev => {
           if (prev.boxColor === prev.origColor){
               return {boxColor: 'black'}
           } else {
               return {boxColor: prev.origColor}
           }
       })
   }
render(){
   return(
       <div className='square' style={{background: this.state.boxColor}} onClick={this.changeColor}></div>
   )
}
}
export default Square
