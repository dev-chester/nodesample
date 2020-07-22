var express    = require('express');        
var app        = express();         

var bodyParser = require('body-parser');
require('custom-env').env("training");
var router = express.Router(); 

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

var port = process.env.PORT || 3000;

router.get('/Hello', function(req, res) {
    var envName = `${process.env.FIRSTNAME} ${process.env.LASTNAME}`;
    res.json({ message: 'Hello Drix!', name:  envName}); 
    //Comment JPJ  
    // Comment Chester
    // Comment Quinn
    //komint Nowel
    //Keneth
    //comment Drix
});

router.post('/Post', (req,res) => {
    var envName = `${process.env.FIRSTNAME} ${process.env.LASTNAME}`;
    res.json({ message: 'Hello from post req' , name:  envName});
})

app.listen(port);
console.log(`API is listening to port: ${port}`);
