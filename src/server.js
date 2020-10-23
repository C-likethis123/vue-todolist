const express = require('express');

const app = express();
const port = 8080;

app.use(express.static('dist'));

app.get('/', (request, response) => {
    response.send("Serving at port " + port);
});

app.get('/api/v1/db.json', (request, response) => {
    response.status(200).send({
        data: db,
    })
});

app.get('/api/v1/db.json', (request, response) => {

});

app.listen(port, function() {
    console.log("Listening at port!");
});

/*
GET: api/v1/db.json -> to get all todos of all lists. 
POST: api/v1/db/{list number}.json -> to add a todo to a particular list
PUT: api/v1/db/{list number}/{list item}.json -> to edit a particular item of a list. 
DELETE: api/v1/db/{list number}/{list item}.json -> to delete a particular item. 
*/