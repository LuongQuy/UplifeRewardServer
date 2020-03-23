var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var historySchema = new Schema({
    email: String,
    comment: String
}, {
    timestamps: true
});

module.exports = mongoose.model('History', historySchema);