export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_MESSAGES':
            return {
                ...state,
                'messages': action.payload
            }
        default:
            return state;
    }
}
