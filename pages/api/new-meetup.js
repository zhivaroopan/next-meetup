import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
    if(req.method === 'POST'){
        const data = req.body
        console.log(data);
        const { title, image, address, discription } = data
        try{
            console.log('came here');
            const client  = await MongoClient.connect('mongodb+srv://zeddDB:zeddDB@zedddb.5yops.mongodb.net/firstmeetup?retryWrites=true&w=majority')
            const db = client.db()
            const meetupCollection = db.collections('meetups')
            const result = await meetupCollection.insertOne(data)
            console.log(result);
            res.statusCode(201).send('Hey saved bro')
            await client.close()
        } catch {
            res.statusCode(500).send('Internal server error')
        }
    }
}

export default handler