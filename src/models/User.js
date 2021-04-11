/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome:
      {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 200],
            msg: 'O nome deve ter entre 3 e 200 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Esse e-mail já existe.',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      password_hash: Sequelize.STRING,
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve ter entre 6 e 50 caracteres.',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 10);
      }
    });

    return this;
  }
  passwordIsValid(password){
    return bcryptjs.compare(password, this.password_hash);
  }
}
