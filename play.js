const { connect } = require("./client")
const { setupInput } = require("./input")
const connection = connect();

console.log("Connecting ...");
// Start game 
// setup interface to handle user input from stdin
setupInput(connection); 

/*This code has been moved to input.js 

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Event listener for stdin 
  stdin.on("data", handleUserInput);
   
  const handleUserInput = function (data) {
      // what happens when data is received?
      if (data === '\u0003') {
        process.exit()
      }

      if (data === 'w') {
        // Move up 
        connect.write('Move: up')
      }

      if (data === 'a') {
        // Move left
        connect.write('Move left')
      }

      if (data === 's') {
        // Move down
        connect.write('Move: down')
      }

      if (data === 'd') {
        // Move right
        connect.write('Move right')
      }

    };

  

  return stdin;
};

module.exports = { setupInput }; 

const {connect} = require("./client");
const {setupInput} = require("./input");

console.log("Connecting ...");
let conn = connect();

setupInput(conn);

*/
