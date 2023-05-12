import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const defaultRequestConfig = {
  baseURL: 'https://randomuser.me/api/',
  params: {
    inc: 'name,phone',
    results: 20,
  },
};

// const axiosInstance = axios.create(defaultRequestConfig);
  

  export default async function getUsers() {
    const axiosInstance = axios.create(defaultRequestConfig);
    try {
        const {
          data: {
            results,
          },
        } = await axiosInstance.get();
        console.log(results);
      return;
    } catch (error) {
      Notify.failure(error.message);
    }
  }



