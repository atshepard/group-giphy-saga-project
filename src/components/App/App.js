import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import SearchList from '../SearchList/SearchList';



function App(props) {
  const [newQuery, setNewQuery] = useState('');
  const dispatch = useDispatch();
  // const results = useSelector(store => store.getResults);
  useEffect(() => {
    dispatch({ type: 'GET_CATEGORIES' })
  }, []);

  const categories = useSelector(store => store.categoryReducer)

  const getSearchItems = () => {
    dispatch({ type: 'SET_QUERY', payload: newQuery })
  }

  //console.log(categories);
  return (
    <>
      <div>
        <h1>Giphy Search!</h1>
        <input type="text" placeholder="SEARCH" value={newQuery} onChange={(event) => setNewQuery(event.target.value)} />
        <button onClick={getSearchItems}>SEARCH</button>
      </div>
      <SearchList />
    </>
  );
}

export default App;
