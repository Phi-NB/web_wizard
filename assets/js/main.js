
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#bar");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});
