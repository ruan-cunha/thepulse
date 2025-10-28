document.addEventListener('DOMContentLoaded', () => {

    const mainContent = document.getElementById('main-content');
    const navHome = document.getElementById('nav-home');

    // Função para renderizar a Página Inicial (Grid de Notícias)
    function renderHomepage() {
        mainContent.innerHTML = '';
        
        const newsGrid = document.createElement('div');
        newsGrid.className = 'news-grid';

        // Ordena as notícias pela data (do mais novo para o mais antigo)
        // Isso garante que as notícias de hoje apareçam primeiro
        const sortedNews = newsData.sort((a, b) => new Date(b.date.split(' - ')[0]) - new Date(a.date.split(' - ')[0]));

        sortedNews.forEach(article => {
            const card = document.createElement('div');
            card.className = 'news-card';
            
            // Adiciona classes de destaque
            if (article.isMainHeadline) {
                card.classList.add('breaking-news');
            } else if (article.isSecondaryBreaking) {
                card.classList.add('secondary-breaking');
            }

            // Cria o conteúdo do card
            card.innerHTML = `
                <span class="category">${article.category}</span>
                <h2>${article.headline}</h2>
                <p class="summary">${article.summary}</p>
                <span class="timestamp">${article.date.split(' - ')[0]}</span>
            `;

            // Adiciona o evento de clique para abrir o artigo completo
            card.addEventListener('click', () => {
                renderArticlePage(article.id);
            });

            newsGrid.appendChild(card);
        });

        mainContent.appendChild(newsGrid);
    }

    // Função para renderizar a Página do Artigo Completo
    function renderArticlePage(articleId) {
        const article = newsData.find(item => item.id === articleId);
        if (!article) {
            renderHomepage(); 
            return;
        }

        mainContent.innerHTML = '';
        mainContent.className = 'container article-view'; // Adiciona a classe de container

        mainContent.innerHTML = `
            <a href="#" class="back-link">&larr; Voltar à página inicial</a>
            <header class="article-header">
                <span class="category">${article.category}</span>
                <h1>${article.headline}</h1>
                <div class="meta-info">
                    Por ${article.author} | ${article.date}
                </div>
            </header>
            <div class="article-body">
                ${article.fullStory}
            </div>
        `;

        mainContent.querySelector('.back-link').addEventListener('click', (e) => {
            e.preventDefault(); 
            mainContent.className = 'container'; // Remove a classe do artigo
            renderHomepage();
        });
    }

    // --- Inicialização ---
    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.className = 'container'; // Garante que a classe de artigo saia
        renderHomepage();
    });
    
    renderHomepage();
});