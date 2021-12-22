import { Router } from 'restify-router'

import LogsRoute from './logs.route'
import CryptographyRoute from './cryptography.route'

const RouterManager = new Router()

RouterManager.add('/logs', LogsRoute)
RouterManager.add('/', CryptographyRoute)

export default RouterManager
