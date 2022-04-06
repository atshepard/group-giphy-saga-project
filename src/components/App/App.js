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

//   <div key={i}>
//   <p>{result.data?.images.original.url}</p>
// </div>

// {results.map((result, i) => {
//   result.map((item, i) => {
//     <p>{item.data?.images.original.url}</p>
//   })
// })}

  return (
    <>
    <div>
      <h1>Giphy Search!</h1>
      <input type="text" placeholder="SEARCH" value={newQuery} onChange={(event) => setNewQuery(event.target.value)} />
      <button onClick={getSearchItems}>SEARCH</button>
    </div>
    <img src={results[0]?.images.original.url}/>
    {/* <button onClick={console.log(results)}>TEST</button> */}
    {/* <img src={results?.images.original.url}/> */}
    {/*     
    {results.map(result => {
      <div>
        <img src={result?.images.original.url} />
      </div>
    })} */}

    </>
  );
}

export default App;
