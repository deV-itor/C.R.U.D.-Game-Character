'use strict';
const bcrypt = require('bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Defina suas associações aqui, se necessário
    }
  }

  User.init(
    {
      nome: DataTypes.STRING,
      login: DataTypes.STRING,
      senha: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  // Hook para executar antes de criar um usuário
  User.beforeCreate(async (user, options) => {
    if (user.senha) {
      const salt = await bcrypt.genSalt(10, 'a');
      user.senha = await bcrypt.hash(user.senha, salt);
    }
  });

  // Hook para executar antes de atualizar um usuário
  User.beforeUpdate(async (user, options) => {
    if (user.senha) {
      const salt = await bcrypt.genSalt(10, 'a');
      user.senha = await bcrypt.hash(user.senha, salt);
    }
  });

  return User;
};
