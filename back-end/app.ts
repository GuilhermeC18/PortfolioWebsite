import express from 'express';
const app = express();

const createError = require('http-errors');
const errorHandlingMiddleware = require('./middleware/error-handling.middleware');
const PORT = process.env.PORT || 8000; 
const mainRouter = require('./routes');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads/'})


app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(mainRouter);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req:express.Request, res:express.Response) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.use('*', (req, res, next:express.NextFunction ) =>{
    next(createError(404));
});

app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
});

