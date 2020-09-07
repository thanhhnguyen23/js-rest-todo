mongoose = require('mongoose'),
express = require('express'),
app = express(),
port = process.env.PORT || 3000;

Task = require('./api/models/todoListModel'), 
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// error handling
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

var routes = require('./api/routes/todoListRoutes'); 
routes(app); 

app.listen(port);

console.log('app started...' + port);
