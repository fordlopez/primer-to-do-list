let valorInput=document.querySelector('#inputarea')
let btn=document.querySelector('#btntarea')
let tarea=document.getElementById("tarea")
let contador=0
 



///agregar elementos al div
btn.addEventListener('click', (event) =>{

///dibujando div de tara
let div=document.createElement('div')
div.className="d-flex w-50 justify-content-between align-items-baseline border-2"

let label=document.createElement('label')

let checkbox=document.createElement("input")
checkbox.setAttribute("type","checkbox")
checkbox.className="me-2"
checkbox.addEventListener('click',()=>{
label.classList.toggle("text-decoration-line-through")
///pendiente
})




////dibujar el sup
let sup=document.createElement('sup')
sup.textContent='x'
sup.addEventListener('click',()=>{
    checkbox.remove(),
    sup.remove(),
    label.remove()
})

label.textContent=valorInput.value
div.append(checkbox)
div.append(label)
div.append(sup)
valorInput.value=""
tarea.append(div)


})


