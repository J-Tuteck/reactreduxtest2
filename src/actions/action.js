export const storeData=(name,address,img1,img2)=>{
    return{
        type:"STOREDATA",
        payload:{
            id:Date.now(),
            name:name,
            address:address,
            movieImg : img1,
            directorImg : img2
        }
    }
}

export const updateInitialData=(obj)=>{
    return{
        type:"UPDATEDATA",
        payload:obj
    }
}