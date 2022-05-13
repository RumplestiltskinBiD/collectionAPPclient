const SET_ITEMS = "SET_ITEMS"
const SET_CURRENT_COLLECTION = "SET_CURRENT_COLLECTION"
const ADD_ITEM = "ADD_ITEM"
const SET_POPUP_DISPLAY = "SET_POPUP_DISPLAY"
const PUSH_TO_STACK = "PUSH_TO_STACK"
const DELETE_ITEM = "DELETE_ITEM"

const defaultState = {
    items: [],
    currentCollection: null,
    popupDisplay: 'none',
    collectionStack: []
}

export default function collectionReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ITEMS: return {...state, items: action.payload}
        case SET_CURRENT_COLLECTION: return {...state, currentCollection: action.payload}
        case ADD_ITEM: return {...state, items: [...state.items, action.payload]}
        case SET_POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
        case PUSH_TO_STACK: return {...state, collectionStack: [...state.collectionStack, action.payload]}
        case DELETE_ITEM: return {...state, items: [...state.items.filter(item => item._id !== action.payload)]}
        default:
            return state
    }
}

export const setItems = (items) => ({type: SET_ITEMS, payload: items})
export const setCurrentCollection = (collection) => ({type: SET_CURRENT_COLLECTION, payload: collection})
export const addItem = (item) => ({type: ADD_ITEM, payload: item})
export const setPopupDisplay = (display) => ({type: SET_POPUP_DISPLAY, payload: display})
export const pushToStack = (collection) => ({type: PUSH_TO_STACK, payload: collection})
export const deleteItemAction = (collId) => ({type: DELETE_ITEM, payload: collId})