import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async store(req, res) {
    const deliveryman = await Deliveryman.create(req.body);

    return res.json(deliveryman);
  }

  async index(req, res) {
    const deliveryman = await Deliveryman.findAll();

    return res.json(deliveryman);
  }

  async update(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    const result = await deliveryman.update(req.body);

    return res.json(result);
  }

  async delete(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    const result = await deliveryman.destroy();

    res.json(result);
  }
}

export default new DeliverymanController();
