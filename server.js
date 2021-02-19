var express = require('express');
var path = require('path');
var app = express();

var PORT = 3000 || process.env.PORT;

app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});