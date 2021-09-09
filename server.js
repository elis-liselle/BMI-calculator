const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.sendFile(__dirname +"/index.html");
});
app.post('/', (req, res) =>{
    let weight = Number(req.body.weight);
    let length = Number(req.body.length) / 100;

    let result = weight / (Math.pow(length, 2));

    if (result < 19) {
         res.send(`Sul on alakaal. ${weight} / (${length} x ${length}) = ${result}(kg/m2)`);
    }
    if (result == 19 || result <= 24.9) {
        res.send(`Sul on normaalkaal. ${weight} / (${length} x ${length}) = ${result}(kg/m2)`);
    }
    if (result == 25 || result <= 29.9) {
        res.send(`Sul on ülekaal. ${weight} / (${length} x ${length}) = ${result}(kg/m2)`);
    }
    if (result >= 30) {
        res.send(`Sa oled rasvunud. ${weight} / (${length} x ${length}) = ${result}(kg/m2)`);
    }
   
});

app.listen(3000, function (){
    console.log('Server is running on port 3000');
})