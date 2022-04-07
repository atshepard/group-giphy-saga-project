import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'



function App(props) {
  const [newQuery, setNewQuery] = useState('');
  const dispatch = useDispatch();
  const results = useSelector(store => store.getResults);
  useEffect(() => {
    dispatch({ type: 'GET_CATEGORIES' })
  }, []);

  const categories = useSelector(store => store.categoryReducer)

  const getSearchItems = () => {
    dispatch({ type: 'SET_QUERY', payload: newQuery })
  }

  const addFav = () => {

    // dispatch({ type: 'ADD_FAV', payload: thisItem})
  }

  console.log(categories);
  return (
    <>
      <div>
        <h1>Giphy Search!</h1>
        <input type="text" placeholder="SEARCH" value={newQuery} onChange={(event) => setNewQuery(event.target.value)} />
        <button onClick={getSearchItems}>SEARCH</button>
      </div>

      <div className="imageContainer">
        {results.map((result, i) => {
          console.log(result);
          return (
            <div className="image" key={i}>
              <img src={result.images.fixed_width.url} />
              <button onClick={addFav}>ADD TO FAVORITES</button>
              <div>

              {categories.map((category,i)=>{
          return (<input type="radio" value={category.name} name="category"/> )
                }

                )}

              </div>

            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
