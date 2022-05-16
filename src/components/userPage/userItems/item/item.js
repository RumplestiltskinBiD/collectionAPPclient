import React from 'react';
import collectionImg from '../../../../imageLogo/books.jpg'
import itemImg from '../../../../imageLogo/Book.svg'
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentCollection} from "../../../../reducers/collectionReducer";
import {deleteItem} from "../../../../actions/actionsItem";
import "../../userPageStyle.css"
import {useTranslation} from "react-i18next";

const Item = ({item}) => {
    const { t } = useTranslation();
    const currentCollection = useSelector(state => state.collection.currentCollection)
    const dispatch = useDispatch()
    function openCollectionHandler(e, item) {
        e.stopPropagation()
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
        <div className="item" >
            <div className="moveitem">
            <img src={item.type === 'collection' ? collectionImg : itemImg} alt=""
                 className="item-img" width="150" height="150" onClick={ (e) => openCollectionHandler(e, item)}/>
            <div className="item-name">{t('description.part12')}: {item.name.length < 15 ? item.name : item.name.slice(0, 15)}</div>
            <div className="item-name">{t('description.part9')}: {item.type === 'collection'?
                t('description.part10') : t('description.part11')}</div>
            <div className="item-name">Like</div>
            <button onClick={(e) => deleteClickHandler(e)} className="item_btn_delete">Delete</button>
            </div>
        </div>
    );
};

export default Item;