const PORT = 8000
const axios = require('axios')
const express = require("express")
const cors = require("cors")
require ("dotenv").config()

const app = express()
app.use(cors())

app.get('/languages', async(req, res) => { // get languages from API
    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Host': process.env.RAPID_API_HOST,
            'X-RapidAPI-Key': process.env.RAPID_API_KEY
        },
    }

    try{
        const response = await axios.get(`https://google-translate20.p.rapidapi.com/languages`, options)
        const arrayOfData = Object.keys(response.data.data).map(key => {  return response.data.data[key] });
        res.status(200).json(arrayOfData)
    }catch(error){
        console.log(error)
        res.status(500).json({message: error})
    }
})

app.get('/translation', async(req, res) => { // get translation from API
    const {textToTranslate, outputLanguage, inputLanguage} = req.query
    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Host': process.env.RAPID_API_HOST,
            'X-RapidAPI-Key': process.env.RAPID_API_KEY
        },
        params: {
            text: textToTranslate,
            tl: outputLanguage,
            sl: inputLanguage
        },
    }

    try{
        const response = await axios.get(`https://google-translate20.p.rapidapi.com/translate`, options)
        res.status(200).json(response.data.data.translation)
    }catch(error){
        console.log(error)
        res.status(500).json({message: error})
    }
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))