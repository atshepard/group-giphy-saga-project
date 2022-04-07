import SearchItem from '../SearchItem/SearchItem'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

function SearchList() {
    const dispatch = useDispatch();
    const results = useSelector(store => store.getResults);
    const categories = useSelector(store => store.categoryReducer)


  
    return (
        <>
            <div className="imageContainer">
                {results.map((result, i) => {
                    console.log(result);
                    return (<SearchItem
                    key={i}
                    src={result.images.fixed_width.url}
                    />)
                })}
            </div>

        </>
    )
}

export default SearchList;