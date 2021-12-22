import { Schema } from 'mongoose'
import { ServicesMongoDB } from '../connection'

const LogsObjectSchema = new Schema(
  {
    eventDate: { type: Date },
    typeEvent: { type: String, uppercase: true },
    endpoint : { type: String },
    query    : { type: String },
    body     : { type: String },
    response : { type: String }
  }
)

const LogsSchema = new Schema({
  logs: [ LogsObjectSchema ],
  key : { type: String }
})

const LogsModel = ServicesMongoDB.model('Logs', LogsSchema)

export { LogsModel }
