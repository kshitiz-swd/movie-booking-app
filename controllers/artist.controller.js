const Artist = require('../models/artist.model')

const findAllArtists = async(req, res)=>{
    try{
        const artists = await Artist.find({})
        res.send(artists)
    }catch(error){
        console.error("Error fetching artists:", error);
        res.status(500).json({ message: "Error fetching artists" });
    }
}

module.exports = {findAllArtists}
