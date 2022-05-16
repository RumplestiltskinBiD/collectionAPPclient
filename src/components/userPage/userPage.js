import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getItems, uploadItem } from "../../actions/actionsItem";
import ItemsList from "./userItems/itemsList";
import PopUp from "./popUp";
import './userPageStyle.css'
import {setCurrentCollection, setPopupDisplay} from "../../reducers/collectionReducer";

const UserPage = () => {

    const dispatch = useDispatch()
    const currentCollection = useSelector(state => state.collection.currentCollection)
    const collectionStack = useSelector(state => state.collection.collectionStack)
    const [dragEnter, setDragEnter] = useState(false)
    const loader = useSelector(state => state.app.loader)

    useEffect(() => {

        dispatch(getItems(currentCollection))
    }, [currentCollection])

    function showPopupHandler() {
        dispatch(setPopupDisplay("flex"))
    }

    function backClickHandler() {
        const backCollectionId = collectionStack.pop()
        dispatch(setCurrentCollection(backCollectionId))
    }

    function itemUploadHandler(event) {
        const items = [...event.target.files]
        items.forEach(item => dispatch(uploadItem(item, currentCollection)))
    }
    
    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }


    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let items = [...event.dataTransfer.files]
        items.forEach(item => dispatch(uploadItem(item, currentCollection)))
        setDragEnter(false)
    }

    if(loader) {
        return (
            <div className="loader">
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }

    return ( !dragEnter ?

            <div className="user" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                <ItemsList />
                <div className="user-btn">
                    {!currentCollection ? <button className="btn-create-collection"
                                                  onClick={() => showPopupHandler()}>Create new collection</button> : null}
                    <div className="user-upload">
                        {currentCollection ?<label htmlFor="user-upload-input" className="user-upload-label">Download</label> : null}
                        <input
                            multiple={true}
                            onChange={(event) =>
                                itemUploadHandler(event)}
                            type="file" id="user-upload-input"
                            className="user-upload-input"
                        />
                    </div>
                    {currentCollection ?<button className="btn-back" onClick={() => backClickHandler()}>Back</button> : null}
                </div>
                <PopUp />
            </div>
            :
        <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            Drop files here
        </div>
    );
};

export default UserPage;