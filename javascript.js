const inputTarefa = document.querySelector('#inputTarefa')
const listaDeTarefas = document.querySelector('#listartarefas')
const listavazia = document.querySelector('.listavazia')

let minhaListaDeTarefa = [];

function addTarefa(){
    if(inputTarefa.value == ""){
        alert("Digite uma nova tarefa!")
    }else{
        minhaListaDeTarefa.push({
            tarefa: inputTarefa.value,
            concluida: false
        })
        inputTarefa.value = ''
        inputTarefa.focus()
        document.getElementById('listavazia').style.display = 'none'
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
    if(minhaListaDeTarefa.length == 0){
        document.getElementById('listavazia').style.display = '';
    }
    exibirTarefas()
}

function tarefaConcluida(posicao){
    minhaListaDeTarefa[posicao].concluida = !minhaListaDeTarefa[posicao].concluida
    exibirTarefas()
}

inputTarefa.addEventListener('keydown', function(e) {
    if(e.keyCode == 13){
        addTarefa()
    }
})