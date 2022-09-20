import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://632484fabb2321cba92e653d.mockapi.io/contacts'
})

export const fetchContacts = async () => {
    const { data } = await instance.get('/')
    // console.log('data', data);
    return data;
}

export const addContact = async (data) => {
    // console.log('addContact')
    const { data: result } = await instance.post("/", data);
    // console.log(result);
    return result;
}

export const removeContact = async (id) => {
    const { data } = await instance.delete(`/${id}`);
    return data;
}