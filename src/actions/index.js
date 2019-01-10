const URL = 'http://localhost:3004';

export function getAllMessages(){
    const request = fetch(`${URL}/messages`, {
        method: 'GET'
    }).then(req => req.json())
    return{
        type: 'GET_MESSAGES',
        payload: request
    }
}