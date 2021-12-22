import { v4 as uuidv4 } from 'uuid'
import { CryptographyModel } from '../models/cryptography.model'
const crypto = require('crypto')

class CryptographyController {
  async createUUID(value) {
    const expiredAt = new Date()
    expiredAt.setFullYear(expiredAt.getFullYear() + 1)

    const data = await CryptographyModel.create({
      cryptographicString: uuidv4(String(value || expiredAt)),
      key                : 'uuid4'
    })

    return data
  }

  async createSHA256(value) {
    const expiredAt = new Date()
    expiredAt.setFullYear(expiredAt.getFullYear() + 1)

    const str = String(value || expiredAt)

    const secret = process.env.HASH_SECRET
    const sha256Hasher = crypto.createHmac('sha256', secret)
    const hash = sha256Hasher.update(str)

    const data = await CryptographyModel.create({
      cryptographicString: hash,
      key                : 'sha256'
    })

    return data
  }
}

export default new CryptographyController()
