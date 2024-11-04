const tempo_ate_aniversario = (data_aniversario) => {
    const agora = new Date().getTime();
    const diferenca = data_aniversario - agora;
    const seg_min = 60 * 1000;
    const seg_hor = 60 * seg_min;
    const seg_dia = 24 * seg_hor;

    const dias = Math.floor(diferenca / seg_dia);
    const horas = Math.floor((diferenca % seg_dia) / seg_hor);
    const minutos = Math.floor((diferenca % seg_hor) / seg_min);
    const segundos = Math.floor((diferenca % seg_min) / 1000);

    return {
        dias,
        horas,
        minutos,
        segundos
    }
}

const tempo = () => {
    const data_aniversario = new Date('2025-02-15T00:00:00').getTime();
    const tempo_ate_data = tempo_ate_aniversario(data_aniversario);

    document.getElementById('dias').innerText = `Dias ${tempo_ate_data.dias}`;
    document.getElementById('horas').innerText = `Horas ${tempo_ate_data.horas}`;
    document.getElementById('minutos').innerText = `Minutos ${tempo_ate_data.minutos}`;
    document.getElementById('segundos').innerText = `Segundos ${tempo_ate_data.segundos}`;
}
const intervalo = setInterval(tempo, 1000);