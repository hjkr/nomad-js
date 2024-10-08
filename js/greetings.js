const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")

//const link = document.querySelector("a")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(info) {
    info.preventDefault();
    const username = loginInput.value;
    
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, username)

    paintGreetings()
}


function paintGreetings(){
    username = localStorage.getItem(USERNAME_KEY)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText=`Have a good day ${username}!` 
    
}


function handleLinkClick(info){
    info.preventDefault()
}

loginForm.addEventListener("submit", onLoginSubmit)

//link.addEventListener("click", handleLinkClick)

const savedUsername = localStorage.getItem(USERNAME_KEY)


if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings()

}




