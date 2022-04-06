import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'



function App(props) {
  const [newQuery, setNewQuery] = useState('');
  const dispatch = useDispatch();
  // useEffect(() => {
  //   //get route
  // }, []);

  const getSearchItems = () => {


    dispatch({ type: 'SET_QUERY', payload: newQuery })
  }


  return (
    <div>
      <h1>Giphy Search!</h1>
      <input type="text" placeholder="SEARCH" value={newQuery} onChange={(event) => setNewQuery(event.target.value)} />
      <button onClick={getSearchItems}>SEARCH</button>
    </div>
  );
}

export default App;
