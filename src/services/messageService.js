function formatBaterias(baterias) {
    if (baterias.length === 0) {
      return 'Nenhuma bateria encontrada.';
    }
  
    return baterias.map((b, index) => {
      return `Bateria ${index + 1}:
    Data: ${b.data_agendamento}
    Horário: ${b.horario_agendamento}
    Nome: ${b.nome}
    Quantidade de Pessoas: ${b.qtde_pessoas}
    Telefone: ${b.telefone}
    Data do Agendamento: ${b.datetime_formulario}\n`;
    }).join('');
  }
  
  module.exports = { formatBaterias };