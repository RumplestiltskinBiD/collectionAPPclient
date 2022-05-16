import React from 'react';
import {useSelector} from "react-redux";
import Item from "./item/item";
import Table from 'react-bootstrap/Table'
import "./itemListStyle.css"
import {useTranslation} from "react-i18next";

const ItemsList = () => {
    const { t } = useTranslation();
    const coll = useSelector(state => state.collection.items)
    const items = coll.map(item => <Item key={item._id} item={item} />)

    if (items.length === 0) {
        return (
            <div className="loader">{t('description.part13')}</div>
        )
    }

    return (
        <Table striped bordered hover size="sm" >
        <div className="itemlist">
            <div className="itemlist-header">
                {coll[0].type === 'collection' ? <h1>{t('description.part14')}</h1> : <h1>{t('description.part15')}</h1>}
            </div>
            {items}
        </div>
        </Table>
    );
};

export default ItemsList;