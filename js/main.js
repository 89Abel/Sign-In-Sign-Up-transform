
var signin = document.getElementById("sign-in");
var signup = document.getElementById("sign-up");
var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");

// Add trasnform effect to swipe login & register classes
function register(){
    signin.style.left = "-300px"
    signup.style.left = "185px";
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');

}
function login(){
    signin.style.left = "85px"
    signup.style.left = "-185px";
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
}

// Password Hide and Show for Sign In input 
const pwFeild = document.querySelector(".right_section_inputs input[type ='password']"),
      toggleBtn = document.querySelector(".right_section_inputs i.bx-show"),
      toggleCn = document.querySelector(".right_section_inputs i.bx-hide");


      toggleBtn.onclick = () =>{
        if(pwFeild.type == "password"){
            pwFeild.type = "text";
            toggleBtn.classList.add('active');
            toggleCn.classList.add('active');
        }else{
            pwFeild.type = "password";
        }
      }
      toggleCn.onclick = () =>{
        if(pwFeild.type == "text"){
            pwFeild.type = "password";
            toggleCn.classList.remove('active');
            toggleBtn.classList.remove('active');
        }else{
            pwFeild.type == "text";
        }
      }