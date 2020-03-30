const initialState = {
    data:[],
    name:"siva"
}

const deleteFn = (state, action)=>{
let data = state.data.filter(item =>item.id !== action.payload )
    return {
        ...state,
        data

    }
}
export default (state = initialState,action)=>{
    switch(action.type){
        case 'ADD_TASK':return {
            ...state,
            data:[...state.data, action.payload]

        }
        case 'DELETE_TASK': return deleteFn(state, action)
        default:return state;
    
}
}


