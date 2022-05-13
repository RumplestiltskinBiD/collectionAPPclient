import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import collectionImg from "../../../imageLogo/Collection";
import itemImg from "../../../imageLogo/item";
import {pushToStack, setCurrentCollection} from "../../../reducers/collectionReducer";

const ItemAll = ({item}) => {

    const currentCollection = useSelector(state => state.collection.currentCollection)
    const dispatch = useDispatch()
    function openCollectionHandler(item) {
        if(item.type === 'collection') {
            dispatch(pushToStack(currentCollection))
            dispatch(setCurrentCollection(item._id))
        }
    }

    return (
        <div className="item" onClick={ () => openCollectionHandler(item)}>
            <img src={item.type === 'collection' ? collectionImg : itemImg} alt="" className="item-img" width="150" height="150"/>
            <div className="item-name">{item.name}</div>
            {/*<div className="item-name">{item.date.slice(0,10)}</div>*/}
            <div className="item-name">{item.type}</div>
            <div className="item-name">Like</div>
            {/*<button onClick={(e) => deleteClickHandler(e)} className="item_btn_delete">Delete</button>*/}
        </div>
    );
};

export default ItemAll;