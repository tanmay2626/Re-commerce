
export const initialState = {
    currentItem : null,
    wishList : [],
    city : 'Mumbai',
    category : 'All',
    search : null
}

const reducer = (state,action) =>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'CURRENT_ITEM' : 
        return {
            ...state,
            currentItem : action.item
        }
        case 'ADD_TO_WISHLIST':
            return {
                ...state,
                wishList: [...state.wishList, action.item]
            }
        case 'REMOVE_FROM_WISHLIST':
                const index = state.wishList.findIndex(
                    (item)=> 
                    item.product_id === action.product_id
                )
                let newWishList = [...state.wishList];
                if(index>=0){
                    newWishList.splice(index,1)
                }
                return {
                    ...state,
                    wishList: newWishList
                }
        case 'SET_LOCATION':
            return {
                ...state,
                city : action.item,
            }
        case 'SET_CATEGORY':
                return {
                    ...state,
                category : action.item,
            }
        case 'SET_SEARCH':
                return {
                    ...state,
                search : action.item,
            }
        default:
        return state
    }
}

export default reducer
