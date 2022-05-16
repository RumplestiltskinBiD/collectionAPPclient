import React from 'react';
import Table from "react-bootstrap/Table";
import {useSelector} from "react-redux";
import ItemAll from "./itemAll/itemAll";
import '../userPage/userPageStyle.css'
import {useTranslation} from "react-i18next";

const ItemsAllList = () => {
    const { t } = useTranslation();
    const items = useSelector(state => state.collection.items)
    const onlyLastItems = items.filter(i => i.type !== 'collection').slice(-5, items.length).map(item => <ItemAll key={item._id} item={item} />)
    const biggestCollections = items.filter(i => i.type === 'collection')
        .sort((a, b) => a.childs - b.childs).slice(-5, items.length)
        .map(item => <ItemAll key={item._id} item={item} />)

    if (items.length === 0) {
        return (
            <div className="loader">{t('description.part13')}</div>
        )
    }

    return (
        <Table striped bordered hover size="sm">
            <div className="itemlist">
                <h1 className="p">{t('description.part7')}</h1>
                {onlyLastItems}
                <h1 className="p">{t('description.part8')}</h1>
                {biggestCollections}
            </div>
        </Table>
    );
};

export default ItemsAllList;