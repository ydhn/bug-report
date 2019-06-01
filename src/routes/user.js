import { Router } from 'express'
import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const users = await models.User.find().exec()
  if (!users) {
    return res.status(404).send('Not found')
  }
  return res.json({ users })
})

router.get('/:userId', async (req, res) => {
  const user = await models.User.findOne({
    id: req.params.userId
  }).exec()

  if (!user) {
    return res.send('Not found')
  }
  return res.json({
    user
  })
})

export default router
