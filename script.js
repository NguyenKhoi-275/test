function openPage(id,btn){

document.querySelectorAll(".page")
.forEach(x=>x.classList.remove("show"));


document.querySelectorAll(".menu")
.forEach(x=>x.classList.remove("active"));


document.getElementById(id)
.classList.add("show");


btn.classList.add("active");

}
