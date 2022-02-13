import express from 'express';
import routes from './imgProcessing';
import { buildFileSystem } from './buildFileSys';

const app = express();
const port = 3000;

// TODO: setup a server that uses router(routes) with path /api
app.use('/api', routes);

app.listen(port, () => {
  console.log('Server listen to port ' + port);
  // TODO: Build the filesystem (The three main directories) when the server starts
  buildFileSystem();
});

export default app;
