import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Deliveryman', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/deliverymans')
      .send({
        name: 'Marty Mcfly',
        email: 'marty@gmail.com',
      });

    expect(response.status).toBe(200);
  });

  it('should be able to list registers', async () => {
    const deliveryman = await factory.attrs('Deliveryman');
    await request(app)
      .post('/deliverymans')
      .send(deliveryman);

    const { status, text } = await request(app).get('/deliverymans');
    const objResponse = JSON.parse(text);

    expect(status).toBe(200);
    expect(objResponse).toHaveLength(1);
  });

  it('should be able to update register', async () => {
    const deliveryman = await factory.attrs('Deliveryman');
    const res = await request(app)
      .post('/deliverymans')
      .send(deliveryman);

    const { id } = res.body;

    const { status, text } = await request(app)
      .put(`/deliveryman/${id}`)
      .send({
        name: 'Emmet Brown',
      });
    const objResponse = JSON.parse(text);

    expect(status).toBe(200);
    expect(objResponse).toHaveProperty('name', 'Emmet Brown');
  });

  it('should be able to delete register', async () => {
    const deliveryman = await factory.attrs('Deliveryman');
    const res = await request(app)
      .post('/deliverymans')
      .send(deliveryman);

    const { id } = res.body;

    const { status } = await request(app).delete(`/deliveryman/${id}`);

    expect(status).toBe(200);
  });
});
