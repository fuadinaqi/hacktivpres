const Author = require('../models/Author')
const Article = require('../models/Article')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = class ControllerAuthor {
  constructor() {

  }

  static signUp (req, res) {
    if (!req.body.email) {
      return res.send({
        msg: 'email harus diisi'
      })
    } else if (!req.body.password) {
      return res.send({
        msg: 'password harus diisi'
      })
    }
    Author.find()
      .then(authors => {
        if (authors.length > 0) {
          let duplicate = authors.filter(author => {
            return author.email === req.body.email
          })
          if (duplicate.length > 0) {
            return res.send({
              msg: 'email sudah terdaftar'
            })
          }
        }
        let objCreate = {
          email: req.body.email,
          password: req.body.password
        }
        Author.create(objCreate)
          .then(authorCreated => res.status(200).send({
            msg: 'signup success',
            authorCreated
          }))
          .catch(err => res.status(500).send(err))
      })
      .catch(err => res.status(500).send(err))
  }

  static signIn (req, res) {
    if (!req.body.email) {
      return res.send({
        msg: 'email harus diisi'
      })
    } else if (!req.body.password) {
      return res.send({
        msg: 'password harus diisi'
      })
    }
    Author.findOne({
      email: req.body.email
    })
      .then(author => {
        if (author.password === req.body.password) {
          jwt.sign({data: author}, process.env.SECRET_KEY, (err, token) => {
            res.status(200).send({
              msg: 'login success',
              token
            })
          })
        } else {
          res.send({
            msg: 'password salah'
          })
        }
      })
      .catch(err => res.status(500).send(err))
  }
}
