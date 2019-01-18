export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_MESSAGES':
            return {
                ...state,
                'messages': action.payload
            }
        case 'ADD_MESSAGES':
        return {
            state,
            'success': action.payload
        }
        case 'CLEAR_TEXT':
        return{
            state,
            'success': action.payload
        }
        default:
            return state;
    }
}
