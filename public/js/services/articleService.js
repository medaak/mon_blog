class articleService {

    constructor($http) {
        this.$http = $http;
    }

    create(titre, image, contenu) {
        return this.$http.post('/api/articles', {
            titreArticle: titre,
            imageArticle: image,
            contenuArticle:contenu
        })
    }

    getAll() {
        return this.$http.get('/api/articles')
    }

    getOne(id) {
        return this.$http.get('/api/articles/' + id)
    }

    update(id, titre, image, contenu) {
        return this.$http.put('/api/articles/' + id, {
            titreArticle: titre,
            imageArticle: image,
            contenuArticle: contenu
        })
    }

    delete(id) {
        return this.$http.delete('/api/articles/' + id)
    }

}
