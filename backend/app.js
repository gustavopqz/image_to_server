const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
const upload = require('./middleware/upload')

//Middleware
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req, res)=>{
    res.status(200).json({msg: 'Online'})
})

//Upload image route
app.post('/upload-image',  upload.single('imagem'), (req, res)=>{
    res.status(200).json({msg: 'Image upload sucess'})
})

//Listen
try {
    app.listen(3000, ()=>{
        console.log('Listening on port 3000')
    })
} catch (error) {
    console.log(error)
}
