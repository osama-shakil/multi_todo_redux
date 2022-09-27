const initialState = {
    list: [],
    addloader: false,
    getloader: false,
    updateloader: false,


}

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'Add':
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case 'ADDLOADER':
            return {
                ...state,
                addloader: action.payload
            }
        case 'GETLOADER':
            return {
                ...state,
                getloader: action.payload
            }
        case 'UPDATELOADER':
            return {
                ...state,
                updateloader: action.payload
            }
        case 'Delete':
            return {
                ...state,
                list: state.list.filter((todo, id) => id !== action.payload)
            }

        case 'Update':
            const { val, id } = action.payload;

            let tempList = [...state.list]
            let index = tempList.findIndex((obj, index) => index === id)
            tempList[index] = val

            return {

                ...state,
                list: tempList
            }


        case 'Get_Data':
            return {
                ...state,
                list: action.payload
            }


        default:
            return state
    }
}

export default todoReducer
