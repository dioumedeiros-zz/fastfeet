import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Recipient', () => {
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

    const response = await request(app)
      .post('/recipients')
      .set('Authorization', `Bearer ${resSession.body.token}`)
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
