let data = []


if(JSON.parse(localStorage.getItem('data' ))){
   data=JSON.parse(localStorage.getItem('data'))
}else{
    localStorage.setItem('data',JSON.stringify([]))
}



let valorInput = document.querySelector('#inputarea')
let btn = document.querySelector('#btntarea')
let tarea = document.getElementById("tarea")

const getNextId=()=>{
    return data.length>0? data[data.length-1]. id + 1:1
}
//como funciona esta parte
const DibujarElementos = (info = null, i = null) => {

    let div = document.createElement('div')
    div.className = "d-flex w-50 justify-content-between align-items-baseline border-2"

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.className = 'checkbox me-2'

    let label = document.createElement('label')

    let sup = document.createElement('sup')
    sup.className="eliminar"
    sup.textContent = 'x'
    
/// que hace este if
    if (info == null || i == null) {

        checkbox.setAttribute("id", getNextId())
        sup.setAttribute('id',getNextId())
        label.textContent = valorInput.value

    } else {

        checkbox.setAttribute("id", info[i].id)
        label.textContent = info[i].texto
         sup.setAttribute('id',info[i].id)

    }

    div.append(checkbox)
    div.append(label)
    div.append(sup)

    return { div, checkbox, label, sup }

}

const dibujaTodo = () => {

    if (data.length > 0) {

        for (let i = 0; i < data.length; i++) {

            const { div, checkbox, label } = DibujarElementos(data, i);

            if (data[i].estaCompletado) {

                checkbox.checked = true
                label.classList.add("text-decoration-line-through")

            } else {

                checkbox.checked = false
                label.classList.remove("text-decoration-line-through")

            }

            tarea.append(div)
        }
    }
}

btn.addEventListener('click', () => {
/// como funciona est push
    data.push({id:  getNextId(),
        texto: valorInput.value,
        estaCompletado: false
})
localStorage.setItem('data',JSON.stringify(data))
    tarea.innerHTML = ""

    dibujaTodo()

    valorInput.value = ""

})

////como funciona todo el boton tarea
tarea.addEventListener("click", (event) => {

    if (event.target.classList.contains("checkbox")) {

        let TareaABuscar = data.find(
            item => item.id == event.target.id
        )

        TareaABuscar.estaCompletado =
            !TareaABuscar.estaCompletado

        if (TareaABuscar.estaCompletado) {

            event.target.nextSibling.classList.add(
                'text-decoration-line-through'
            )

        } else {

            event.target.nextSibling.classList.remove(
                "text-decoration-line-through"
            )
        }

    }

    else if (event.target.classList.contains('eliminar')) {

        event.target.parentElement.remove()

        data = data.filter( item => item.id != event.target.id)
    }
})

dibujaTodo()

/*       sup.addEventListener('click', () => {
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

*/






/* 
btn.addEventListener('click', (event) => {

    
    let div = document.createElement('div')
    div.className = "d-flex w-50 justify-content-between align-items-baseline border-2"

    let label = document.createElement('label')

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.className = "me-2"
    checkbox.addEventListener('click', () => {
         console.log(event.target)
        label.classList.toggle("text-decoration-line-through")
       
    })





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


 */

