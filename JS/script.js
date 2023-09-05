const inputTarefa = document.querySelector('#inputTarefa')
const listaDeTarefas = document.querySelector('#listartarefas')

let minhaListaDeTarefa = [];

function addTarefa(){
    minhaListaDeTarefa.push(inputTarefa.value)
    inputTarefa.value = ''
    exibirTarefas()
}

function exibirTarefas() {
    let novaLi = ''
    minhaListaDeTarefa.forEach((intem) =>{
        novaLi = novaLi + `
                <li class="list-group-item border-0 d-flex align-items-center ps-0">
                    <input class="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                    ${intem}
                </li>
            `
    })
    listaDeTarefas.innerHTML = novaLi
}
