const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')

router.get('/',todosController.getTodos)
router.get('/createTodo ',todosController.createTodo)
router.get('/markComplete',todosController.markComplete)
router.get('markIncomplete',todosController.markIncomplete)
router.get('/deleteTodo',todosController.deleteTodo)

module.export = router