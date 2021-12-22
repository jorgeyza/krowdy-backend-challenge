import { Router } from 'restify-router'
const CryptographyRoute = new Router()
import CryptographyController from '../controllers/cryptography.controller'

CryptographyRoute.get('/resolve/uuid', async (req, res) => {
  try {
    const { params: { id } } = req

    return res.json({ })
  } catch (error) {
    return res.json({
      error       : true,
      errorMessage: error.message
    })
  }
})

CryptographyRoute.get('/resolve/sha256', async (req, res) => {
  try {
    const { params: { id } } = req

    return res.json({ })
  } catch (error) {
    return res.json({
      error       : true,
      errorMessage: error.message
    })
  }
})

CryptographyRoute.post('/generate/uuid4', async (req, res) => {
  try {
    let dataToSend = ''
    if(req.body.expiredAt) {
      const { expiredAt } = req.body
      dataToSend = expiredAt
    }

    const data = await CryptographyController.createUUID(dataToSend)

    return res.json({ data })
  } catch (error) {
    return res.json({
      error       : true,
      errorMessage: error.message
    })
  }
})

CryptographyRoute.post('/generate/sha256', async (req, res) => {
  try {
    let dataToSend = ''
    if(req.body.expiredAt) {
      const { expiredAt } = req.body
      dataToSend = expiredAt
    }

    const data = await CryptographyController.createSHA256(dataToSend)

    return res.json({ data })
  } catch (error) {
    return res.json({
      error       : true,
      errorMessage: error.message
    })
  }
})

export default CryptographyRoute
