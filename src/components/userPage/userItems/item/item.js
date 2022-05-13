import React from 'react';
import collectionImg from '../../../../imageLogo/Collection'
import itemImg from '../../../../imageLogo/item'
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentCollection} from "../../../../reducers/collectionReducer";
import {deleteItem} from "../../../../actions/actionsItem";



const Item = ({item}) => {
    const currentCollection = useSelector(state => state.collection.currentCollection)
    const dispatch = useDispatch()
    function openCollectionHandler(item) {
        if(item.type === 'collection'){
            dispatch(pushToStack(currentCollection))
            dispatch(setCurrentCollection(item._id))
        }
    }

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteItem(item))
    }

    return (
        <div className="item" onClick={ () => openCollectionHandler(item)}>
            <img src={item.type === 'collection' ? collectionImg : itemImg} alt="" className="item-img" width="150" height="150"/>
            <div className="item-name">{item.name}</div>
            <div className="item-name">{item.date.slice(0,10)}</div>
            <div className="item-name">{item.type}</div>
            <div className="item-name">Like</div>
            <button onClick={(e) => deleteClickHandler(e)} className="item_btn_delete">Delete</button>
        </div>
    );
};

export default Item;