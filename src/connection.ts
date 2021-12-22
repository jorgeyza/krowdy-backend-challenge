import mongoose from 'mongoose'

const endpointMongoDB = process.env.ENDPOINT_MONGO_DB

const ServicesMongoDB = mongoose.createConnection(endpointMongoDB)

export { ServicesMongoDB }
