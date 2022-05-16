import React from 'react';
import collectionImg from "../../../imageLogo/books.jpg";
import itemImg from "../../../imageLogo/Book.svg";
import "../../userPage/userPageStyle.css"
import {useTranslation} from "react-i18next";

const ItemAll = ({item}) => {
    const { t } = useTranslation();
    return (
        <div className="item">
            <div className="moveitem">
            <img src={item.type === 'collection' ? collectionImg : itemImg} alt="" className="item-img"/>
            <div className="item-name">{t('description.part12')}: {item.name.length < 15 ? item.name : item.name.slice(0, 15)}</div>
            <div className="item-name">{item.type === 'collection'? t('description.part10') : t('description.part11')}</div>
            <div className="item-name">Like</div>
            </div>
        </div>
    );
};

export default ItemAll;