document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o evento ao formulário após o DOM estar carregado
    const form = document.getElementById('portfolioForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Captura os valores dos inputs
            const titulo = document.getElementById('titulo').value;
            const descricao = document.getElementById('descricao').value;
            const imagem = document.getElementById('imagem').files[0];

            // Salva o título e a descrição no localStorage
            localStorage.setItem('titulo', titulo);
            localStorage.setItem('descricao', descricao);

            // Salva a imagem no localStorage como base64
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem('imagem', e.target.result);
                // Redireciona para o index.html após salvar a imagem
                window.location.href = 'index.html';
            }
            reader.readAsDataURL(imagem);
        });
    }

    // Carrega os valores do localStorage e atualiza o conteúdo da página
    const titulo = localStorage.getItem('titulo');
    const descricao = localStorage.getItem('descricao');
    const imagem = localStorage.getItem('imagem');

    if (titulo) {
        const tituloElement = document.getElementById('portfolio-title');
        if (tituloElement) {
            tituloElement.innerHTML = titulo;
        }
    }

    if (descricao) {
        const descricaoElement = document.getElementById('portfolio-description');
        if (descricaoElement) {
            descricaoElement.textContent = descricao;
        }
    }

    if (imagem) {
        const imagemElement = document.getElementById('portfolio-image');
        if (imagemElement) {
            imagemElement.src = imagem;
        }
    }
});
