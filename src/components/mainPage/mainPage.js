import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../actions/actionsItem";
import {setCurrentCollection} from "../../reducers/collectionReducer";
import ItemsAllList from "./ItemsAllList";
import ItemsList from "../userPage/userItems/itemsList";


const MainPage = () => {
    const dispatch = useDispatch()
    const allItems = useSelector(state => state.collection.currentCollection)
    const collectionStack = useSelector(state => state.collection.collectionStack)

    useEffect(() => {
        dispatch(getAllItems(allItems))
        console.log(allItems + " !!")
    }, [allItems])

    function backClickHandler() {
        const backCollectionId = collectionStack.pop()
        dispatch(setCurrentCollection(backCollectionId))
    }

    return (
        <div className="user" >
            <div className="user-btn">
                {allItems && <button className="user-btn" onClick={() => backClickHandler()}>Back</button> }
            </div>
            <div className="largest">

            </div>
            <ItemsAllList />
            {/*<ItemsList />*/}{/*{console.log(allItems)}*/}
        </div>
    );
};

export default MainPage;