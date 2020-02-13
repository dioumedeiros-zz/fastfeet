import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';

describe('Session Authentication', () => {
  it('should not be able to have a user authentication with a user whod not in application', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/sessions')
      .send(user);

    expect(response.status).toBe(401);
  });
});
