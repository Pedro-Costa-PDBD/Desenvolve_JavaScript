const feed = document.getElementById('feed');
let posts = [];

function gerarNomeAleatorio() {
    const nomes = ['Ana', 'Carlos', 'Beatriz', 'Daniel', 'Fernanda', 'João', 'Mariana', 'Pedro', 'Roberta', 'Lucas'];
    const sobrenomes = ['Silva', 'Oliveira', 'Santos', 'Souza', 'Ferreira', 'Costa', 'Rodrigues', 'Almeida', 'de Paula'];
    
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    
    return `${nome} ${sobrenome}`;
}

async function Imagem_gato() {
    try {
        const resposta = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await resposta.json();
        return data[0].url;
    } catch (error) {
        console.error('Erro ao buscar imagem:', error);
        return 'https://placekitten.com/400/400'; 
    }
}

async function handlePost(event) {
    event.preventDefault();

    const textarea = document.getElementById('textarea');
    const text = textarea.value.trim();

    if (text === '') return;

    const newPost = {
        username: gerarNomeAleatorio(),
        avatar: 'https://i.pravatar.cc/50',
        text: text,
        image: await Imagem_gato(),
        likes: 0,
        date: new Date().toLocaleString(),
    };

    posts.unshift(newPost);
    textarea.value = '';
    renderFeed();
}

function renderFeed() {
    feed.innerHTML = '';

    posts.forEach((post, index) => {
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <div class="post-header">
                <img src="${post.avatar}" alt="Avatar" class="avatar">
                <span class="username">${post.username}</span>
            </div>
            <p class="post-text">${post.date}</p>
            <p class="post-text">${post.text}</p>
            <div class="post-image">
                <img src="${post.image}" alt="Imagem de gatinho">
            </div>
            <button class="like-button" onclick="handleLike(${index})">
                Curtir (${post.likes})
            </button>
        `;

        feed.appendChild(listItem);
    });
}

function handleLike(index) {
    posts[index].likes++;
    renderFeed();
}