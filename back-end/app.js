"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var createError = require('http-errors');
var errorHandlingMiddleware = require('./middleware/error-handling.middleware');
var PORT = process.env.PORT || 8000;
var mainRouter = require('./routes');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var path = require('path');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
app.use(express_1.default.json());
app.use(cookieParser());
app.use(morgan());
app.use(mainRouter);
app.use(express_1.default.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('*', function (req, res, next) {
    next(createError(404));
});
app.use(errorHandlingMiddleware);
app.listen(PORT, function () {
    console.log("App is running on " + PORT);
});
