import axios from 'axios';
import API_ENV from '../config/api.config';

export async function login(email, password) {
  const res = await axios
    .post(`${API_ENV.apiUrl}/login`, JSON.stringify({ email, password }), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .catch((e) => console.log(e));
  return res.data;
}
