export const upDateOjectInArray = (items, itemId, objPropName, newObjProps)=> {
    return items.map(u=>{
        if(u.[objectName] === itemId){
            return{...u,...newObjProps}
        }
    })
}