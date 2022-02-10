import axios from 'axios';
import { MAIN_URL } from './Url';

 let token=localStorage.getItem('_token');

export function getProfile(email){
    return axios.get(`${MAIN_URL}profile/${email}`,
    {headers:{"Authorization":`Bearer ${token}`}}
    );
}

export function register(){
    return axios.post(`${MAIN_URL}register`);
}

export function login(data){
    return axios.post(`${MAIN_URL}login`,data);
}

export function createBlog(data){
    return axios.post(`${MAIN_URL}addblog`,data);
}

export function getBlog(email){
    return axios.get(`${MAIN_URL}getblog/${email}`,
    {headers:{"Authorization":`Bearer ${token}`}}
    );
}

export function getBlogsAll(){
    return axios.get(`${MAIN_URL}getallblog`);
}

export function editBlog(data,id){
    console.log(id);
    return axios.post(`${MAIN_URL}editblog/${id}`,data);
}

export function getsingleblog(data){
    return axios.get(`${MAIN_URL}singleblog/`+data);
}