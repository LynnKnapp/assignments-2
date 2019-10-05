import React from 'react'
import CharacterFacts from './CharacterFacts.js'

 const Characters =(props)=>{
    const charArr = [ {
        name: 'George Costanza',
        img: require('./assets/Screen Shot 2019-09-30 at 3.18.31 PM.png'),
        facts: 'George Louis Costanza is a beloved neurotic character  played by Jason Alexander. He has variously been described as a "short, stocky, slow-witted, bald man"by Elaine Benes and Costanza himself. He is described by Cosmo Kramer as "weak, spineless, man of temptations" and "Lord of the Idiots", also by Costanza himself. George and Jerry  have been friends since fourth grade and remained friends afterwards. He is friends with Jerry Seinfeld, Cosmo Kramer, and Elaine Benes. The character was originally based on Seinfeld co-creator Larry David but is surnamed after Jerry Seinfeld"s real-life New York friend, Mike Costanza. Nothing ever seems to go right for poor Georgie, from keeping a girlfriend to holding down a job.'  
    },{
        name: 'Jerry Seinfeld',
        img: require('./assets/puffy-1024x640.jpg'),
        facts: "Jerry Seinfeld is the main protagonist and title character of the sitcom. The straight man among his group of friends, this semi-fictionalized version of comedian Jerry Seinfeld was named after, co-created by, based on, and played by Seinfeld himself. The series revolves around Jerry's misadventures with his best friend George Costanza, neighbor Cosmo Kramer, and ex-girlfriend Elaine Benes. He is usually the voice of reason amidst his friends antics and the focal point of the relationship. An eternal optimist, he rarely runs into major personal problems. Jerry is the only main character on the show to maintain the same career a stand-up comedian, throughout the series.  He is the most observational character, sarcastically commenting on his friends' quirky habits." 
    },{
    
        name:'Elaine Benes',
        img: require('./assets/Screen Shot 2019-09-30 at 3.32.15 PM.png'),
        facts: "Elaine Marie Benes is played by Julia Louis-Dreyfus. Elaine's best friend is her ex-boyfriend Jerry Seinfeld, and she is also good friends with George Costanza and Cosmo Kramer. Elaine is normally intelligent and assertive, but also quite superficial. She's 'one of the boys', and despite the troubles they go through as a group, she remains the closest female friend to the main male cast throughout the series. Her traits are usually edgy and neurotic and she has a tendency to easily get angry with almost everybody, and has a habit of shoving people when displaying extreme emotion."  
    },{    
        name:'Kramer',
        img: require('./assets/Screen Shot 2019-09-30 at 3.26.31 PM.png'),
        facts: "Cosmo Kramer, just referred to as 'Kramer', is noted as the most  funny character in the sitcom, played by Michael Richards.  He is loosely based on comedian Kenny Kramer, who was Larry David's ex-neighbor across the hall.  He is Jerry's neighbor and friend from across the hall and friends with George and Elaine. During th series, Kramer has no visible means of support; what few jobs he holds seem to be nothing more than larks. He is a lovable rogue, his trademarks include his upright hairstyle and vintage wardrobe, whose combination led Elaine to characterize him as a 'hipster doofus' his taste in fresh fruit; love of occasional smoking, Cuban cigars in particular; bursts through Jerry's apartment door without even bothering to knock first; frequent pratfalls and penchant for nonsensical, percussive outbursts of noise to indicate skepticism, agreement, irritation and a variety of other feelings. He's been described as 'an extraordinary cross between Eraserhead and Herman Munster'."
    },{   
        name: 'Frank Costanza',
        img: require('./assets/Screen Shot 2019-09-30 at 3.14.42 PM.png'),
        facts: "Frank Costanza (played by Jerry Stiller) is George Costanza’s father on Seinfeld. As an Italian native, born in Tuscany, he brought a wealth of culture (perhaps culture shock) to the show and added dimension to George's character that was necessary to understand George's neurotic, paranoid and iracible personality, that was just like like Frank himself.  He was not necessarily a “warm and fuzzy” father. To the point, brisk, and sometimes abrasive, he dominated George and had a knack for guilt trips and eccentric likes and dislikes.  Some fun facts about Frank Costanza include his fluency in Korean, his love for food, and his work in as an Army cook. He’s also a fan of Latin American vinyl and he created the first man-bra named the 'Bro'for Kramer in “The Doorman.”"
    },{   
        name: 'Newman',
        img: require('./assets/Screen Shot 2019-09-30 at 3.35.22 PM.png'),
        facts: "Newman's role is primarily as Jerry's nemesis and a frequent collaborator in Kramer's elaborate and bizarre schemes. Often described as Jerry's 'sworn enemy' ('The Andrea Doria'), Newman is cunning and often schemes against Jerry. He speaks often in a humorously sinister tone (mainly to Jerry). Jerry refers to Newman as 'pure evil' on more than one occasion. Jerry's trademark greeting for Newman is to say 'Hello, Newman' in a snide and condescending tone, while Newman responds 'Hello, Jerry' in a falsely jovial tone. Helen Seinfeld also greets Newman in the same way."
        
    }
    ]   

    const getImage = () => {
        for(let i =0; i <charArr.length; i++){
           if(props.userSelection === charArr[i].name)    
      return  charArr[i].img
        }
    }
    return(

        <div className = 'characters-container'>
            {
                (props.answerChoice === true && props.hasAnswered === true)
                // (props.userSelection === props.author) 
                ? 
                <div> 
                    <h2>{props.author}</h2>
                    <img className = 'image'src=
                        {getImage()}
                        alt='correct'/>  
                </div>
            :
            <div>
                <h1>Your wrong, try again.</h1>     
            </div>
            }
        </div>
    )
}
    
    export default Characters
  
  