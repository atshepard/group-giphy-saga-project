import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'



function App(props) {
  const [newQuery, setNewQuery] = useState('');
  const dispatch = useDispatch();
  const results = useSelector(store => store.getResults);
  // useEffect(() => {
  //   //get route
  // }, []);

  const getSearchItems = () => {
    dispatch({ type: 'SET_QUERY', payload: newQuery })
  }

  // console.log(results);
  return (
    <>
      <div>
        <h1>Giphy Search!</h1>
        <input type="text" placeholder="SEARCH" value={newQuery} onChange={(event) => setNewQuery(event.target.value)} />
        <button onClick={getSearchItems}>SEARCH</button>
      </div>
    

      {results.map((result, i) => {
        console.log(result);
        return (
          <div key={i}>
            <img src={result.images.original.url} />
          </div>
        )
      })}

    </>
  );
}

export default App;
