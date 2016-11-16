import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
    titreArticle: String,
    imageArticle: String,
    contenuArticle: String
});

let model = mongoose.model('Article', articleSchema);

export default class Article {

    findAll(req, res) {
        model.find({}, (err, articles) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(articles);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, article) => {
            if (err || !article) {
                res.sendStatus(403);
            } else {
                res.json(article);
            }
        });
    }

    create(req, res) {
        model.create({
                titreArticle: req.body.titreArticle,
                imageArticle: req.body.imageArticle,
                contenuArticle: req.body.contenuArticle
            },
            (err, article) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(article);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            titreArticle: req.body.titreArticle,
            imageArticle: req.body.imageArticle,
            contenuArticle: req.body.contenuArticle
        }, (err, article) => {
            if (err || !article) {
                res.status(500).send(err.message);
            } else {
                res.json(article);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}
