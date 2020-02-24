import request from 'supertest';
import app from '../../src/app';

describe('Deliveryman', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/deliverymans')
      .send({
        name: 'Marty Mcfly',
        email: 'marty@gmail.com',
      });

    expect(response.status).toBe(200);
  });
});
