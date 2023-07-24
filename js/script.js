// hamburgure Menue
const navEl = document.querySelector('.nav');
const hamburgerEl= document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle ("nav--open");
   hamburgerEl.classList.toggle("hamburger--open");   
});

navEl.addEventListener('click', () => {
    navEl.classList.remove ("nav--open");
    hamburgerEl.classList.remove("hamburger--open");    
});

// Dark Mode and Light Mode
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
toggle.addEventListener('click', function() {
 this.classList.toggle('bi-moon-fill');  
  if (this.classList.toggle('bi-brightness-high-fill')) {
   body.style.background='white' ;
   body.style.color='black';
   body.style.transition='2s';
  }else{
body.style.background= 'black';
body.style.color='white';
body.style.transition='2s';
  }
});
// Form Changing
const formOpenBtn = document.querySelector("#form-open");
 home = document.querySelector(".home");
 formContainer = document.querySelector(".form_container");
 formCloseBtn = document.querySelector(".form_close");
signupBtn = document.querySelector("#signup");
loginBtn = document.querySelector("#login");
 pwShowHide = document.querySelectorAll(".pw_hide");

 formOpenBtn.addEventListener("click", ()=> home.classList.add("show"));
 formCloseBtn.addEventListener("click", ()=> home.classList.remove("show"));

 pwShowHide.forEach((icon) => {
  icon.addEventListener("click",() => {
    let getPwInput = icon.parentElement.querySelector("input"); 
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
    getPwInput.type = "password"; 
    icon.classList.replace("uil-eye", "uil-eye-slash"); 
    }
  });
 });

 signupBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  formContainer.classList.add("active");
 });
 loginBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  formContainer.classList.remove("active");
 });