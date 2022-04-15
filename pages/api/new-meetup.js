import { MongoClient } from 'mongodb'

async function handler(req, res) {
    if(req.method === 'POST'){
        console.log('came here');
        const data = req.body
        console.log(data);
        const client  = await MongoClient.connect('mongodb+srv://zenoDB:zenoDB@zeddnext.5yops.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db()
        const meetupCollection = db.collection('meetups')
        const result = await meetupCollection.insertOne(data)
        console.log(result);
        client.close()
        res.status(201).send('Hey saved bro')
}
}

export default handler