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

export const boardSave = (dataToSave) => ({
  type: types.SAVE,
  dataToSave: {
    id: dataToSave.id,
    title: dataToSave.title,
    content: dataToSave.content
  }
});

export const boardDelete = (postId) => ({
  type: types.DELETE,
  postId
});

export const boardSelected = (postId) => ({
  type: types.SELECTED,
  postId
});

//initialState 
const initialState = {
  boards: [
    {
      id: 1, title: '안녕하세요', content: '반갑습니다'
    },
    {
      id: 2, title: 'Hi', content: 'Nice to meet you'
    },
    {
      id: 3, title: '오하요', content: '하지메마시떼'
    },
  ],
  ids: 3, //id 기준, 새로 추가되는 id가 있다면 하나 늘리기
  selected : {} //find함수를 통해서 boards에서 선택된 데이터를 넣을 예정
}