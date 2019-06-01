import { Router } from 'express'
import models from '../models'
const router = Router()

router.get('/', async (req, res) => {
  const messages = await models.Message.find().exec()
  if (!messages) {
    return res.json({
      status: 404
    })
  }

  return res.json({
    messages
  })
})

router.get('/:messageId', async (req, res) => {
  const { messageId } = req.params
  const message = await models.Message.findOne({
    id: messageId
  }).exec()

  if (!message) {
    return res.json({
      status: 404
    })
  }

  return res.json({
    message
  })
})

export default router
