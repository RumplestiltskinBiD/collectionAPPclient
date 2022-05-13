import React from 'react';
import Table from "react-bootstrap/Table";
import {useSelector} from "react-redux";
import Item from "../userPage/userItems/item/item";
import ItemAll from "./itemAll/itemAll";

const ItemsAllList = () => {
    const items = useSelector(state => state.collection.items).map(item => <ItemAll key={item._id} item={item} />)
    /*const items = [{_id: 1, name: 'first', type: 'collection', date: '02.02.2022'},
        {_id: 2, name: 'second', type: 'collection', date: '02.02.2022'}].map(item => <Item key={item._id} item={item} />)*/
    if (items.length === 0) {
        return (
            <div className="loader">Items not founded</div>
        )
    }
    return (
        <Table striped bordered hover size="sm" variant="dark">
            <div className="itemlist">
                <div className="itemlist-header">
                    <div className="itemlist-name">Name</div>
                    <div className="itemlist-date">Date</div>
                    <div className="itemlist-number">Number</div>
                </div>
                {items}
            </div>
        </Table>
    );
};

export default ItemsAllList;