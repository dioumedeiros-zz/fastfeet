import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
      return res.status(400).json({ error: 'Duplicated e-mail' });
    }

    const { id, name, email: emailUser } = await User.create(req.body);

    return res.json({ id, name, emailUser });
  }
}

export default new UserController();
