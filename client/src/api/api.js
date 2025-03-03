import requester from "./requester.js";

const BASE_URL = "http://localhost:7777/item"

export const getAll = async () => {
    const result = await requester.get(BASE_URL);
    // console.log(result); 
    return result; 
};

export const getOne = async (itemId) => {
    const result = await requester.get(`${BASE_URL}/${itemId}`);
    return result;
};

export const create = async (itemData) => {
    const result = await requester.post(`${BASE_URL}/create`, itemData);

    return result;
};

export const remove = async (itemId) => {
    return await requester.delete(`${BASE_URL}/${itemId}`)
}

export const update = async (itemId, itemData) => {
    return await requester.put(`${BASE_URL}/${itemId}`, itemData)
}