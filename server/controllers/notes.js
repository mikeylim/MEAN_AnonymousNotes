var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    submit: function(req, res){
        Note.create({content: req.body.content}, function(err, note){
            console.log("note ", req.body);
            return res.json({content: note});
        })
    },
    getAllNotes: function(req, res){
        Note.find({}).sort({createdAt: "descending"}).exec(function(err, notes){
            if(err){
                console.log("errors", err);
            } else{
                console.log("Retrieved data")
                res.json(notes);
            }
        })
    }
}