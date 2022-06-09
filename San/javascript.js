//Grocery list
const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const userInput = document.getElementById("userInput");
const allItems = document.getElementById("allItems");

pencil.addEventListener("click",function(){
    allItems.innerHTML = "";
})
userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        addItem();
    }
})
function addItem(){
    var p = document.createElement("p");
    p.innerHTML = "- " + userInput.value;

    p.addEventListener("click", function () {
        p.style.textDecoration = "line-through";
    })
    allItems.insertAdjacentElement("beforeend", p);
    userInput.value = "";
}


//Validating user input
function form_validate() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var regemail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,3})(.[a-z]{2,3})$/;
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
    //Namefield validation
    if(name.value == ""){
        name.style.border = "1px solid red";
        return false;
    }
    //Email validation
    else if(!regemail.test(email.value)){
        email.style.border = "1px solid red";
        return false;
      }
    //Subject field validation
    else if(subject.value == ""){
        subject.style.border = "1px solid red";
        return false;
    }
    //Message field validation
    else if(message.value == ""){
        message.style.border = "1px solid red";
        return false;
    }
    else{
        return true;
    }
}