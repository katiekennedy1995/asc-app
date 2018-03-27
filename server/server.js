const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./server/routes/api');
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'dist'))); // Point static path to dist
 
app.use('/api', api); // Set our api routes 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
}); //Catch all other routes and return the index file
 
const port = process.env.PORT || '4200';  //port setting
app.set('port', port);
app.listen(port, ()=> console.log(`Listening at localhost:${4200}`));
