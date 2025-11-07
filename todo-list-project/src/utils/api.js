import axios from 'axios';
const API_BASE_URL = 'http://localhost:9999/todo';

// axios 기본 설정
const todoAPI = axios.create({
  baseURL: API_BASE_URL,
  // withCredentials: true, // JWT 인증할 때 Refresh Token을 쿠키전송을 위해 필수
});

// 요청 인터셉터: 요청하기 전 해야될 일을 설정하는 부분
todoAPI.interceptors.request.use(
  (config) => {
    console.log('request 요청 전에 처리하는 부분');
    return config;
  },
  (error) => {
    console.log('요청 시 에러 발생 시', error);
    return Promise.reject(error);
  },
);

todoAPI.interceptors.response.use(
  (response) => {
    console.log('응답: ', response);
    return response;
  },
  (error) => {
    console.log('응답 오류: ', error);
    return Promise.reject(error);
  },
);

export const getTodoList = async () => {
  const res = await todoAPI.get('/list');
  console.log('getTodoList', res.data);
  return res.data;
}

export const insertTodo = async (todo) => {
  const res = await todoAPI.post('/insert', todo);
  return res.data;
};

export const deleteTodo = async (id) => {
  const res = await todoAPI.delete(`/delete/${id}`);
  return res.data;
};