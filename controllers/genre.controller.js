const Genre = require('../models/genre.model'); 

const findAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find({});
    res.status(200).json({genres:genres} );

} catch (error) {
    res.status(500).json({ message: 'Error fetching genres', error });
  }
};

module.exports = { findAllGenres };
