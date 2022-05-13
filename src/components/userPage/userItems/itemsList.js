import React from 'react';
import {useSelector} from "react-redux";
import Item from "./item/item";
import Table from 'react-bootstrap/Table'

const ItemsList = () => {
    const items = useSelector(state => state.collection.items).map(item => <Item key={item._id} item={item} />)
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

export default ItemsList;