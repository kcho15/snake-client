// const net = require("net");
// const { setupInput } = require('./play')

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '165.227.47.243',
//     port: '50541',
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   // event handlers 
//   conn.on('connect', () => {
//     console.log('Successfully connected to game server');
//     conn.write('Name: DVA') 
//   })
  
//   // move up hard-coded 
//   // conn.on('connect', () => {
//   //   // move: up
//   //   setTimeout(() => {
//   //     conn.write('Move: up')
//   //   }, 50)  
//   // }); 

//   // Idle message from server, quit program
//   conn.on('data', (data) => {
//     console.log(data); 
//   })
  
//   return conn;
// };

// module.exports = { connect };  

// setTimeout ex. 
// setTimeout(() => {
//   process.stdout.write(char); 
// }, timer)     // 1s delay to make it noticeable. Can dial it down later.
// timer += 50;

const { IP, PORT } = require("./constant");
const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text incase it is in another form
  conn.setEncoding("utf8");
  //connect event
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Successfully connected to game server');
    conn.write('Name: DVA');
    
//conn.write
('Move: up');
    
  });
  
  return conn;
};


module.exports = connect; 