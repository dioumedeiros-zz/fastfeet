import request from 'supertest';
import app from '../../src/app';

describe('Orders', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/orders')
      .send({
        product: 'Product test',
        canceled_at: new Date(),
        start_date: new Date(),
        end_date: new Date(),
      });

    expect(response.status).toBe(200);
  });
});
