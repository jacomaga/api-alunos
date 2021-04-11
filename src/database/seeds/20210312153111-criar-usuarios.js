const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert(
        'users',
      [
        {
          nome: 'Luiz Doe42',
          email: 'luizdoe42@gmail.com',
          password_hash: await bcryptjs.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz Doe22',
          email: 'luizdoe22@gmail.com',
          password_hash: await bcryptjs.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz Doe1',
          email: 'luizdoe33@gmail.com',
          password_hash: await bcryptjs.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz Doe2',
          email: 'luizdoe3@gmail.com',
          password_hash: await bcryptjs.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz Doe4',
          email: 'luizdoe4@gmail.com',
          password_hash: await bcryptjs.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {});

  },

  down: async () => {

  }
};
