export const reducerFunction = (state, action) => {
    switch(action.type){
        case 'added': 
            return [
                ...state, 
                {
                    id: action.id, 
                    text: action.text, 
                    done: false
                }
            ]
            
        case 'edit':
            return state.map(t => t.id === action.id ? {...t, text: action.text, done: action.done} : t)
        
        case 'delete':
            return state.filter(t => t.id !== action.id)
        
        default:
            return state
    }
}
