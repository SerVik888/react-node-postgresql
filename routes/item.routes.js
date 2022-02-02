const Router = require('express')
const router = new Router()
const itemController = require('../controller/item.controller')

router.post('/item', itemController.creatItem)
router.get('/item', itemController.getItem)
router.get('/item/:id', itemController.getOneItem)
router.put('/item', itemController.updateItem)
router.delete('/item/:id', itemController.deleteItem)

module.exports = router
