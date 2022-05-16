import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UsersList from "./userList/usersList";
import {getAllUsers} from "../../actions/actionsUser";
import "./adminPageCss.css"
import {t} from "i18next";

const AdminPage = () => {
    const dispatch = useDispatch()
    const allOfUsers = useSelector(state => state.collection.currentCollection)

    useEffect(() => {
        dispatch(getAllUsers(allOfUsers))
    }, [allOfUsers])

    return (
        <div>
            <div className="admin-header">
                <p>{t('description.part19')}:</p>
            </div>
            <UsersList />
        </div>
    );
};

export default AdminPage;