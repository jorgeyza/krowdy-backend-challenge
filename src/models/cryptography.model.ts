import { Schema } from 'mongoose'
import { ServicesMongoDB } from '../connection'

const CryptographySchema = new Schema(
  {
    cryptographicString: { type: String },
    key                : { type: String }
  }
)

const CryptographyModel = ServicesMongoDB.model('Cryptography', CryptographySchema)

export { CryptographyModel }
