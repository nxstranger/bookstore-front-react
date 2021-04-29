import axios from 'axios';
import { back } from '../conf';

const instance = axios.create({
  baseURL: `${back.hostname}:${back.port}/api`,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
