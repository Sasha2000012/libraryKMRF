const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    publish: { type: String, required: true },
    description: { type: String, required: true },
    authorID: { type: Schema.Types.ObjectId, ref: "Author" }
    },
    {versionKey: false}
);

const authorSchema = new Schema({
    name: { type: String, required: true },
    birthday: {type: String, required: true},
    country: {type: String, required: true},
    description: { type: String, required: true }
    },
    {versionKey: false}
);

module.exports.Book = mongoose.model("Book", bookSchema);
module.exports.Author = mongoose.model("Author", authorSchema);