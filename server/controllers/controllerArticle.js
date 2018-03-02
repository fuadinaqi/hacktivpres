const Article = require('../models/Article');

module.exports = class ControllerArticle {
  constructor() {

  }

  static getAll(req, res) {
    Article.find()
      .then((article) => {
        res.send(article)
      })
      .catch(err => res.status(500).send(err))
  }

  static getProfile (req, res) {
    Article.find({
      authorId: req.headers.authorId
    })
      .then(articles => res.send({
        msg: 'got your articles',
        articles
      }))
      .catch(err => res.send(err))
  }

  static getById(req, res) {
    Article.findOne({
      '_id': req.params.id
    })
      .then(article => {
        res.send(article)
      })
      .catch(err => res.status(500).send(err))
  }

  static create(req, res) {
    let objCreate = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      authorId: req.headers.authorId
    }
    Article.create(objCreate)
      .then(article => {
        res.send(article)
      })
      .catch(err => res.status(500).send(err))
  }

  static getByCategory (req, res) {
    let categoryLowerCase = req.body.category.toLowerCase()
    // console.log(req.body)
    Article.find({
      category: categoryLowerCase
    })
      .then(articleCategory => res.send({
        msg: 'got you category',
        articleCategory
      }))
      .catch(err => res.status(500).send(err))
  }

  static update(req, res) {
    // console.log(req.body)
    Article.findOneAndUpdate({
      '_id': req.params.id,
      'authorId': req.headers.authorId
    }, req.body)
      .then(article => {
        // console.log(article)
        Article.findOne({
          '_id': req.params.id
        })
          .then(articleUpdated => res.send({
            msg: 'succeed to edit your article',
            articleUpdated
          }))
          .catch(err => res.send(err))
      })
      .catch(err => res.send(err))
  }
  //
  static destroy(req, res) {
    Article.remove({
      '_id': req.params.id
    })
      .then(articleDeleted => {
        res.send(articleDeleted)
      })
      .catch(err => res.status().send(err))
  }
}
