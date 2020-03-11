import Order from '../models/Order';
import Mail from '../../config/mail';

class OrderController {
  async store(req, res) {
    const order = await Order.create(req.body);

    await Mail.sendMail({
      to: `teste`,
      subject: 'Encomenta efetuada com sucesso',
      text: 'Deu boa',
    });

    return res.json(order);
  }
}

export default new OrderController();
