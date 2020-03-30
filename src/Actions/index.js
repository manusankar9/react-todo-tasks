let id = 0;
export const AddTask = (data)=>{
    return {
        type:"ADD_TASK",
        payload:{data,id:id++}
    }
}

export const DeleteTask = (data)=>{
    return {
        type:"DELETE_TASK",
        payload:data
    }
}

