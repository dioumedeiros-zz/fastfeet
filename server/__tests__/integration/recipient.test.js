import request from 'supertest';
import app from '../../src/app';

describe('Recipient', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/recipients')
      .send({
        name: 'Dionatan Medeiros',
        email: 'diou@gmail.com',
        street: 'Reginaldo Luis da Silva',
        number: 300,
        complement: 'Casa',
        state: 'SC',
        city: 'Tubarão',
        zip_code: '88706271',
      });

    expect(response.status).toBe(200);
  });
});
