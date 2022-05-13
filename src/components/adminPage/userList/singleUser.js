import React from 'react';
import "../adminPageCss.css"
import {deleteItem} from "../../../actions/actionsItem";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../../actions/actionsUser";
/*onClick={(e) => deleteClickHandler(e)}*/
const SingleUser = ({user}) => {
    const dispatch = useDispatch()
    function deleteClickHandler(e) {
        e.stopPropagation()
        console.log(user)
        dispatch(deleteUser(user))
    }
    return (
        <div className="user">
            <p>User</p>
            <div className="item-name">{user._id}</div>
            <div className="item-name">{user.email}</div>
            <div className="item-name">{user.roles}</div>
            <button onClick={(e) => deleteClickHandler(e)} className="item_btn_delete">Delete</button>
        </div>
    );
};

export default SingleUser;