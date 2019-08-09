/**
 * Emulador Geanymotion: 10.0.3.2
 */

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
