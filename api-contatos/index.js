
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const db = [
    {
        id: 1,
        nome: 'maria',
        email: 'maria@gmail.com',
        fone: '(47)9090-1234'
    },
    {
        id: 2,
        nome: 'João',
        email: 'joao@gmail.com',
        fone: '(47)9090-1234'
    }
]

//middleware    
app.use(express.json())
app.use(cors())

/** GET POST DELETE PUT */
app.get('/contatos', (req, res) => {
    res.send(db)
})

app.get('/contatos/:id', (req, res) => {
    let contato = db.filter(ct => ct.id == req.params.id)
    res.send(contato[0])
})

app.post('/contatos', (req, res) => {
    let contato = {
        id: db[db.length-1].id+1,
        nome: req.body.nome,
        email: req.body.email,
        fone: req.body.fone
    }
    db.push(contato)
    res.status(201).json(contato)
})

app.put('/contatos/:id', (req, res) => {
    for(let i=0; i<db.length;i++){
        if(db[i].id == req.params.id){
            db[i].nome = req.body.nome
            db[i].email = req.body.email
            db[i].fone = req.body.fone
            res.status(200).json(db[i])
        }
    }   
    res.status('404').send('Contato não encontrado')
})

app.delete('/contatos/:id', (req, res) => {
    for(let i=0; i<db.length;i++){
        if(db[i].id == req.params.id){
            db.splice(i,1)
        }
    }    
    res.sendStatus(204)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

