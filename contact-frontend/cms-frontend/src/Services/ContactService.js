import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/contacts';

export const listContacts=()=>{

    return axios.get(REST_API_BASE_URL);                                                           //@GET_MAPPING
    
}

export const createContact_api=(data)=>axios.post(REST_API_BASE_URL,data);                         //@POST_MAPPING with body data                     
export const getContact_api=(id)=>axios.get(REST_API_BASE_URL+'/'+id);                             //@GET_MAPPING with ID path variable
export const updateContact_api=(id,contact)=>axios.put(REST_API_BASE_URL+'/'+id,contact);          //@PUT_MAPPING with body data
export const deleteContact_api=(id)=>axios.delete(REST_API_BASE_URL+'/'+id);                       //@DELETE_mapping with path variable ID