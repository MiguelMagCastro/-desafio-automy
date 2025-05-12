const { authenticate } = require('../services/authService');
const axios = require('axios');

jest.mock('axios');

describe('Auth Service', () => {
  it('should return a token on successful authentication', async () => {
    const mockToken = 'mock-token';
    axios.post.mockResolvedValue({ data: { token: mockToken } });
    
    const token = await authenticate();
    expect(token).toBe(mockToken);
  });

  it('should throw an error when authentication fails', async () => {
    axios.post.mockRejectedValue(new Error('Network Error'));
    
    await expect(authenticate()).rejects.toThrow('Falha na autenticação: Network Error');
  });
});