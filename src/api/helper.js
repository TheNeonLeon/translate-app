const apiKey = process.env.REACT_APP_BASE_API_URL;

//headerCreate - to make sure JSON data is sent to the API
export const headerCreate = () => {
    return {
        'Content-Type' : 'application/json',
        'x-api-key' : apiKey
    }
};

