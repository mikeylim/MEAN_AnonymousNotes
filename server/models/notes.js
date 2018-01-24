var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    content: String
}, {timestamps:true})

mongoose.model("Note", NoteSchema);