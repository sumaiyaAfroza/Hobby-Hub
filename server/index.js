require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${ process.env.HOBBY_DB }:${ process.env.SECRET_KEY }@cluster0.to6i0nk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

async function run() {
    try {
        const hobbyCollection = client.db('hobbyDB').collection('hobbies')

        app.get('/hobbies', async (req, res) => {
            const result = await hobbyCollection.find().toArray()
            res.send(result)
        })

        app.get('/hobbies/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await hobbyCollection.findOne(query)
            res.send(result)
        })

        app.get('/myGroups/:uid', async (req, res) => {
            const uid = req.params.uid
            const query = { uid: uid }
            const result = await hobbyCollection.find(query).toArray()
            res.send(result)
        })

        app.post('/hobbies', async (req, res) => {
            const cutHobby = req.body
            const result = await hobbyCollection.insertOne(cutHobby)
            console.log(result);
            res.send(result)
        })
        app.delete('/myGroups/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await hobbyCollection.deleteOne(query)
            res.send(result)
        })

        app.get('/updateGrp/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await hobbyCollection.findOne(query)
            res.send(result)
        })

        app.put('/updateGrp/:id', async (req, res) => {
            const id = req.params.id
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true }
            const updateHobby = req.body
            const updateDoc = {
                $set: updateHobby,
            }
            const result = await hobbyCollection.updateOne(filter, updateDoc, options)
            res.send(result)
        })

        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!',
        )
    } finally {
    }
}
run().catch(console.dir)
app.get('/', (req, res) => {
    res.send('hello')
})
app.listen(port, () => {
    console.log(`server ok, ${ port }`)
})