import faker from 'faker';
import { factory } from 'factory-girl';

import User from '../src/app/models/User';
import Deliveryman from '../src/app/models/Deliveryman';

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

factory.define('Deliveryman', Deliveryman, {
  name: faker.name.findName(),
  email: faker.internet.email(),
});

export default factory;
