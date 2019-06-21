const express = require("express");
const expressHbs = require("express-handlebars");
const mongoose = require("mongoose");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Content = require("./models/content");

const nodemailer = require("nodemailer");

var smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'library.kmrf@gmail.com',
    pass: 'library.diplom'
  }
};
var transporter = nodemailer.createTransport(smtpConfig);

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
    Content.Book.find({authorID: result._id}, function(err, books) {
      if (err) {
        console.log(err);
      } else if (result) {
        res.render("partials/author_page.hbs", {
          author: result,
          books: books
        })
      }
    })
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

app.get("/ganre",function(req,res){
  res.render("partials/Ganre.hbs");
})

app.get("/catalog-title-up", function(req, res) {
  Content.Book.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      result.sort(function(a, b) {
        let nameA = a.title.toLowerCase();
        let nameB = b.title.toLowerCase();

        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      })
      res.render("partials/catalog.hbs", {
        books: result
      })
    }
  })
})
app.get("/catalog-title-down", function(req, res) {
  Content.Book.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      result.sort(function(a, b) {
        let nameA = a.title.toLowerCase();
        let nameB = b.title.toLowerCase();

        if (nameA > nameB) {
          return -1;
        } else if (nameA < nameB) {
          return 1;
        } else {
          return 0;
        }
      })
      res.render("partials/catalog.hbs", {
        books: result
      })
    }
  })
})
app.get("/catalog-genre-up", function(req, res) {
  Content.Book.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      result.sort(function(a, b) {
        let nameA = a.genre.toLowerCase();
        let nameB = b.genre.toLowerCase();

        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      })
      res.render("partials/catalog.hbs", {
        books: result
      })
    }
  })
})

app.get("/catalog-genre-down", function(req, res) {
  Content.Book.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      result.sort(function(a, b) {
        let nameA = a.genre.toLowerCase();
        let nameB = b.genre.toLowerCase();

        if (nameA > nameB) {
          return -1;
        } else if (nameA < nameB) {
          return 1;
        } else {
          return 0;
        }
      })
      res.render("partials/catalog.hbs", {
        books: result
      })
    }
  })
})

app.get("/catalog-date-down", function(req, res) {
  Content.Book.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      result.sort(function(a, b) {
        

        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

        if (dateA > dateB) {
          return -1;
        } else if (dateA < dateB) {
          return 1;
        } else {
          return 0;
        }
      })
      res.render("partials/catalog.hbs", {
        books: result
      })
    }
  })
})

app.get("/catalog-date-up", function(req, res) {
  Content.Book.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      result.sort(function(a, b) {
        

        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

        if (dateA < dateB) {
          return -1;
        } else if (dateA > dateB) {
          return 1;
        } else {
          return 0;
        }
      })
      res.render("partials/catalog.hbs", {
        books: result
      })
    }
  })
})

app.get("/catalog-avtor-down", function(req, res) {
  Content.Book.find({})
  .populate("authorID")
  .exec(function(err, result) {
    if (err) {
      console.log(err);
    } else {
      result.sort(function(a, b) {
        let nameA = a.authorID.name.toLowerCase();
        let nameB = b.authorID.name.toLowerCase();
        
        if (nameA > nameB) {
          return -1;
        } else if (nameA < nameB) {
          return 1;
        } else {
          return 0;
        }
      })
      res.render("partials/catalog.hbs", {
        books: result
      })
    }
  })
})
  app.get("/catalog-avtor-up", function(req, res) {
    Content.Book.find({})
    .populate("authorID")
    .exec(function(err, result) {
      if (err) {
        console.log(err);
      } else {
        result.sort(function(a, b) {
          let nameA = a.authorID.name.toLowerCase();
          let nameB = b.authorID.name.toLowerCase();
          
          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          } else {
            return 0;
          }
        })
        res.render("partials/catalog.hbs", {
          books: result
        })
      }
    })
  })

  


app.get("/find", function(req, res) {
  
  Content.Book.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      let reg = new RegExp(req.query.text, "i");
      console.log(result.filter(book => book.title.match(reg)));
      result = result.filter(function(book) {
        return book.title.match(reg);
      });
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

app.get("/ganre-busines", function(req, res) {
  Content.Book.find({genre: "Бізнес"}, function(err, books) {
    if (err) {
      console.log(err)
    } else {
      res.render("partials/ganre-str.hbs", {
        books: books,
        genre: "Бізнес"
      })
    }
  })
})

app.get("/ganre-detective", function(req, res) {
  Content.Book.find({genre: "Детектив"}, function(err, books) {
    if (err) {
      console.log(err)
    } else {
      res.render("partials/ganre-str.hbs", {
        books: books,
        genre: "Детектив"
      })
    }
  })
})

app.get("/ganre-nauka", function(req, res) {
  Content.Book.find({genre: "Наука"}, function(err, books) {
    if (err) {
      console.log(err)
    } else {
      res.render("partials/ganre-str.hbs", {
        books: books,
        genre: "Наука"
      })
    }
  })
})

app.get("/ganre-prigodu", function(req, res) {
  Content.Book.find({genre: "Пригоди"}, function(err, books) {
    if (err) {
      console.log(err)
    } else {
      res.render("partials/ganre-str.hbs", {
        books: books,
        genre: "Пригоди"
      })
    }
  })
})

app.get("/ganre-psuhologia", function(req, res) {
  Content.Book.find({genre: "Психологія"}, function(err, books) {
    if (err) {
      console.log(err)
    } else {
      res.render("partials/ganre-str.hbs", {
        books: books,
        genre: "Психологія"
      })
    }
  })
})

app.get("/ganre-roman", function(req, res) {
  Content.Book.find({genre: "Роман"}, function(err, books) {
    if (err) {
      console.log(err)
    } else {
      res.render("partials/ganre-str.hbs", {
        books: books,
        genre: "Роман"
      })
    }
  })
})

app.get("/ganre-fentezi", function(req, res) {
  Content.Book.find({genre: "Фентезі"}, function(err, books) {
    if (err) {
      console.log(err)
    } else {
      res.render("partials/ganre-str.hbs", {
        books: books,
        genre: "Фентезі"
      })
    }
  })
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
  const student = new Content.Student({
    number: "123434123",
    fio: "Илиус Сашковский",
    email: "Il.saw1488@gmail.com",
    phone: "12313131133"
  })
  student.save();
  author.save();
  book.save();
})

app.post("/order", function(req, res) {
  console.log(req.body);
  Content.Student.findOne({fio: req.body.pib, password: req.body.password}, function(err, student) {
    console.log(student);
    if (err) {
      console.log(err);
    } else if (student) {
      Content.Book.findById(req.body.bookID, function(err, book) {
       console.log(book);
        if (err) {
          console.log(err);
        } else if(!book.notStock) {
          const order = new Content.Order({
            number: req.body.number,
            bookID: req.body.bookID
          })
          order.save();
          Content.Book.updateOne({_id: req.body.bookID}, {$set: {"notStock" : true}}).exec(function(err, updatedBook) {
            console.log(updatedBook);
          })
          const mailOptions = {
            from: 'library.kmrf@gmail.com',
            to: student.email,
            subject: 'Замовлення книги',
            html: "<h2>Замовлення книги</h2><hr><h3>Книга " 
            + req.body.title + " була успішно замовлена<h3>Книгу ви  можете отримати в бібліотеці коледжу</h3>"
            + "<h3>Для отримання книги вам буде необхідно показати свій студентський квиток</h3><h3>Години роботи ви можете переглянути на сайті</h3>"
          }
    
          transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
              console.log(err);
            } else {
              console.log(info);
            }
          })
          res.send(true);
        } else {
          res.send(false);
        }
      })
    } else {
      res.send(false);
    }
  })
})

app.post("/reg", function(req, res) {
  let student = new Content.Student({
    fio: req.body.fio,
    number: req.body.number,
    email: req.body.email,
    phone: req.body.phone,
    group: req.body.group,
    password: req.body.password
  })
  student.save().then(function(result) {
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
})

app.get(/.*/, function(req, res) {
  Content.Book.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
     
      res.render("partials/main.hbs", {
        book_1: result[result.length-1],
        book_2: result[result.length-2],
        book_3: result[result.length-3],
        books: result
      })
    }
  })
});

module.exports = app;