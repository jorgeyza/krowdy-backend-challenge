import { Router } from 'restify-router'
const LogsRoute = new Router()
import LogsController from '../controllers/logs.controller'

LogsRoute.get('/record', async (req, res) => {
  try {
    const {
      params: { id }
    } = req

    return res.json({})
  } catch (error) {
    return res.json({
      error       : true,
      errorMessage: error.message
    })
  }
})

LogsRoute.post('/record', async (req, res) => {
  try {
    const { eventDate, typeEvent, endpoint, query, body, response } = req.body

    const logs = await LogsController.generateLogs(eventDate, typeEvent, endpoint, query, body, response)

    return res.json({ logs })
  } catch (error) {
    return res.json({
      error       : true,
      errorMessage: error.message
    })
  }
})

export default LogsRoute
