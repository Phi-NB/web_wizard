let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#bar");
let close_basic = document.querySelector(".close-basic");
let basic = document.querySelector(".basic");
let basic_example_step = document.querySelector(".basic-example-step");
let up_down_basic = document.querySelector(".up-down_basic");
let close_validation = document.querySelector(".close-validation");
let validation = document.querySelector(".validation");
let validation_example_step = document.querySelector(".validation-example-step");
let up_down_validation = document.querySelector(".up-down-validation");
let option_basic = document.querySelector(".option_basic");
let config_option = document.querySelector(".config-option");
let options_validation = document.querySelector(".options-validation");
let config_option_validation = document.querySelector(".config-option-validation");



closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
});

close_basic.addEventListener("click", ()=>{
  basic.classList.toggle("close");
});

close_validation.addEventListener("click", ()=>{
  validation.classList.toggle("close");
});

up_down_basic.addEventListener("click", ()=>{
  basic_example_step.classList.toggle("close");
  basic.classList.toggle("close-basic-example-step");
});

up_down_validation.addEventListener("click", ()=>{
  validation_example_step.classList.toggle("close");
});

option_basic.addEventListener("click", ()=>{
  config_option.classList.toggle("open");
});

options_validation.addEventListener("click", ()=>{
  config_option_validation.classList.toggle("open");
});

