import React from 'react';
import {useSelector} from "react-redux";
import SingleUser from "./singleUser";
import "../adminPageCss.css"

const UsersList = () => {
    const users = useSelector(state => state.user.users).map(user => <SingleUser key={user._id} user={user} />)
    return (
        <div className="user-list">
            {users}
        </div>
    );
};

export default UsersList;