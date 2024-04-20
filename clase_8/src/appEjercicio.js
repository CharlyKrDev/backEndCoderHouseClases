const express = require('express')
const app = express()
const PORT = 8080
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let frase = 'Frase inicial'

app.get('/api/frase', (req, res) => {

    res.status(201).json({

        frase: `${frase}`
    })
})
app.get('/api/palabras/:pos', (req, res) => {
    const palabras = frase.split(' ')
    console.log(palabras)
    const palabra = parseInt(req.params.pos)
    if (palabras[palabra - 1] === undefined || '') {

        return res.status(404).json(`No existe`)

    } res.status(201).json(palabras[palabra - 1])


})

app.post('/api/palabras', (req, res) => {
    const { palabra = '' } = req.body
    if (palabra === '') return res.status(404).json({ error: `No puede dejar el campo palabra vació` })
    const palabras = frase.split(' ')
    palabras.push(palabra)
    frase = palabras.join(' ')
    res.status(201).json({ frase: frase, message: 'Palabra agregada correctamente' })
})

app.put('/api/palabras/:pos', (req, res) => {

    const pos = parseInt(req.params.pos)
    const palabras = frase.split(' ')
    const palabraEncontrada = palabras.find(palabraEnc => palabraEnc === palabras[pos - 1])
    if (!palabraEncontrada) return res.status(404).json({ error: `No existe esa palabra` })
    const { palabra = palabras[pos - 1] } = req.body
    palabras[pos - 1] = palabra
    frase = palabras.join(' ')
    res.status(201).json(frase)





})

app.delete('/api/palabras/:pos', (req, res) => {

    const palabra = parseInt(req.params.pos)
    const palabras = frase.split(' ')
    const filtradaPal = palabras.filter(pal => pal !== palabras[palabra - 1])
    frase = filtradaPal.join(' ')
    if (filtradaPal.length !== palabras.length) {

        return res.status(201).json({ frase })
    }
    res.status(404).json({ error: `No existe palabra en esa posición` })


})



app.listen(PORT, (req, res) => {
    console.log(`Server running on port:${PORT}`)
})