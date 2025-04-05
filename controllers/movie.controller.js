const { regex } = require('uuidv4')
const Movie = require('../models/movie.model')

const findAllMovies = async (req, res) => {
  const {status, title, genres, artists, start_date, end_date} = req.query
  console.log(req.query)
    try {
      let query = {}

      if(status){
        if(status === "PUBLISHED"){
          query.published = true
        }else if(status === "RELEASED"){
          query.released = true

          if(title){
            query.title = { $regex: title, $options: 'i' };
          }
          if(genres){
            query.genres = { $in: genres.split(",")}
          }
          if (artists) {
            const artistNames = artists.split(','); 
            query.artists = {
                $elemMatch: {
                    $or: artistNames.map(artistName => {

                        const [firstName, lastName] = artistName.trim().split(' ');
                        
                        return {
                            first_name: { $regex: firstName, $options: 'i' },
                            last_name: { $regex: lastName, $options: 'i' }
                        };
                    })
                }
            };
        }
        
        
          if(start_date){
            const startDate = new Date(start_date)
            query.release_date = {$gte : startDate}
          }
          if(end_date){
            const endDate = new Date(end)
            query.release_date = {$lte : endDate}
          }
          
        }
      }
      const movies = await Movie.find(query); 
      res.json({movies:movies}); 
    } catch (error) {
      console.error("Error fetching movies:", error);
      res.status(500).json({ message: "Error fetching movies" });
    }
  } 


const findOne = async (req, res) => {
    const id = req.params.movieId
    try {
      const movie = await Movie.findOne({movieid: id}); 

      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }

      res.send( movie );  
    } catch (error) {
      console.error("Error fetching movies:", error);
      res.status(500).json({ message: "Error fetching movies" });
    }
} 


const findShows = async(req, res)=>{
    const id = req.params.movieId

    try{
        const movie = await Movie.findOne({movieid: id})
        if(!movie){
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.send(movie.shows);
        
    }catch(error){
        console.error("Error fetching movie shows:", error);
        res.status(500).json({ message: "Error fetching movies shows" });
    }
}

module.exports = {findAllMovies,findOne, findShows }