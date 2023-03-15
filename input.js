// Stores the active TCP connection object
let connection;

const setupInput = (conn) => {
  connection = conn;
  
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
    
    if (key === 'w') {
         connection.write('Move: up');
      }
  
    if (key === "a") {
        connection.write("Move: left");
      }
  
    if (key === "s") {
        connection.write("Move: down");
      }
  
    if (key === "d") {
        connection.write("Move: right");
      }
  
      if (key === 'r'){
        connection.write('Say: AAHHHH')
      }
    };
  
    const stdin = process.stdin;
    // Event listener for stdin 
    stdin.on("data", (key) => {
      handleUserInput(key);
    });

    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
};


  // setupInput();

  module.exports = { setupInput }; 