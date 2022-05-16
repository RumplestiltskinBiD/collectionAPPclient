import axios from "axios";
import {addItem, deleteItemAction, setItems} from "../reducers/collectionReducer";
import {hideLoader, showLoader} from "../reducers/appReducer";

export function getItems(collId) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`http://localhost:5000/api/items${collId ? '?parent=' + collId : ''}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setItems(response.data))
        } catch (e) {
            alert(e.response.data.message)
        } finally {
            dispatch(hideLoader())
        }
    }
}

export function getAllItems(collId) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`http://localhost:5000/api/auth/allitems${collId ? '?parent=' + collId : ''}`)
            dispatch(setItems(response.data))
        } catch (e) {
            alert(e.response.data.message)
        } finally {
            dispatch(hideLoader())
        }
    }
}

export function createCollection(collId, name) {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/items`,{
                name,
                parent: collId,
                type: "collection"
            }, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(addItem(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function uploadItem(item, collId) {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append("item", item)
            if (collId) {
                formData.append("parent", collId)
            } else {
                return alert("There is no collection")
            }

            const response = await axios.post(`http://localhost:5000/api/items/upload`, formData, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(addItem(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function deleteItem(item) {
    return async dispatch => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/items?id=${item._id}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(deleteItemAction(item._id))
            alert(response.data.message)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function searchItems(search) {
        return async dispatch => {
            try {
                const response = await axios.get(`http://localhost:5000/api/items/search?search=${search}`)
                dispatch(setItems(response.data))
            } catch (e) {
                alert(e.response.data.message)
            } finally {
                dispatch(hideLoader())
            }
        }
    }



