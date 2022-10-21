let inp = document.getElementById("txt")
let btn = document.getElementById("add")
btn.addEventListener("click",()=>{
let ulist = document.getElementById("ulist")
ulist.innerHTML +=`<li>${inp.value}</li>`
})
