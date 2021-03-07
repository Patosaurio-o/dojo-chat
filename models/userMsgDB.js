const { DataTypes } = require('sequelize');
const sql = require('../db');  

const User = sql.define('User', {     
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Message = sql.define('Message', {     
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
  message: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      msg: 'falta el mensaje'
    }
  }
});

Message.belongsTo(User, {as: "UserE"});
Message.belongsTo(User, {as: "UserR"});

sql.sync()
.then(() => {
  console.log('error 404 Data Base not found')
});

module.exports = {
  User,
  Message
};