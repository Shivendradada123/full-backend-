const express = require('express')

const app = express();

app.get('/', function (req, res) {
    res.end('hey shivendra')

});
app.get('/pro', function (req, res) {
    res.end('Shivendra the pro')

});

app.post('/home', (req, res) => {
    res.end('this is home page')
});

app.listen(5000, () => console.log(`server is runnig on PORT 5000` ));





 
