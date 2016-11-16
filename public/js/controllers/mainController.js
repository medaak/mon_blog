class mainController {

    constructor(articleService) {
        this.articleService = articleService;
        this.load();
    }

    load() {
        this.articleService.getAll().then((res) => {
            this.articles = res.data;
            console.log("Contenu de res : " + res.data)
        })
    }

    create(article) {
        this.articleService.create(article.titreArticle,article.imageArticle,article.contenuArticle).then(() => {
            this.article = {};
            this.load()
        })
    }

    update(article) {
        this.articleService.update(article._id, article.titreArticle, article.imageArticle, article.contenuArticle).then(() => {
            this.load()
        })
    }

    delete(article) {
        this.articleService.delete(article._id).then(() => {
            this.load()
        })
    }

}
