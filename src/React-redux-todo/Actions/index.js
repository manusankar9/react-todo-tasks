let id = 0;
export const AddTask = data => ({
    type: "ADD_TASK",
    payload: { data, id: id++ }
})

export const DeleteTask = (data) => ({
    type: "DELETE_TASK",
    payload: data
})

