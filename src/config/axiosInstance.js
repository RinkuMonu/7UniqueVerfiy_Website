import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.11:8080/api/', 
  // baseURL: 'https://api.finuniques.in/api/', 
  
  headers: {
    'Content-Type': 'application/json',
  },
});
 
axiosInstance.interceptors.request.use(
  (config) => {
                        
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
 
  
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
     
    if (error.response && error.response.status === 401) {
        localStorage.removeItem("token")

      console.error('Unauthorized! Redirecting to login...');
     
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
