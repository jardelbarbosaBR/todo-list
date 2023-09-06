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
    minhaListaDeTarefa.forEach((intem, posicao) =>{
        novaLi = novaLi + `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <input class="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                        ${intem}
                    </div>
                    <img src="img/fechar.png" id="icon-fechar" onclick="removerTarefa(${posicao})">   
                </li>
            `
    })
    listaDeTarefas.innerHTML = novaLi
}

function removerTarefa(posicao){
    minhaListaDeTarefa.splice(posicao, 1)
    exibirTarefas()
}

