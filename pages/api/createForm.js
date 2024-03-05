import connectToDatabase from '../../lib/mongodb'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const db = await connectToDatabase(process.env.MONGODB_URI)

        const collection = await db.collection('forms')

        let body = req.body
        body.createdAt = new Date(body.createdAt)

        const result = await collection.insertOne(body)

        return res.status(200).json({ success: true, data: result.ops })
    }

    return res.status(400).json({ success: false })
}
