const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM favorites;'
  pool.query(queryText)
  .then ((result) => {res.send(result.rows);})
  .catch(()=> {
    console.log('error in get')
    res.sendStatus(500);
  })
  res.sendStatus(200);
  
});

// add a new favorite
router.post('/', (req, res) => {
const newFavorite = req.body;
const queryText = `INSERT INTO favorites ("url", "category_id")
VALUES ($1,$2);`;
const queryValues =[
newFavorite.url,
newFavorite.categoryId
]
pool.query(queryText,queryValues)
.then(()=> {res.sendStatus(200);})
.catch((err) => {
  console.log('error in post');
  res.sendStatus(500);
})
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
