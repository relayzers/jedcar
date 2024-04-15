const url = "http://localhost:3000/users"
const allCars = document.querySelector(".dataCar")
const loginBtn = document.querySelector("#loginBtn")
const barmenuBtn = document.getElementById("menuBtn")
const submitBtn = document.getElementById("button")
const showMenu = document.getElementById("showmenu")
const submitForm = document.getElementById("submitForm")

submitBtn.onclick = ()=>{
if(submitBtn.style.background === 'green'){
Swal.fire({
title: "Əla",
text: "Qeydiyyat Tamamlandı.",
icon: "success"
});
submitBtn.style.background = 'red'
}else{
  submitBtn.style.background = 'green'
}
}
