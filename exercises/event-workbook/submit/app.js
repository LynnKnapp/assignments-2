const submitMe = document.submitMe

submitMe.addEventListener("submit", function(event){
    event.preventDefault()
    let firstName = submitMe.firstName.value
    let lastName = submitMe.lastName.value
    let age =   submitMe.age.value
    let race=   submitMe.race.value
    let gender= submitMe.gender.value
    let email=  submitMe.email.value
    let phone=  submitMe.phone.value



    window.alert(`
          first name: ${firstName}
          last name:  ${lastName}
          age: ${age}
          race: ${race}
          gender: ${gender}
          email: ${email}
          phone: ${phone}

    `)
})




// The "submit" event refreshes your brower by default
// use "e.preventDefault" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
