const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, 'config/.env') });

const { sequelize } = require('./models');
const loginRouter = require('./routes/loginRouter.js');
const promotionRouter = require('./routes/promotionRouter.js');
const categoryRouter = require('./routes/categoryRouter.js');
const brandRouter = require('./routes/brandRouter.js');
const indexRouter = require('./routes/indexRouter.js');
const favoriteRouter = require('./routes/favoriteRouter.js');

const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);

app.use('/api', [promotionRouter, categoryRouter, brandRouter]);
app.use('/users', favoriteRouter);
app.use('/', indexRouter, loginRouter);

sequelize.sync().then(() => {
  app.listen(8081);
});
