const readline = require('readline');
const authService = require('./services/authService');
const apiService = require('./services/apiService');
const messageService = require('./services/messageService');
const { isFutureDate } = require('./utils/dateUtils');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  try {
    // Autenticar na API
    const token = await authService.authenticate();
    console.log('Autenticação realizada com sucesso!\n');

    // Solicitar email do cliente
    rl.question('Por favor, digite o email do cliente: ', async (email) => {
      try {
        // Buscar baterias do cliente
        const query = `SELECT * FROM desafio.cadastro_baterias_desafio WHERE email = '${email}'`;
        const baterias = await apiService.getBaterias(token, query);
        
        if (baterias.length === 0) {
          console.log('\nNenhuma bateria encontrada para este email.');
          rl.close();
          return;
        }

        // Separar baterias passadas e futuras
        const hoje = new Date();
        const bateriasFuturas = baterias.filter(b => isFutureDate(b.data_agendamento, b.horario_agendamento, hoje));
        const bateriasPassadas = baterias.filter(b => !isFutureDate(b.data_agendamento, b.horario_agendamento, hoje));

        // Mostrar baterias futuras
        console.log('\n--- BATERIAS AGENDADAS ---');
        console.log(messageService.formatBaterias(bateriasFuturas));

        // Perguntar se deseja ver baterias passadas
        if (bateriasPassadas.length > 0) {
          rl.question('\nDeseja visualizar as baterias passadas? (s/n): ', (answer) => {
            if (answer.toLowerCase() === 's') {
              console.log('\n--- BATERIAS PASSADAS ---');
              console.log(messageService.formatBaterias(bateriasPassadas));
            }
            rl.close();
          });
        } else {
          console.log('\nNenhuma bateria passada encontrada.');
          rl.close();
        }
      } catch (error) {
        console.error('Erro ao buscar baterias:', error.message);
        rl.close();
      }
    });
  } catch (error) {
    console.error('Erro na autenticação:', error.message);
    rl.close();
  }
}

main();