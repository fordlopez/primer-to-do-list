const data = [
    { id: 1, texto: " among us", estaCompletado: true },
    { id: 2, texto: "segundo texto", estaCompletado: true }
]


let valorInput = document.querySelector('#inputarea')
let btn = document.querySelector('#btntarea')
let tarea = document.getElementById("tarea")
let contador = 0

if (data.length > 0) {
    for (let i = 0; i <= data.length - 1; i++) {

        let div = document.createElement('div')
        div.className = "d-flex w-50 justify-content-between align-items-baseline border-2"

                let checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute("id",data[i].id)

        let label = document.createElement('label')

        if(data[i].estaCompletado){
            checkbox.checked=true
             label.classList.add("text-decoration-line-througn")
        }else{
            checkbox.checked=false;
            label.classList.remove("text-decoration-line-througn")
        }
        checkbox.setAttribute('checked',data[i].estaCompletado)
        checkbox.className = "me-2"

        checkbox.addEventListener('click', (event) => {
            console.log(event.target.id)
            let TareaABuscar=data.find(item=> item.id ==event.target.id)
            TareaABuscar.estaCompletado=!TareaABuscar.estaCompletado
            if(TareaABuscar.estaCompletado){
                label.chassList.add('text-decoration-line-through')
            }else{
                  label.classList.remove("text-decoration-line-through")
            }
           



        })




        ////dibujar el sup
        let sup = document.createElement('sup')
        sup.textContent = 'x'
        sup.addEventListener('click', () => {
            checkbox.remove(),
                sup.remove(),
                label.remove()
        })

        label.textContent = data[i].texto
        div.append(checkbox)
        div.append(label)
        div.append(sup)
        valorInput.value = ""
        tarea.append(div)


    }
}




///agregar elementos al div
btn.addEventListener('click', (event) => {

    ///dibujando div de tara
    let div = document.createElement('div')
    div.className = "d-flex w-50 justify-content-between align-items-baseline border-2"

    let label = document.createElement('label')

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.className = "me-2"
    checkbox.addEventListener('click', () => {
         console.log(event.target)
        label.classList.toggle("text-decoration-line-through")
        ///pendiente
    })




    ////dibujar el sup
    let sup = document.createElement('sup')
    sup.textContent = 'x'
    sup.addEventListener('click', () => {
        checkbox.remove(),
            sup.remove(),
            label.remove()
    })

    label.textContent =valorInput.value
    div.append(checkbox)
    div.append(label)
    div.append(sup)
    data.push({id:data.length+1,texto: valorInput.value, estaCompletado:false})
    valorInput.value = ""
    tarea.append(div)
   


})


