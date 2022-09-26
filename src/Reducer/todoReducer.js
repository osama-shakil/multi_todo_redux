const initialState={
    list:[]
}

const todoReducer=(state=initialState,action)=> {
   
 switch(action.type) {
    case 'Add':
        return {
            ...state,
            list:[...state.list,action.payload]
        }
    case 'Delete':
        return{
                ...state,
                list:state.list.filter((todo,id)=>id!==action.payload)
        }
        case 'Update':
            const {val,id}= action.payload;

            let tempList=[...state.list]
            let index=tempList.findIndex((obj,index)=>index===id)
            tempList[index]=val
            
            return{
                
                    ...state,
                    list:tempList
            }
    default:
        return state
 }
}

export default todoReducer
