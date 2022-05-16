import axios from "axios";
import {addItem, deleteItemAction, setItems} from "../reducers/collectionReducer";
import {hideLoader, showLoader} from "../reducers/appReducer";
import {API_URL} from "../config";

export function getItems(collId) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`${API_URL}api/items${collId ? '?parent=' + collId : ''}`, {
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
            const response = await axios.get(`${API_URL}api/auth/allitems${collId ? '?parent=' + collId : ''}`)
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
            const response = await axios.post(`${API_URL}api/items`,{
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

            const response = await axios.post(`${API_URL}api/items/upload`, formData, {
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
            const response = await axios.delete(`${API_URL}api/items?id=${item._id}`, {
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
                const response = await axios.get(`${API_URL}api/items/search?search=${search}`)
                dispatch(setItems(response.data))
            } catch (e) {
                alert(e.response.data.message)
            } finally {
                dispatch(hideLoader())
            }
        }
    }



