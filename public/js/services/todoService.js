class articleService {

    constructor($http) {
        this.$http = $http;
    }

    create(titre, contenu) {
        return this.$http.post('/api/articles', {
            titreArticle: titre,
            contenuArticle:contenu
        })
    }

    getAll() {
        return this.$http.get('/api/articles')
    }

    getOne(id) {
        return this.$http.get('/api/articles/' + id)
    }

    update(id, titre, contenu) {
        return this.$http.put('/api/articles/' + id, {
            titreArticle: titre,
            contenuArticle: contenu
        })
    }

    delete(id) {
        return this.$http.delete('/api/articles/' + id)
    }

}
