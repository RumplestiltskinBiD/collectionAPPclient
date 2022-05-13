import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../actions/actionsItem";
import UsersList from "./userList/usersList";
import {getAllUsers} from "../../actions/actionsUser";

const AdminPage = () => {
    const dispatch = useDispatch()
    const allItems = useSelector(state => state.collection.currentCollection)
    const collectionStack = useSelector(state => state.collection.collectionStack)

    useEffect(() => {
        dispatch(getAllUsers(allItems))
        /*console.log(allItems + " !!")
        console.log(allItems.length)*/
    }, [allItems])

    return (
        <div>
            <div className="header">
                AdminPage
                <p>List of users:</p>
            </div>


            <UsersList />
        </div>
    );
};

export default AdminPage;