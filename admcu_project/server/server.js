import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { graphqlExpress } from 'apollo-server-express';
import { graphiqlExpress } from 'apollo-server-express';
import './src/config/database/db';
import './src/config/dummyData';

import schema from './src/graphQl/schema/index';


const PORT = 4000; 

const server = express();

server.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Authorization, Origin, Content-Type, Version");
  res.header("Access-Control-Expose-Headers", "X-Requested-With, Authorization, Origin, Content-Type");
  res.header("Access-Control-Request-Headers: Content-Type, Authorization");
  res.header('Access-Control-Allow-Credentials', true);
  next();
})

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }));


server.listen(PORT, () => console.log(`Server is now running on http://localhost:${PORT}`));