const express = require("express");
const expressHbs = require("express-handlebars");
const mongoose = require("mongoose");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Content = require("./models/content");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts",
        defaultLayout: "layout",
        extname: "hbs"
    }
));

app.set("view engine", "hbs");

mongoose.connect("mongodb://localhost:27017/Lybrary", {useNewUrlParser:true}, function(err) {
    if(err) return console.log(err);
});
app.use(cookieParser());
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(__dirname + "/views"));


app.get('/book/:id', function(req, res) {
  Content.Book.findById(req.params.id)
  .populate("authorID")
  .exec(function(err, result) {
    if (err) {
      console.log(err);
    } else if (result) {
      res.render("partials/book_page.hbs", {
        book: result
      })
    }
  })
});

app.get("/author/:id", function(req, res) {
  Content.Author.findById(req.params.id, function(err, result) {
    if (err) {
      console.log(err);
    } else if (result) {
      res.render("partials/author_page.hbs", {
        author: result
      })
    }
  })
});

app.get("/catalog", function(req, res) {
  Content.Book.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.render("partials/catalog.hbs", {
        books: result
      })
    }
  })
})

app.get("/authors", function(req, res) {
  Content.Author.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.render("partials/authors.hbs", {
        authors: result
      })
    }
  })
})

app.get("/about", function(req, res) {
  res.render("partials/about.hbs");
})

app.get("/new", function(req, res) {
  const author = new Content.Author({
    _id: new mongoose.Types.ObjectId(),
    name: "Author name",
    birthday: "11.09.1987",
    country: "USA",
    description: "Good author example description"
  });
  const book = new Content.Book({
    _id: new mongoose.Types.ObjectId(),
    title: "New book",
    year: 1996,
    genre: "Action",
    publish: "Best publish",
    description: "New book from best author",
    authorID: "none"
  })
  book.authorID = author._id;
  author.save();
  book.save();
})

app.get(/.*/, function(req, res) {
  Content.Book.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.render("partials/main.hbs", {
        book_1: result[0],
        book_2: result[1],
        book_3: result[2],
        books: result
      })
    }
  })
});

module.exports = app;