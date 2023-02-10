
export const initialState = {
    currentItem : null
}

const reducer = (state,action) =>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'CURRENT_ITEM' : 
        return {
            ...state,
            currentItem : action.item
        }
        default:
        return state
    }
}

export default reducer
