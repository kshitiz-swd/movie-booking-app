const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Artist = require('./artist.model');

// Create the Movie schema
const movieSchema = new Schema({
  movieid: { type: Number, required: true },
  title: { type: String, required: true },
  published: { type: Boolean, default: false },
  released: { type: Boolean, default: false },
  poster_url: { type: String },
  release_date: { type: Date }, // Ensure proper Date format
  publish_date: { type: Date }, // Ensure proper Date format
  artists: [{ type: Schema.Types.ObjectId, ref: 'Artist' }], // Reference to the Artist model
  genres: [{ type: String }],
  duration: { type: Number }, // Movie duration in minutes
  critic_rating: { type: Number }, // Critic rating (perhaps 1-5 or 1-10 scale)
  trailer_url: { type: String },
  wiki_url: { type: String },
  story_line: { type: String },
  shows: [
    {
      id: { type: Number },
      theatre: {
        name: { type: String },
        city: { type: String }
      },
      language: { type: String },
      show_timing: { type: Date },
      available_seats: { type: Number }, // Should be a number, not a string
      unit_price: { type: Number }
    }
  ]
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
