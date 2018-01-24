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
  res.header("Access-Control-Allow-Origin", 'http://10.0.2.2.:8081');
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


//jwt delovi izvadeni
const getUser = async (authorization, secrets, mongo) => {
  const bearerLength = "Bearer ".length;
  if (authorization && authorization.length > bearerLength) {
    const token = authorization.slice(bearerLength);
    const { ok, result } = await new Promise(resolve =>
   
          resolve({
            ok: true,
            result
          })
        
      )
    
    
    if (ok) {
      const user = await mongo.collection('users').findOne({ _id: ObjectId(result._id) });
      return user;
    } else {
      console.error(result);
      return null;
    }
  }
  
  return null;
};

export async function context(headers, secrets) {
  if (!mongo) {
    mongo = await MongoClient.connect(secrets.MONGO_URL);
  }
  const user = await getUser(headers['authorization'], secrets, mongo);
  
  return {
    headers,
    secrets,
    mongo,
    user,
  };
};