var notes = require('./../controllers/notes');
module.exports = function(app){

    app.post('/submit', function(req, res) {
        console.log("req.body ", req.body);
        notes.submit(req, res);   
    })
    app.get('/getAllNotes', function(req, res) {        
        notes.getAllNotes(req, res);
    })
}