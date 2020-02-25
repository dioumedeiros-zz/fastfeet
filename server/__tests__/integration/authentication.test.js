import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Session Authentication', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should not be able to have a user authentication with a user that not in application', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/sessions')
      .send(user);

    expect(response.status).toBe(401);
  });

  it('should not be able to have authentication with a invalid password', async () => {
    await factory.create('User', {
      email: 'admin@fastfeet.com',
      password: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'admin@fastfeet.com',
        password: '123455',
      });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Password does not match');
  });

  it('should be able to have authentication', async () => {
    await factory.create('User', {
      email: 'admin@fastfeet.com',
      password: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'admin@fastfeet.com',
        password: '123456',
      });

    expect(response.status).toBe(200);
    expect(response.body.user).toHaveProperty('id');
    expect(response.body.user).toHaveProperty('name');
    expect(response.body.user).toHaveProperty('email');
  });
});
