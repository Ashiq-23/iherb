function login(){
    document.querySelector('.login').style.display="flex"
}
function closelogin(){
    document.querySelector('.login').style.display="none"
}
function signup(){
    document.querySelector('.signup').style.display="flex"
}
function closesignup(){
    document.querySelector('.signup').style.display="none"
}
function alertt(){
    var username= document.querySelector('.name').value
    var password= document.querySelector('.pass').value
    if(username=='ashiq'){
        alert("login successfully")
    }
    else{
        alert("wrong username")
    }
}
function sign(){
    var username= document.querySelector('.signupname').value
    if(username=='ashiq'){
        alert("Account is created successfully")
    }
    else{
        alert("Invalid username")
    }
}