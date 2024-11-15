function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
}

let tarefas = carregarTarefas();

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function adicionarTarefa() {
    const input = document.getElementById('input');
    const descricao = input.value.trim();

    if (descricao !== '') {
        const novaTarefa = {
            descricao: descricao,
            status: false
        };
        tarefas.push(novaTarefa);
        salvarTarefas(); 
        atualizarLista();
    }

    input.value = ''; 
}

function atualizarLista() {
    const lista = document.getElementById('Lista');
    lista.innerHTML = '';

    tarefas.forEach((tarefa, index) => {
        const listItem = document.createElement('li');
        listItem.className = tarefa.status ? 'completed' : 'pending';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.onclick = () => alterarStatus(index);

        const descricao = document.createElement('span');
        descricao.textContent = tarefa.descricao;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => excluirTarefa(index);

        listItem.appendChild(checkbox);
        listItem.appendChild(descricao);
        listItem.appendChild(deleteButton);
        lista.appendChild(listItem);
    });
}

function alterarStatus(index) {
    tarefas[index].status = !tarefas[index].status;
    salvarTarefas();
    atualizarLista();
}

function excluirTarefa(index) {
    tarefas.splice(index, 1);
    salvarTarefas();
    atualizarLista();
}

window.onload = atualizarLista;