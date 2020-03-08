import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Orders', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    await factory.create('User', {
      email: 'admin@fastfeet.com',
      password: '123456',
    });

    const resSession = await request(app)
      .post('/sessions')
      .send({
        email: 'admin@fastfeet.com',
        password: '123456',
      });

    console.log(resSession.body);

    const response = await request(app)
      .post('/orders')
      .set('Authorization', `Bearer ${resSession.body.token}`)
      .send({
        product: 'Product test',
        canceled_at: new Date(),
        start_date: new Date(),
        end_date: new Date(),
      });

    expect(response.status).toBe(200);
  });
});
