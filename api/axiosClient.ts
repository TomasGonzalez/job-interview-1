import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

axios.defaults.baseURL = 'https://newsapi.org/v2'

axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('API_Key')
    if (token) {
      config.headers['X-Api-Key'] = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

export default axios
