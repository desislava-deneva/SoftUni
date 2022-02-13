function getArticleGenerator(articles) {

    return () => {
        if (articles.length) {
            let article = document.createElement('article');
            article.textContent = articles.shift();
            document.getElementById('content').appendChild(article);
        }
    }
}
