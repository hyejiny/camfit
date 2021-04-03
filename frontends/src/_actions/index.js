import axios from 'axios';
import * as types from './ActionTypes';
import {API_BASE_URL, ACCESS_TOKEN} from '../constants';


export function login(data) {
  const request = axios.post(`${API_BASE_URL}/accounts/api-token-auth/`, data).then(res => res.data);
  return {
    type: types.LOGIN,
    payload: request,
  };
}

export function signup(data) {
  const request = axios.post(`${API_BASE_URL}/accounts/signup/`, data).then(res => res.data);
  return {
    type: types.SIGNUP,
    payload: request,
  };
}

export function emailcheck(data) {
  const request = axios.post(`${API_BASE_URL}/accounts/emailCheck/`, data).then(res => res.data);
    return {
        type: types.EMAILCHECK,
        payload: request
    };
}

export function selftrainlist(category) {
    // console.log(category)
    const request = axios.post(`${API_BASE_URL}/selftrains/`,{'category':category},{headers:{Authorization: 'jwt ' + ACCESS_TOKEN}})
        .then((res) => 
            res.data);
    // console.log(category)
    return {
        type: types.SELFTRAINLIST,
        payload: request
    };
}

export function selftraindetail(id) {
    const request = axios.get(`${API_BASE_URL}/selftrains/${id}/detail`,{headers:{Authorization: 'jwt ' + ACCESS_TOKEN}})
        .then((res) => 
            res.data);
    return {
        type: types.SELFTRAINDETAIL,
        payload: request
    };
}
  
export function infolist() {
  const request = axios.get(`${API_BASE_URL}/infoboards/`).then(res => res.data);
  return {
    type: types.INFO,
    payload: request,
  };
}

export function infodetail(id) {
  const request = axios.get(`${API_BASE_URL}/infoboards/${id}/detail`)
      .then((res) => 
          res.data);
  return {
      type: types.INFODETAIL,
      payload: request,
  };
}

export function infolike(id) {
  const request = axios.put(`${API_BASE_URL}/infoboards/${id}/detail`,{headers:{Authorization: 'jwt ' + ACCESS_TOKEN}})
      .then((res) => 
          res.data);
  return {
      type: types.INFODETAIL,
      payload: request,
  };
}

export function videoclasslist() {
  const request = axios.get(`${API_BASE_URL}/fitclasses/`,{headers:{Authorization: 'jwt ' + ACCESS_TOKEN}}).then(res => res.data);
  return {
    type: types.VIDEOCLASS,
    payload: request,
  };
}

export function videoclassdetail(id) {
  const request = axios.get(`${API_BASE_URL}/fitclasses/${id}/detail/`,{headers:{Authorization: 'jwt ' + ACCESS_TOKEN}}).then(res => res.data);
  return {
    type: types.VIDEOCLASSDETAIL,
    payload: request,
  };
}

export function imageshow(category) {
  console.log(category)
  const request = axios.post(`${API_BASE_URL}/gallaries/`,category,{headers:{Authorization: 'jwt ' + ACCESS_TOKEN}})
      .then((res) => 
          res.data);
  console.log(category)
  return {
      type: types.SHOWIMAGE,
      payload: request
  };
}

export function imageget() {
  const request = axios.get(`${API_BASE_URL}/gallaries/get/`,{headers:{Authorization: 'jwt ' + ACCESS_TOKEN}})
      .then((res) => 
          res.data);
  return {
      type: types.GETIMAGE,
      payload: request
  };
}

export function createArticle(data) {
  console.log('index : ', data);
  const request = axios.post(`${API_BASE_URL}/community`, data).then(res => res.data);
  return {
    type: types.ARTICLE,
    payload: request,
  };
}

export function editArticle(id) {
  const request = axios.put(`${API_BASE_URL}/community${id}`, '').then(res => res.data);
  return {
    type: types.ARTICLE,
    payload: request,
  };
}

export function ArticleList() {
  const request = axios.get(`${API_BASE_URL}/community`, {headers:{Authorization: 'jwt ' + ACCESS_TOKEN}}).then(res => res.data);
  return {
    type: types.ARTICLELIST,
    payload: request,
  };
}

export function Articledetail(id) {
  const request = axios.put(`${API_BASE_URL}/community/${id}/detail/`, '', {headers:{Authorization: 'jwt ' + ACCESS_TOKEN}}).then(res => res.data);
  return {
    type: types.ARTICLEDETAIL,
    payload: request,
  };
}
