# admcu-project
## This project aims to demonstrate some of the ubiquitous computing challenges. These are:
1. Offline challenge
2. connectivity challenge
3. Usability challenge

## Requirements
Node and react-native installed

## Architecture: Demand-Driven 
### Server
The server is written in nodejs, expressjs and graphQl
### Client
The client is written in react-native

### Start server locally with command-line
0. Open a terminal and go to parent directory /admcu
1. `cd server`
2. `npm install`
3. `npm start`

### Start client locally from /admcu with command-line
0.  Open a terminal and go to parent directory /admcu
1. `cd client`
2. `npm install`
3.  Run your emulator device. From the emulator directory run the command `emulator @emulator_name`
4.  Open another terminal, go to /admcu/client and run `react-native start`
5.  In the first opened terminal run `react-native run-android`

### Documentation for used technologies

#### Server

1. How to use Resolver and Schema [Apollo Doc](https://www.apollographql.com/docs/graphql-tools/resolvers.html)
2. GraphiQl [Apollo Doc](https://www.apollographql.com/docs/apollo-server/graphiql.html)
3. Authentication ideas
* [Medium tutorials](https://medium.com/handlebar-labs/graphql-authentication-with-react-native-apollo-part-1-2-9613aacd80b3)
* [How to graphQl](https://www.howtographql.com/graphql-js/5-authentication/)
#### MongoDB
1. Installation [Mongo Doc](https://docs.mongodb.com/manual/installation/)
2. About Mongoose Queries [Mongoose Doc](http://mongoosejs.com/docs/queries.html)

### Client
1. Navigation [Reactnavigation](https://reactnavigation.org/)
2. Connect with Server [Apollo Doc](https://www.apollographql.com/docs/react/basics/queries.html)
3. Card package [AirBnB](https://www.apollographql.com/docs/react/basics/queries.html)
4. Components from [Native Base](https://docs.nativebase.io/Components.html#Components)
5. Components from [React-native](https://facebook.github.io/react-native/docs/components-and-apis.html)

