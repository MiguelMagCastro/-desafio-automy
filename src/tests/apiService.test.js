const { getBaterias } = require('../services/apiService');
const axios = require('axios');

jest.mock('axios');

describe('API Service', () => {
  it('should return baterias data on successful query', async () => {
    const mockData = [{ id: 1 }];
    axios.post.mockResolvedValue({ data: mockData });
    
    const result = await getBaterias('valid-token', 'SELECT * FROM table');
    expect(result).toEqual(mockData);
  });

  it('should throw an error when query fails', async () => {
    axios.post.mockRejectedValue(new Error('API Error'));
    
    await expect(getBaterias('valid-token', 'SELECT * FROM table'))
      .rejects.toThrow('Erro na consulta à API: API Error');
  });
});