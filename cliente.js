const dgram = require("dgram");
const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,

});

const cliente = dgram.createSocket("udp4");
message = Buffer.from("Conexion Establecida");
cliente.send(message, 3500, 'localhost')


console.log("chateando con el usuario en el puerto 3500")

cliente.on('message', data=>{
  console.log("Usuario en el puerto 3500: ", data.toString());

});

cliente.on('end', ()=>{
  console.log('desconectado');
});

rl.prompt();
rl.on('line', (line) => {
  cliente.send(line, 3500, 'localhost');
  rl.prompt(true);
});
