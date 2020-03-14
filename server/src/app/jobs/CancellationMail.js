import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../config/mail';

class CancellatioMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { order } = data;

    Mail.sendMail({
      to: `teste`,
      subject: 'Encomenta efetuada com sucesso',
      tamplate: 'cancelation',
      context: {
        provider: 'aquele',
        user: 'Dionatan',
        data: format(
          new Date() /* parseIso(date) */,
          "'dia' dd 'de' MMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new CancellatioMail();
