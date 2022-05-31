import { MongoClient } from 'mongodb'

const connection = async () => {
    const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}/?retryWrites=true&w=majority`
    const client = new MongoClient(uri)
    const connect = await client.connect()
    return connect.db('test')
}

export default {
    connection,
    type: 'mongodb'
}
