import express from 'express';
import routes from './imgProcessing';
import { buildFileSystem } from './buildFileSys';

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
  console.log('Server listen to port ' + port);
  buildFileSystem();
});

export default app;