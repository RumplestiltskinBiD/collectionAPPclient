import React, {useState} from 'react';
import InputControlled from "../../inputs/inputs";
import {useDispatch, useSelector} from "react-redux";
import {setPopupDisplay} from "../../reducers/collectionReducer";
import {createCollection} from "../../actions/actionsItem";
import "./popUpStyle.css"
import Closeicon from "../../imageLogo/Closeicon.svg"

const PopUp = () => {
    const [colName, setColName] = useState('')
    const popupDisplay = useSelector(state => state.collection.popupDisplay)
    const currentCollection = useSelector(state => state.collection.currentCollection)
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(createCollection(currentCollection, colName))
        setColName('')
        dispatch(setPopupDisplay('none'))
    }

    return (
        <div className="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <div className="popup-content" onClick={(event => event.stopPropagation())}>
                <div className="popup-header">
                    <div className="popup-title">Create new Collection</div>
                    <button className="popup-close" onClick={() => dispatch(setPopupDisplay('none'))}><img src={Closeicon} alt=''/></button>
                </div>
                <InputControlled type="text" placeholder="Enter collection name" value={colName} setValue={setColName}/>
                <button className="popup-create" onClick={() => createHandler()}>Create</button>
            </div>
        </div>
    );
};

export default PopUp;