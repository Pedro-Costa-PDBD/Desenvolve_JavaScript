const nomesLIKE = [];
function adicionarCurtir() {
    const input = document.getElementById('input');
    const nome = input.value.trim();
    if (nome !== '' && !nomesLIKE.includes(nome)) {
        nomesLIKE.push(nome);
    }
    input.value = '';
    atualizarDisplay();
}

function atualizarDisplay() {
    const display = document.getElementById('p');
    const totalnomesLIKE = nomesLIKE.length;

    if (totalnomesLIKE === 0) {
        display.textContent = "Ninguém curtiu";
    } else if (totalnomesLIKE === 1) {
        display.textContent = `${nomesLIKE[0]} curtiu`;
    } else if (totalnomesLIKE === 2) {
        display.textContent = `${nomesLIKE[0]} e ${nomesLIKE[1]} curtiram`;
    } else {
        display.textContent = `${nomesLIKE[0]}, ${nomesLIKE[1]} e mais ${totalnomesLIKE - 2} pessoas curtiram`;
    }
}