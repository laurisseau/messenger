"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controller/user");
const express_1 = require("express");
const userRouter = express_1.Router();
userRouter.post('/login', user_1.login);
userRouter.post('/signUp', user_1.signup);
userRouter.get('/email/:id', user_1.decodeJwtToVerify);
userRouter.post('/emailVerification', user_1.emailVerification);
exports.default = userRouter;
