
let form = document.getElementById ("registration")

form.addEventListener ("submit",function(ivent){
    ivent.preventDefault();
    let error = {
    };

let fname = document.getElementById("fname").value;
if (fname == "") {
  error.fname = "shecdoma";
}

let lname = document.getElementById("lname").value;
if(lname ==""){
    error.lname = "sheiyvane saxeli";
}

let phone = document.getElementById("tel").value;
let phonesharow = document.getElementById("tel")
if(phone.length < 9 || typeof phone === "numbers"){
    error.tel = "ararara"
    phonesharow.style.boxShadow = "5px 5px 10px red";
}else{
    phonesharow.style.boxShadow = "5px 5px 10px green";
}

let password = document.getElementById("password").value;
let Rpassword = document.getElementById("Rpassword").value;
if(password !== Rpassword|| password == ""|| Rpassword == "" ){
    error.password = "parolebi aremtxveva";
    
}

let clic = false;
ivent.target.querySelectorAll('[name= "card"]').forEach(element => {
    if (element.checked){
        clic = true;
    }
});
if (!clic){
    error.card = "monishne romelime";
   
}
ivent.target.querySelectorAll(".text").forEach(clearerror => {
    clearerror.innerText= "";
})
for(let objeqt in error){
    let perror = document.getElementById("text_"+objeqt);
    if(perror){
        perror.innerText = error[objeqt];
    }
}
if(Object.keys(error).length == 0){
    ivent.target.submit();
}

})
let eye = document.getElementById("fa-eye-slash");
let eyePassword = document.getElementById("password");
eye.addEventListener("click", function (){
    if(eyePassword.type == "password"){
        eyePassword.setAttribute("type", "text");
        eye.classList.add("fa-eye");
        eye.classList.remove("fa-eye-slash");
    }else{
        eyePassword.setAttribute("type", "password");
        eye.classList.add("fa-eye-slash");
        eye.classList.remove("fa-eye");
    }
})

let inputemail = document.getElementById("mail");
inputemail.addEventListener("keydown", function(){
    let emailvalue = document.getElementById("mail").value;
    let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailvalue.match(email) ) {
        inputemail.style.boxShadow = "5px 5px 10px green";
    }else{
        inputemail.style.boxShadow = "5px 5px 10px red";
    }
})







    
    
