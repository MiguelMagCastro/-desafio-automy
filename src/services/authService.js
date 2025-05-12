const axios = require('axios');

const AUTH_URL = 'https://appsaccess.automy.com.br/login';
const AUTH_CREDENTIALS = {
  username: 'fldoaogopdege',
  password: 'ygalepsm'
};

async function authenticate() {
  try {
    const response = await axios.post(AUTH_URL, AUTH_CREDENTIALS, {
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (!response.data.token) {
      throw new Error('Token não recebido na resposta de autenticação');
    }
    
    return response.data.token;
  } catch (error) {
    throw new Error(`Falha na autenticação: ${error.response?.data?.message || error.message}`);
  }
}

module.exports = { authenticate };