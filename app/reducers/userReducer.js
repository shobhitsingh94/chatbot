import initialState from './initialState';

export default function user(state = initialState.user, action){
    switch(action.type){
        case 'ADD_USER':
            const newState = action.user
            return newState
        default:
            return state
    }
}
