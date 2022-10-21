let inp = document.getElementById("txt")
let btn = document.getElementById("add")
let ulist = document.getElementById("ulist")
btn.addEventListener("click",()=>{
ulist.innerHTML +=`<li>${inp.value}</li>`
})

let delall = document.getElementById("delall")
delall.addEventListener("click",()=>{
    ulist.innerHTML=""
})
