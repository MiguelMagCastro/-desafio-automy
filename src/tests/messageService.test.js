const { formatBaterias } = require('../services/messageService');

describe('Message Service', () => {
  it('should format baterias correctly', () => {
    const baterias = [{
      data_agendamento: '20/04/2025',
      horario_agendamento: '20h',
      nome: 'John Doe',
      qtde_pessoas: '25',
      telefone: '5531991234567',
      datetime_formulario: '16/04/2025 19:03:19'
    }];
    
    const formatted = formatBaterias(baterias);
    expect(formatted).toContain('Bateria 1:');
    expect(formatted).toContain('John Doe');
    expect(formatted).toContain('20/04/2025');
  });

  it('should return message when no baterias', () => {
    expect(formatBaterias([])).toBe('Nenhuma bateria encontrada.');
  });
});