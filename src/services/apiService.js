const axios = require('axios');

const API_URL = 'https://appsaccess.automy.com.br/api/api/desafio/custom/do/query';

async function getBaterias(token, query) {
  try {
    const response = await axios.post(API_URL, {
      query: query,
      db: 'desafio'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(`Erro na consulta à API: ${error.response?.data?.message || error.message}`);
  }
}

module.exports = { getBaterias };