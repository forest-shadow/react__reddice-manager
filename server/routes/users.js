import express from 'express'
import bcrypt from 'bcryptjs'

import validateInput from '../shared/validations/signup'
import User from '../models/user'

let router = express.Router()

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body)

  if (isValid) {
    const { username, password, timezone, email } = req.body
    const salt = bcrypt.genSaltSync(10)
    const password_digest = bcrypt.hashSync(password, salt)

    User.forge({
      username, timezone, email, password_digest
    }, { hasTimeStamps: true } ).save()
      .then(user => res.json({ success: true }))
      .catch(err => res.status(500).json({ error: err }))
  } else {
    res.status(400).json(errors)
  }
})

export default router