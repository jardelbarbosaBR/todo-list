const inputTarefa = document.querySelector('#inputTarefa')
const listaDeTarefas = document.querySelector('#listartarefas')

let minhaListaDeTarefa = [];

function addTarefa(){
    if(inputTarefa.value == ""){
        alert("Adcione uma nova tarefa")
    }else{
        minhaListaDeTarefa.push({
            tarefa: inputTarefa.value,
            concluida: false
        })
        inputTarefa.value = ''
        exibirTarefas()
    }
}

function exibirTarefas() {
    let novaLi = ''
    minhaListaDeTarefa.forEach((intem, posicao) =>{
        novaLi = novaLi + `
                <li class="list-group-item d-flex justify-content-between align-items-center ${intem.concluida && "done"}">
                    <div class="d-flex align-items-center">
                        <img class="me-3" src="img/concluida.png" id="icon-concluida" onclick="tarefaConcluida(${posicao})">
                        ${intem.tarefa}
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

function tarefaConcluida(posicao){
    minhaListaDeTarefa[posicao].concluida = !minhaListaDeTarefa[posicao].concluida
    exibirTarefas()
}