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

export function addMessage(data, cb) {
    //console.log(data);
    const request = fetch(`${URL}/messages`, {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        //() => cb()
    )

    return {
        type: 'ADD_MESSAGES',
        payload: 'Message saved successfully..!!!'
    }
}

export function clearState(){
    return {
        type: 'CLEAR_TEXT',
        payload: ' '
    }
}