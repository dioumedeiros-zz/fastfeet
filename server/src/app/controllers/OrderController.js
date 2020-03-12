import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Order from '../models/Order';
import Mail from '../../config/mail';

class OrderController {
  async store(req, res) {
    const order = await Order.create(req.body);

    await Mail.sendMail({
      to: `teste`,
      subject: 'Encomenta efetuada com sucesso',
      tamplate: 'cancelation',
      context: {
        provider: 'aquele',
        user: 'Dionatan',
        data: format(new Date(), "'dia' dd 'de' MMM', às' H:mm'h'", {
          locale: pt,
        }),
      },
    });

    return res.json(order);
  }
}

export default new OrderController();
