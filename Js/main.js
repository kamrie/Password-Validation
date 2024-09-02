let errorParagraph= document.getElementById("error")
// console.log(errorParagraph)

// function purchase(){
//     console.log("button clicked")
//     errorParagraph.textContent= "Something went wrong, please try again"
// }
const form = document.querySelector('form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password1 = document.querySelector('#password1')
const password2 = document.querySelector('#password2')
let emailRegX = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let passwordRegX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&.])[A-Za-z\d@$!%*?&.]{8,}$/


// function(){ }
// () =>{ }
function handleFormSubmit(e){
    e.preventDefault()
    if(username.value === "" || email.value === "" || password1.value === "" || password2.value === ""){
        errorParagraph.textContent = "Please dear validate all fields😆😊😁😜🤣😆"
        // console.log("waka")
        setTimeout(() => { errorParagraph.textContent = "" },1500)

    }else if(password1.value !== password2.value){
        errorParagraph.textContent = "password fields do not match"
        setTimeout(() => {  
            errorParagraph.textContent = ""
        },1500)           
    } else if(!emailRegX.test(email.value)){
        errorParagraph.textContent = "Invalid email"
        setTimeout( () => {
            errorParagraph.textContent = ""
        }, 2000)
    }else if(!passwordRegX.test(password1.value)){
        errorParagraph.textContent = "Weak password"
        setTimeout( () => {
            errorParagraph.textContent = ""
        }, 2000)
    }
}


// setTimeout(function(){
// })
form.addEventListener('submit', handleFormSubmit)                    

// console.log(Math.ceil(did(2,3, 8)))


// function did(first,second,third){
//     return first+second / third
// }

