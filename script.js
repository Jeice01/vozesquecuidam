document.addEventListener('DOMContentLoaded', function() {
    const postsSection = document.getElementById('posts');
    const posts = [
        {
            title: "Entendendo o Autismo na Cultura Negra",
            content: "A cultura negra possui aspectos únicos que podem influenciar a experiência do autismo...",
            imageUrl: "./img/post1.webp" // Caminho para a imagem do post
        },
        {
            title: "Por que é importante falar sobre isso?",
            content: "Discutir a interseção entre autismo e cultura negra é essencial para promover um entendimento mais profundo e respeitoso...",
            imageUrl: "./img/post2.webp" // Caminho para a imagem do post
        }
    ];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        const postTitle = document.createElement('h3');
        const postContent = document.createElement('p');
        const postImage = document.createElement('img'); // Criação do elemento img

        postTitle.textContent = post.title;
        postContent.textContent = post.content;
        postImage.src = post.imageUrl; // Definindo o caminho da imagem
        postImage.alt = "Imagem do post"; // Texto alternativo para acessibilidade

        postElement.appendChild(postImage); // Adicionando a imagem ao post
        postElement.appendChild(postTitle);
        postElement.appendChild(postContent);
        postsSection.appendChild(postElement);
    });
});
