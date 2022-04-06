const express = require('express');
const router = express.Router();
const axios=require ('axios')

router.get('/:q', (req, res) => {
    let query = req.params.q

    
    axios.get (`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}&limit=5`)
    .then((response) => {
        console.log(response.data);
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })

})

module.exports = router;