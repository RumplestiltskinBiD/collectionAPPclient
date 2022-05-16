import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../actions/actionsItem";
import ItemsAllList from "./ItemsAllList";
import "./mainPage CSS.css"

const MainPage = () => {
    const dispatch = useDispatch()
    const allItems = useSelector(state => state.collection.currentCollection)

    useEffect(() => {
        dispatch(getAllItems(allItems))
    }, [allItems])

    return (
        <div className="user" >
            <ItemsAllList />
        </div>
    );
};

export default MainPage;