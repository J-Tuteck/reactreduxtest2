const storedData=[];

const dataStorage = (state=storedData,action) => {
  switch(action.type){
    case "STOREDATA":
        const data=action.payload;
        return(
            [...state,data]
        )
    case "UPDATEDATA":
        const updatedata=action.payload;
        const newData=state.map(ele=> ele.id===updatedata.id?updatedata:ele)
        return(
            [...newData]
        )
    default:
        return(
            state
        )
  }
}

export default dataStorage
