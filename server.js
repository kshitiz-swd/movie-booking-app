const express = require('express');
const mongoose = require('mongoose');
const { DB_URL } = require('./config/db.config'); 
const app = express();
const cors = require('cors')


app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'], 
    credentials: true,

}));

app.use(express.json());

const movieRoute = require('./routes/movie.routes');
const genresRoute = require('./routes/genre.routes');
const artistRouter = require('./routes/artist.routes');
const userRouter = require('./routes/user.routes');

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});

app.use('/api', movieRoute);
app.use('/api', genresRoute);
app.use('/api', artistRouter);
app.use('/api', userRouter);

const port = 8085;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to the database!");
    app.listen(port, () => {
      console.log(`Listening on PORT: ${port}`);
    });
  })
  .catch((err) => {
    console.error("Cannot connect to the database!", err);
    process.exit(1);
  });
