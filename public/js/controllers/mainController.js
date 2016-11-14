class mainController {

    constructor(articleService) {
        this.articleService = articleService;
        this.load();
    }

    load() {
        this.articleService.getAll().then((res) => {
            this.activites = res.data;
            console.log("Contenu de res : " + res)
        })
    }

    create() {
        this.articleService.create(this.article).then(() => {
            this.article = '';
            this.load()
        })
    }

    update(article) {
        this.articleService.update(article._id, article.titreArticle, article.contenuArticle).then(() => {
            this.load()
        })
    }

    delete(article) {
        this.articleService.delete(article._id).then(() => {
            this.load()
        })
    }

}
