try {
function sum(x, y){
    if (sum === Number){
    return x + y;
    }else if(sum === String)  {
      throw "error"
    }  
    
  }
  console.log(sum("yes", "no"))
}
catch(error){ 
  console.log(error)  
}  
let username = "ebonyeek@gmail.com"
let password = "fatcat123"

try{
 function login(email, passWord){
      if (emai === "ebonyeek@gmail.com" && passWord === "fatcat123" ){
        console.log("you have access")
      }else {
        throw "try again"
      }
  }
} 
catch(error){
  console.log(error)
} 