import express from 'express';
import midware from './middleWare';
const routes = express.Router();

// TODO: Setup a route that uses midware as a middleware
routes.get('/', midware, () => {
    //TODO: Handles the request
});
export default routes;
