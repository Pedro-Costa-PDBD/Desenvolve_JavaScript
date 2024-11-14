const estoqueLivros = [];

function livro(titulo, autor, quantidade) {
    const livroExistente = estoqueLivros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    if (livroExistente) {
        console.log(`O livro "${titulo}" já está no estoque.`);
    } else {
        estoqueLivros.push({ titulo, autor, quantidade });
        console.log(`Livro "${titulo}" adicionado ao estoque.`);
    }
}


function removerLivro(titulo) {
    const indice = estoqueLivros.findIndex(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    
    if (indice !== -1) {
        estoqueLivros.splice(indice, 1);
        console.log(`Livro "${titulo}" removido do estoque.`);
    } else {
        console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
    }
}

function atualizarQuantidade(titulo, novaQuantidade) {
    const livro = estoqueLivros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    
    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
    }
}

function listarLivros() {
    if (estoqueLivros.length === 0) {
        console.log("Nenhum livro disponível no estoque.");
    } else {
        console.log("Livros disponíveis no estoque:");
        estoqueLivros.forEach((livro, index) => {
            console.log(`${index + 1}. Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
        });
    }
}


livro("O Senhor dos Anéis", "Austin", 5);
livro("Batman, a volta do esquecido", "Jonathan Jojo", 3);
livro("Jojo, temp. 1", "Dio jojo", 8);
listarLivros();

atualizarQuantidade("O Hobbit", 10);

removerLivro("Jojo, temp. 1");
listarLivros();