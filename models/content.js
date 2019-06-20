const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    publish: { type: String, required: true },
    description: { type: String, required: true },
    notStock: { type: Boolean, default: false},
    authorID: { type: Schema.Types.ObjectId, ref: "Author" },
    date: { type: Date, required: false, default: new Date() }
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

const studentSchema = new Schema({
    number: { type: String, required: true},
    fio: { type: String, required: true},
    email: { type: String, required: true},
    phone: { type: String, required: true},
    group: { type: String, required: true},
    password: { type: String, required: true}
    },
    {versionKey: false}
);

const orderSchema = new Schema({
    number: { type: String, required: true},
    bookID: { type: Schema.Types.ObjectId, required: true},
    status: { type: String, default: "ordered"},
    receiveDate: { type: Date, required: false},
    passDate: { type: Date, required: false} 
    },
    {versionKey: false}
)

module.exports.Book = mongoose.model("Book", bookSchema);
module.exports.Author = mongoose.model("Author", authorSchema);
module.exports.Student = mongoose.model("Student", studentSchema);
module.exports.Order = mongoose.model("Order", orderSchema);