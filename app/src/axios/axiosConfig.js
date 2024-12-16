import axios from 'axios';

// Создаем экземпляр Axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Укажите базовый URL вашего API
});

//interceptor для запросов
axiosInstance.interceptors.request.use(
  (config) => {
    // Получаем токен из localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Добавляем токен в заголовки запроса
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Обработка ошибок запроса
    return Promise.reject(error);
  }
);

//interceptor для ответов
axiosInstance.interceptors.response.use(
  (response) => {
    // Обработка успешного ответа
    return response;
  },
  (error) => {
    // Обработка ошибок ответа
    if (error.response && error.response.status === 401) {
      // Например, если токен истек, вы можете перенаправить пользователя на страницу входа
      alert('Сессия истекла. Пожалуйста, войдите снова.');
      // Здесь можно добавить логику для перенаправления
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;