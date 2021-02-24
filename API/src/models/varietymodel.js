const mongoose = require('mongoose');

const varietySchema = new mongoose.Schema({
    product_name: {
        type: String
    },

    product_info: {
        type: String
    },
    reviews_count: {
        type: Number
    },
    total_ratings: {
        type: Number
    },
    vote_count: {
        type: Number
    }

})

const Variety = new mongoose.model('hybrid', varietySchema)
// const Variety = new mongoose.model('Variety', varietySchema)
// const IndicaVarietyVariety = new mongoose.model('indica', varietySchema)
module.exports = Variety;
