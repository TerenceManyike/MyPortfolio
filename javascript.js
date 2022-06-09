//Downloading my resume
function cv_print(){
    //Hiding the download button
    var disapear = document.getElementById("cv_download");
    disapear.style.display = "none";
    //Download A4 page CV
    window.print();
  }
//Forn validation
//user input validation
function word_validate(){

  var number = document.getElementById("cell");
  var email = document.getElementById("email");
  var profile = document.getElementById("profile");
  var sskill = document.getElementById("sskill");
  var duties = document.getElementById("duties");
  var regno = /[0]\d{9}/;
  var regemail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,3})(.[a-z]{2,3})$/;

  //Phone number validation
  if(!regno.test(number.value)){
    number.style.border = "1px solid red";
    return false;
  }
  //Email validation
  else if(!regemail.test(email.value)){
    email.style.border = "1px solid red";
    return false;
  }

  //text areas validation
  else if(profile.value == ""){
    profile.style.border = "1px solid red";
    return false;
  }
  else if(sskill.value == "") {
    sskill.style.border = "1px solid red";
    return false;
  }
  else if(duties.value == ""){
    duties.style.border = "1px solid red";
    return false;
  }
  else if(profile.value.length > 300){
    profile.style.border = "1px solid red";
    return false;
  }
  else if(sskill.value.length > 65){
    profile.style.border = "1px solid red";
    return false;
  }
  else if(duties.value.length > 130){
    profile.style.border = "1px solid red";
    return false;
  }
  else{
    return true;
  }
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