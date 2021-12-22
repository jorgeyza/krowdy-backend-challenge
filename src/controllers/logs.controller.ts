import { LogsModel } from '../models/logs.model'
import cryptographyController from './cryptography.controller'

class LogsController {
  generateLogs(eventDate: Date, typeEvent: string, endpoint: string, query: string, body: string, response: string) {
    const logObject = {
      eventDate,
      typeEvent,
      endpoint,
      query,
      body,
      response
    }
    const key = cryptographyController.createUUID({ eventDate })
    try {
      LogsModel.create({
        logs: logObject,
        key
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default new LogsController()
