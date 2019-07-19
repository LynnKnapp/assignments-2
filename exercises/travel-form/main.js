const travel =document.travel
travel.addEventListener("submit", function(event){
    event.preventDefault()
    let firstName = travel.firstName.value
    let lastName = travel.lastName.value
    let age = travel.age.value
    let gender = travel.gender.value
    let location = travel.location.value
    let diet = travel.diet
    let restrictions = []
    for (let i = 0; i < diet.length; i++){
        if (diet[i].checked){
            restrictions.push(diet)
        }
    }
    alert(
        `"First Name" ${firstName}
          "Last Name"  ${lastName} 
          "age:"       ${age} 
          "gender:"    ${gender}
          "location:"  ${location}

    )
})