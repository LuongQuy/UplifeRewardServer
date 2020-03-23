var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rewardSchema = new Schema({
    email: {type: String, required: true},
    reward: {type: Number, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Reward', rewardSchema);