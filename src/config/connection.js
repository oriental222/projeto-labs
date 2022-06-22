const { ConsoleLogger } = require('@nestjs/common');
const mongoose = require('mongoose');
const { brotliDecompress } = require('zlib');
function connection() {
  let usuario = process.env.NODE_USER;
  let senha = process.env.NODE_PASS;
  if (process.env.NODE_ENV !== 'producao') {
    require('dotenv').config();
    usuario = process.env.NODE_USER;
    senha = process.env.NODE_PASS;
  } else {
    usuario = process.env.NODE_USER;
    senha = process.env.NODE_PASS;
  }
  const URL =
    'mongodb+srv://Oriental222:5xW4z9Zcu-QD-Vt@cluster0.ynhjkvu.mongodb.net/?retryWrites=true&w=majority';

  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on('error', () => {
    console.log('ERROR CONNECTION');
  });
  db.on('open', () => {
    console.log('CONNECTED SUCCESSFULLY');
  });
}
connection();