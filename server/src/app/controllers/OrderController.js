import Order from '../models/Order';
import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class OrderController {
  async store(req, res) {
    const order = await Order.create(req.body);

    await Queue.add(CancellationMail.key, {
      order,
    });

    return res.json(order);
  }
}

export default new OrderController();
