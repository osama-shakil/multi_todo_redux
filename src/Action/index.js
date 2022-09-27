import firebase from "../config"

export const addloader=(data)=>dispatch=>{
    dispatch({
        type: "ADDLOADER",
        payload: data
      });
}
export const getloader=(data)=>dispatch=>{
    dispatch({
        type: "GETLOADER",
        payload: data
      });
}
export const updateloader=(data)=>dispatch=>{
    dispatch({
        type: "UPDATELOADER",
        payload: data
      });
}

export const addDatatolist = (objdata,onSuccess=()=>{}) => async dispatch => {
    await dispatch(addloader(true))
    
    await firebase
        .firestore()
        .collection("Data")
        .add(objdata)
        .then((res) => {
            alert("Data inserted Sucessfully..!")
            onSuccess()
            dispatch(addloader(false))
        })

    // return{
    //     type:'Add',
    //     payload:objdata 
    // }
    //  OR
    // dispatchEvent({type:'Add',payload:objdata})
}

export const deleteDatatolist = (id) => {

    console.log(id, "id");
  firebase
    .firestore()
    .collection("Data")
    .doc(id)
    .delete()
    .then((res) => {
      alert("Data Successfully deleted...");
      getData();
    });

}


// export const updateDatatolist=(val,id)=>{
//     console.log('val',val)

//     return{
//        type:'Update',
//        payload:{val,id}
//     }

//     }
export const getData = (onSuccess=()=>{}) => async (dispatch) => {
    await dispatch(getloader(true))
    firebase
      .firestore()
      .collection("Data")
      .onSnapshot((query) => {
        let data = [];
        for (let doc of query.docs) {
          data.push({ id: doc.id, ...doc.data() });
        }
        
        dispatch({
          type: "Get_Data",
          payload: data
        });
        onSuccess()
        dispatch(getloader(false))
      });
  };


export const updateDatatolist = (val, id,onSuccess=()=>{}) => async dispatch => {
    await dispatch(updateloader(true))
    // console.log(val, "val",'id',id);
    firebase
      .firestore()
      .collection("Data")
      .doc(id)
      .update({
        inputtxt:val.inputtxt,
      })
      .then((res) => {
        alert("Data updated Successfully...");
        getData();
        onSuccess()
        dispatch(updateloader(false))
      });
   // dispatch({ type: 'Update', payload: { val, id } })
}