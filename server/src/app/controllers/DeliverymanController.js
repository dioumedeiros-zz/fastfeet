import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async store(req, res) {
    console.log('asasa ', req.body);
    const deliveryman = await Deliveryman.create(req.body);

    console.log('deliveryman ', deliveryman);

    return res.json(deliveryman);
  }
}

export default new DeliverymanController();
