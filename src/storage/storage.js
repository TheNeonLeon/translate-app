//saveToStorage - Function to save to local storage
export const saveToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

//readTheStorage - function to read the storage in localStorage
export const readTheStorage = key => {
    const data = localStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    }
    else {
        return null;
    }
}