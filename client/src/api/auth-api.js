import requester from "./requester.js"

const BASE_URL = "http://localhost:7777/auth"

export const login = async (email, password) => {

    const authData = await requester.post(`${BASE_URL}/login`, { email, password })
    
    return authData
}

export const register = async (email, password, rePass) => {
    const authData = await requester.post(`${BASE_URL}/register`, { email, password, rePass })

    return authData

}

export const logout = () => {

    return requester.get(`${BASE_URL}/logout`);

}