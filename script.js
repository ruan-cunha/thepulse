document.addEventListener('DOMContentLoaded', () => {

    const mainContent = document.getElementById('main-content');
    const mainNav = document.getElementById('main-nav');
    let currentCategory = 'all';

    function renderHomepage(categoryFilter = 'all') {
        currentCategory = categoryFilter;
        mainContent.innerHTML = '';
        mainContent.className = 'container';

        const newsGrid = document.createElement('div');
        newsGrid.className = 'news-grid';

        const filteredNews = newsData.filter(article =>
            categoryFilter === 'all' || (article.category && article.category.toUpperCase().includes(categoryFilter.toUpperCase()))
        );

        const sortedNews = filteredNews.sort((a, b) => {
            if (a.isMainHeadline && !b.isMainHeadline) return -1;
            if (!a.isMainHeadline && b.isMainHeadline) return 1;
            if (a.isSecondaryBreaking && !b.isSecondaryBreaking) return -1;
            if (!a.isSecondaryBreaking && b.isSecondaryBreaking) return 1;
            return 0;
        });

        updateNavActiveState(categoryFilter);

        if (sortedNews.length === 0) {
             mainContent.innerHTML = `<p>Nenhuma notícia encontrada para esta categoria.</p>`;
             return;
        }

        sortedNews.forEach(article => {
            const card = document.createElement('div');
            card.className = 'news-card';

            if (article.isMainHeadline) card.classList.add('breaking-news');
            if (article.isSecondaryBreaking) card.classList.add('secondary-breaking');

            const imgElement = document.createElement('img');
            imgElement.src = article.imageUrl || 'https://via.placeholder.com/800x400.png?text=Imagem+Nao+Encontrada';
            imgElement.alt = article.headline; 
            imgElement.className = 'news-card-image';
            imgElement.loading = 'lazy'; 

            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'card-content'; 
            contentWrapper.innerHTML = `
                <span class="category">${article.category}</span>
                <h2>${article.headline}</h2>
                <p class="summary">${article.summary}</p>
                <span class="timestamp">${article.date.split(' - ')[0]}</span>
            `;

            card.appendChild(imgElement);
            card.appendChild(contentWrapper);


            card.addEventListener('click', () => {
                renderArticlePage(article.id);
            });

            newsGrid.appendChild(card);
        });

        mainContent.appendChild(newsGrid);
    }

    function renderArticlePage(articleId) {
        const article = newsData.find(item => item.id === articleId);
        if (!article) {
            renderHomepage();
            return;
        }

        mainContent.innerHTML = '';
        mainContent.className = 'container article-view';

        const articleImg = document.createElement('img');
        articleImg.src = article.imageUrl || 'https://via.placeholder.com/1200x400.png?text=Imagem+Nao+Encontrada'; 
        articleImg.alt = article.headline;
        articleImg.className = 'article-image';

        const articleContent = document.createElement('div');
        articleContent.innerHTML = `
            <a href="#" class="back-link">&larr; Voltar para ${currentCategory === 'all' ? 'Página Inicial' : currentCategory.toUpperCase()}</a>
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

        mainContent.appendChild(articleImg);
        mainContent.appendChild(articleContent);

        mainContent.querySelector('.back-link').addEventListener('click', (e) => {
            e.preventDefault();
            renderHomepage(currentCategory);
        });
    }

    function updateNavActiveState(activeCategory) {
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.dataset.category && link.dataset.category.toUpperCase() === activeCategory.toUpperCase()) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        navLinks.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                navLinks.classList.remove('open');
            }
        });
    }

    mainNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link') && e.target.dataset.category) {
            e.preventDefault();
            const category = e.target.dataset.category;
            renderHomepage(category);
        }
    });

    renderHomepage('all');


});
