
export const addDatatolist=(objdata)=>{
   
return{
    type:'Add',
    payload:objdata
}
//  OR
// dispatchEvent({type:'Add',payload:objdata})
}

export const deleteDatatolist=(id)=>{
   
    return{
        type:'Delete',
        payload:id
    }
   
    }


    // export const updateDatatolist=(val,id)=>{
    //     console.log('val',val)
   
    //     return{
    //        type:'Update',
    //        payload:{val,id}
    //     }
       
    //     }

        export const updateDatatolist=(val,id)=>async dispatch=>{
            
            dispatch({type:'Update',payload:{val,id}})
        }