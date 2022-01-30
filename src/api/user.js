//Imports
import { headerCreate } from './helper'

const userApiUrl = 'https://lechan-noroff-api.herokuapp.com/translations';

//userCheck - Function to check if the user exist in the database
const userCheck = async (username) => {
    try {
        const response = await fetch(`${userApiUrl}?username=${username}`)
        if (!response.ok) {
            throw new Error ('Could not complete the request')
        }
        const data = await response.json
        return [ null, data ]
    }
    catch(error) {
        return [ error.message, [] ]
    }
}

//userCreate - Function to create a new user
const userCreate = async (username) => {

    try {
        const response = await fetch(userApiUrl, {
            method: 'POST',
            headers: headerCreate(),
            body: JSON.stringify({
                username,
                orders: []
            })
        })
        if (!response.ok) {
            throw new Error (`User with the username ${username} could not be created.`)
        }
        const data = await response.json
        return [ null, data ]
    }
    catch(error) {
        return [ error.message, [] ]
    }
}

//userLogin - Function
export const userLogin =  async (username) => {
    const [ errorCheck, user ] = await userCheck(username)

    if (errorCheck !== null) {
        return [ errorCheck, null ]
    }

    if (user.length > 0) {
        return [ null, user.pop() ]
    }

    return await userCreate(username)

}