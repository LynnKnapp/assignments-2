import React from 'react';
import Friend from './Friend';

const FriendList =(props)=>{

    const friend = [
        {
          name: "Ben",
          age: 29,
          pets: [
            {
              name: "spot",
              breed: "tabby"
            },{
              name: "John Johnson",
              breed: "husky"
            },{
              name: "Bear the bear",
              breed: "Grizzly"
            }
          ]
        },{
          name: "Bob",
          age:  32,
          pets: [
            {
              name: "Sally",
              breed: "Australian Shepard"
            }
          ]
        },{
          name: "Marcus",
          age: 25,
          pets: [
            {
              name: "Indy",
              breed: "Akita"
            },{
              name: "Anna",
              breed: "persian cat"
            }
          ]
        },{
          name: "Jacob",
          age: 20,
          pets: [
            {
              name: "fluffy",
              breed: "sphynx cat"
            },{
              name: "patches",
              breed: "sphynx cat"
            },{
              name: "tiger",
              breed: "sphynx cat"
            },{
              name: "oscar",
              breed: "sphynx cat"
            }
          ]
        }
      ]
    
      const mappedFriendlist = friend.map((friend,i) =>
                                             <Friend
                                                key ={i + friend.name}
                                                name ={friend.name} 
                                                age ={friend.age}
                                                pets ={friend.pets}
                                                />
                                            )
                                        
        return (
            <div className = 'friend-container'>
               {mappedFriendlist} 
            </div>            
        )
}

export default FriendList

                                
