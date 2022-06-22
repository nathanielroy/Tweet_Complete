const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
const postRoute = require("./routes/posts.routes");
const db = require("./models");
const docs = require('./docs');
const swaggerUI = require("swagger-ui-express");
const Role = db.role;
dotenv.config();

const app = express();
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));

var corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(authRoute);
app.use(userRoute);
app.use(postRoute);
app.use((_req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

db.mongoose.set('useCreateIndex', true)
db.mongoose
  .connect(process.env.MONGO_URL,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

// simple route
app.get("/", (_req, res) => {
  res.json({ message: "Welcome to Tweet application." });
});

module.exports = app;
