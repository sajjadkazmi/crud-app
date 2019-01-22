import actionTypes from '../constant/constant';
const INITIAL_STATE={
    userName: 'sajjad kazmi',
    email :'sajjad.kazmi11@hotmail.com',
    user:[],
}

export default(states = INITIAL_STATE,action)=>{
    switch(action.type){
        case actionTypes.CHANGENAME:
        return({
            ...states,
            // user:action.payload
            user: action.payload
        })
        case actionTypes.DELETE_USER:
        return({
            ...states,
            user:action.payload
        })
        case actionTypes.EDIT_DETAILS:
        return({
            ...states,
            user:action.payload
        })
        // case actionTypes.CHANGEEMAIL:
        // return({
        //     ...states,
        //     user:action.payload
        // })
        default:
        return states;
    }
}