const URL = 'http://localhost:3004'

export function getMessages() {

    const request = fetch(`${URL}/messages`, {
        method: 'GET'
    }).then(resp => resp.json());
    return {
        type: 'GET_MESSAGES',
        payload: request
    }
}