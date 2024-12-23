import 'dotenv/config'
import express from 'express'

const app = express();

const port = process.env.port || 8003;

app.get('/',(req,res)=>{
    res.send("hell  o W  orld");
})



const teas = [{id: 0,name: 'ginger Tea',price: '45'},{id: 0,name: 'ginger Tea',price: '45'},{id: 0,name: 'ginger Tea',price: '45'}];
let newId = 1;

app.post('/teas',(req,res) => {
    const data = req.body;
    const newTea = {id:newId++, name, price};
    teas.push(newTea);
    res.status(200).send(`All Ok, All good ${newTea}`);
})


app.get('/teas/',(req,res)=>{
    res.status(200).send(teas);
})


app.get('/teas/:id',(req,res)=>{
    const tea = teas.find(t => t.id === parseInt(req.params.id));
    if(!tea){
        res.status(404).send(`We could not find a tea with that id broooo.`);
    }
    res.status(201).send(tea);

})



app.listen(port, () => {
    console.log(`Server listening to the ${port} port.`);
})