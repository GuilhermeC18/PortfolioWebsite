//Import and use express 
import express from 'express';
const app = express();

//Errors 
const createError = require('http-errors');
const errorHandlingMiddleware = require('./middleware/error-handling.middleware');

//Port 
const PORT = process.env.PORT || 8000; 

//Routes
const mainRouter = require('./routes');

//Parser 
const cookieParser = require('cookie-parser');


const morgan = require('morgan');
const path = require('path');

//Image Upload
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

