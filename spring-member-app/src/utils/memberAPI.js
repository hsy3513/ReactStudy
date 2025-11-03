import axios from 'axios';
const API_BASE_URL = 'http://localhost:9999/member';

//axios 기본 설정
const memberAPI = axios.create({
  baseURL: API_BASE_URL,
  // withCredentials: true, //JWT 인증할 때 Refresh Token을 쿠키 전송을 위해 필수
});
//요청 인터셉터 : 요청하기전 해야될 일을 설정하는 부분
memberAPI.interceptors.request.use(
  (config) => {
    console.log('request 요청 전에 처리하는 부분, 주로 헤더 설정');
    return config;
  },
  (error) => {
    console.log('요청시 에러 발생시', error);
    return Promise.reject(error);
  },
);

//응답 인터셉터 : 응답 받기전 해야될 일을 설정하는 부분
memberAPI.interceptors.response.use(
  (response) => {
    console.log('응답 : ', response);
    return response;
  },
  (error) => {
    console.log('응답 오류', error);
    return Promise.reject(error);
  },
);

export const getMemberList = async () => {
  const res = await memberAPI.get('/list');
  console.log('getMemberList', res.data);
  return res.data;
};

export const deleteMember = async (id) => {
  const res = await memberAPI.delete(`/delete/${id}`);
  return res.data;
};

export const getMember = async (id) => {
  const res = await memberAPI.get('/' + id);
  console.log('getMember', res.data);
  return res.data;
};

export const updateMember = async (member) => {
  const res = await memberAPI.patch('/update', member);
  return res.data;
};

export const registerMember = async (member) => {
  const res = await memberAPI.post('/insert', member);
  return res.data;
};