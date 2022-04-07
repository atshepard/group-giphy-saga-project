import FavoriteItem from '../FavoriteItem/FavoriteItem'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function FavoriteList() {

    const dispatch = useDispatch();

    const getFavorite = () => {

        dispatch({ type: 'GET_FAVORITE' })
    }
    useEffect(() => {
        getFavorite()
    }, []);

    const favorite = useSelector(store => store.favoritesReducer);

    return (<>
        {favorite.map((result) => {
            return (<FavoriteItem
                key={result.id}
                src={result.url}
            />)
        })}

    </>)
}

export default FavoriteList;