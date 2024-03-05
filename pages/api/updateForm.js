import connectToDatabase from '../../lib/mongodb'
import bcrypt from 'bcryptjs'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
    const { username, password, id, formState } = req.body

    if (req.method === 'POST') {
        if (
            username === process.env.ADMIN_USERNAME &&
            bcrypt.compareSync(password, process.env.ADMIN_PASSWORD_HASH)
        ) {
            const db = await connectToDatabase(process.env.MONGODB_URI)

            const collection = await db.collection('forms')

            delete formState._id

            const result = await collection.updateOne(
                { _id: new ObjectId(id) },
                { $set: formState }
            )

            if (result.matchedCount === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Form not found',
                })
            }

            return res.status(200).json({ success: true, data: result })
        } else {
            return res.status(401).json({
                success: false,
                message: 'Invalid username or password',
            })
        }
    }

    return res.status(400).json({ success: false })
}
