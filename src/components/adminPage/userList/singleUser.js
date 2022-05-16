import React from 'react';
import "../adminPageCss.css"
import {useDispatch} from "react-redux";
import {deleteUser} from "../../../actions/actionsUser";
import "../adminPageCss.css"

const SingleUser = ({user}) => {
    const dispatch = useDispatch()
    function deleteClickHandler(e) {
        e.stopPropagation()
        console.log(user)
        dispatch(deleteUser(user))
    }
    return (
        <div className="suser">
            <div className="item-admin">ID: {user._id}</div>
            <div className="item-admin">Email: {user.email}</div>
            <div className="item-admin">Role: {user.roles}</div>
            <button onClick={(e) => deleteClickHandler(e)} className="item_btn_delete">Delete</button>
        </div>
    );
};

export default SingleUser;