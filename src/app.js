const cookieParser = require('cookie-parser') ;
const cors = require('cors') ;
const express = require('express') ;
const morgan = require('morgan') ;
const {User} = require('./models/index.js');

const errorHandler = require('./middlewares/errorHandler') ;
const notFound = require('./middlewares/notFound') ;

const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
        methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'authorization'],
    }),
);

app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/posts', postsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;