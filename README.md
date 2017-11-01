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
