const router = require('express').Router()
const followshipsController = require('../controllers/followshipsController')
const helpers = require('../_helpers')

const checkRole = (req, res, next) => {
  if (helpers.getUser(req).role !== 'admin') {
    return next()
  }
  return res.redirect('/admin/tweets')
}

router.post('/', checkRole, followshipsController.follow)

router.delete('/:id', checkRole, followshipsController.unfollow)

module.exports = router