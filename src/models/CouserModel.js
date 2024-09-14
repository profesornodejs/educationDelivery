const mongoose = require('mongoose');

const user = mongoose.model('user',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const course = mongoose.model('course',
  new mongoose.Schema({ nombre: String, precio: Number })
);

module.exports = {
  User: user,
  Course: course
}

