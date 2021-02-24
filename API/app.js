const express = require('express');
require('./src/db/conn')
const Variety = require('./src/models/varietymodel')
const IndicaVarietyVariety = require('./src/models/indicamodel')
const SativaVariety = require('./src/models/sativasmodel')
const Indica_dominant_hybrids = require('./src/models/indica_dominant_hybridsmodel')
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())


// app.post('/hybrid', async (req, res) =>{
//     try{
//         const data = new Variety(req.body);
//         const createdata = await data.save();
//         res.status(201).send(createdata);
//     }catch(err){
//         res.status(400).send(err)
//     }
// })

app.get('/hybrids', async(req, res) =>{
    try{
        const varietydata1 = await Variety.find();
        console.log(req.body.variety)
        res.send(varietydata1);
    }catch(err){
        res.send(err);
    }
})

app.get('/indicas', async(req, res) =>{
    try{
        const varietydata = await IndicaVarietyVariety.find();
        res.send(varietydata);
    }catch(err){
        res.send(err);
    }
})

app.get('/sativas', async(req, res) =>{
    try{
        const varietydata = await SativaVariety.find();
        res.send(varietydata);
    }catch(err){
        res.send(err);
    }
})

app.get('/indica_dominant_hybrids', async(req, res) =>{
    try{
        const varietydata = await Indica_dominant_hybrids.find();
        res.send(varietydata);
    }catch(err){
        res.send(err);
    }
})



app.listen(port, () =>{
    console.log(`Listening on Port ${port}`)
})