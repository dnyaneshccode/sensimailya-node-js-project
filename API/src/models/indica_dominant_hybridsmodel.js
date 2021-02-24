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

const IndicaDominantHybridVariety = new mongoose.model('indica_dominant_hybrids', varietySchema)

module.exports = IndicaDominantHybridVariety;
