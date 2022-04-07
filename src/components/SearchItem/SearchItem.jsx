import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'


function SearchItem({ src }) {
    const dispatch = useDispatch();
    const categories = useSelector(store => store.categoryReducer);
    const [category, setCategory] = useState('')

    const addFav = () => {
        console.log(category);

        let thisItem = {
            url: src,
            categoryId: category
        }
        console.log(thisItem);
        dispatch({ type: 'ADD_FAV', payload: thisItem})
    }

    return (<>

        <div className="image">
            <img src={src} />
            <button onClick={addFav}>ADD TO FAVORITES</button>
            <div>

                {categories.map((category, i) => {
                    return (
                    <div key={category.id}>
                        <label htmlFor={category.id}>{category.name}</label>
                        <input onChange={() => setCategory(category.id)} id={category.id} type="radio" value={category.name} name="category" />
                    </div>
                    )})}

            </div>

        </div>

    </>)
}

export default SearchItem;