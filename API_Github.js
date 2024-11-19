async function buscarUsuarios() {
    const input = document.getElementById('input');
    const pesquisar = input.value.trim();
    const resultsLista = document.getElementById('lista_resultado');
    
    resultsLista.innerHTML = '';

    if (pesquisar === '') {
        resultsLista.innerHTML = '<li>Digite um nome para buscar.</li>';
        return;
    }

    try {
        const resposta = await fetch(`https://api.github.com/search/users?q=${pesquisar}`);
        
        if (!resposta.ok) {
            throw new Error('Erro na busca');
        }

        const data = await resposta.json();
        const users = data.items;

        if (users.length === 0) {
            resultsLista.innerHTML = '<li>Não foram encontrados usuários para esta pesquisa.</li>';
            return;
        }

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
                <a href="${user.html_url}" target="_blank">${user.login}</a>
            `;
            resultsLista.appendChild(listItem);
        });

    } catch (error) {
        resultsLista.innerHTML = '<li>Ocorreu um erro ao buscar os usuários. Tente novamente.</li>';
        console.error(error);
    }
}