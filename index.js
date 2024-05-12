const dgram = require("dgram");

const server = dgram.createSocket('udp4');
const readline = require('readline');
const port = 3500;
var rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
 
});

var clienteSocket = 0;

server.on('message', (data, rinfo) =>{
  console.log(`Usuario en el puerto ${rinfo.port}: ${data}`);
  clienteSocket = rinfo.port;

});

server.on("listening", () =>{
  console.log('server escuchando en el puerto', port);

});

server.on('close', (err) => {
  if(err) console.log(err);
  console.log('cliente desconectado');
  server.close();
})

server.bind(port);

rl.prompt();

 
rl.on('line', (line) =>{
  server.send(line, clienteSocket,"localhost");
  rl.prompt(true);
});


