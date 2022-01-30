const apiKey = process.env.REACT_APP_API_KEY;

//headerCreate - Function
export const headerCreate = () => {
    return {
        'Content-Type' : 'application/json',
        'x-api-key' : apiKey
    }
}

