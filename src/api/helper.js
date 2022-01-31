const apiKey = process.env.REACT_APP_API_KEY;

//headerCreate - to make sure JSON data is sent to the API
export const headerCreate = () => {
    return {
        'Content-Type' : 'application/json',
        'x-api-key' : apiKey
    }
};

