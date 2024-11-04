const botao = document.getElementsByTagName('button')[0]
setTimeout(() => botao.innerText = 'Tente clicar aqui', 3000)

const lista = document.getElementsByTagName('li')
const cornova = ['#6DBBE8', '#6DE872', '#AE6DE8']
for(let li in lista) {
    lista[li].style.color = cornova[li]
}

const mudatitulo = (novoTitulo) => {
    const titulo = document.getElementById('tituloh1')
    titulo.innerText = novoTitulo
}
mudatitulo('Título Alterado')

const listaparagrafo = document.getElementsByTagName('p')
for(let paragrafo of listaparagrafo) {
    paragrafo.classList = 'pg'
}