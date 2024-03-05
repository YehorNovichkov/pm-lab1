import connectToDatabase from '../../lib/mongodb'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
    const { username, password, sortKey, sortDirection } = req.body

    if (req.method === 'POST') {
        if (
            username === process.env.ADMIN_USERNAME &&
            bcrypt.compareSync(password, process.env.ADMIN_PASSWORD_HASH)
        ) {
            const db = await connectToDatabase(process.env.MONGODB_URI)

            const collection = await db.collection('forms')

            const forms = await collection
                .find({})
                .sort({ [sortKey]: [sortDirection] })
                .toArray()

            return res.status(200).json({ success: true, data: forms })
        } else {
            return res.status(401).json({
                success: false,
                message: 'Invalid username or password',
            })
        }
    }

    return res.status(400).json({ success: false })
}
