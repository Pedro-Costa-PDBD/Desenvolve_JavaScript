let tarefas = [];
function adicionarTarefa() {
    const input = document.getElementById('input');
    const descricao = input.value.trim();

    if (descricao !== '') {
        const novaTarefa = {descricao: descricao, status: false};
        tarefas.push(novaTarefa);
        input.value = '';
        atualizarLista();
    }
}

function atualizarLista() {
    const lista = document.getElementById('lista');
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

        listItem.appendChild(checkbox);
        listItem.appendChild(descricao);
        lista.appendChild(listItem);
    });
}

function alterarStatus(index) {
    tarefas[index].status = !tarefas[index].status;
    atualizarLista();
}