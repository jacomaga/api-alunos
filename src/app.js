/* eslint-disable import/first */
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';
import express from 'express';
import homeRoute from './routes/home';
import alunoRoute from './routes/aluno';
import userRoute from './routes/user';
import tokenRoute from './routes/token';
import fileRoute from './routes/file';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users/', userRoute);
    this.app.use('/tokens/', tokenRoute);
    this.app.use('/alunos/', alunoRoute);
    this.app.use('/files/', fileRoute);
  }
}

export default new App().app;
