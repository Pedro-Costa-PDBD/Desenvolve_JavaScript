function carregarnomesLIKES() {
    const nomesLIKESSalvas = localStorage.getItem('curtidas');
    return nomesLIKESSalvas ? JSON.parse(nomesLIKESSalvas) : [];
}
let curtidas = carregarnomesLIKES();

function salvarCurtidas() {
    localStorage.setItem('curtidas', JSON.stringify(curtidas));
}

function adicionarCurtir() {
    const input = document.getElementById('input');
    const nome = input.value.trim();
    if (nome !== '' && !curtidas.includes(nome)) {
        curtidas.push(nome);
        salvarCurtidas();
        atualizarDisplay();
    }
    input.value = '';
}

function atualizarDisplay() {
    const display = document.getElementById('p');
    const totalCurtidas = curtidas.length;

    if (totalCurtidas === 0) {
        display.textContent = "Ninguém curtiu";
    } else if (totalCurtidas === 1) {
        display.textContent = `${curtidas[0]} curtiu`;
    } else if (totalCurtidas === 2) {
        display.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    } else {
        display.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${totalCurtidas - 2} pessoas curtiram`;
    }
}

function limparCurtidas() {
    curtidas = [];
    salvarCurtidas();
    atualizarDisplay();
}
window.onload = atualizarDisplay;