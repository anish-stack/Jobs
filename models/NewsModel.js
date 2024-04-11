const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    NewsImage: {
        type: String
    },
    NewsHead: {
        type: String
    },
    NewsSmallDis: {
        type: String
    },
    NewsSecondHead: {
        type: String
    },
    NewsBigDis: {
        type: String
    },
    ListItem: {
        type: [String]
    },
    EndMsg: {
        type: String
    }
}, { timestamps: true });

const NewsModel = mongoose.model('News', NewsSchema);

module.exports = NewsModel;
