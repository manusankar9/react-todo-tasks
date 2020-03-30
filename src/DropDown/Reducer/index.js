const initialState = false
export default (state = initialState,action)=>{
    if(action.type=="CLICK"){
        
        return state = action.payload;
    }
    return state;

}