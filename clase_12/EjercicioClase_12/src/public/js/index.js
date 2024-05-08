const socket = io(); //<--- Es para dar instancia a socket en el js y es lo que genera la lectura del ingreso del cliente por medio del front

// socket.emit("message", "Connection from websocket"); //<---con socket.emit, comunicamos desde el websocket del js al socket de express, por eso es clave respetar el nombre, en este caso message.

const button = document.getElementById("btnSend");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    console.log(`click en el botón`);

    sendMessage();
  });



  message.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Evitar el comportamiento predeterminado del Enter
      sendMessage(); // Llamar a sendMessage cuando se presione Enter
    }
  });
  
  const sendMessage = () => {
    socket.emit("message", message.value ?? null);
    message.value = "";
  };

  const printMessage = document.getElementById('idMessage')



socket.on('message', (data)=>{

    console.log(`Mensaje recibido desde el servidor ${data}`)
    printMessage.innerText = `${data}`
})





const body = document.getElementsByTagName("body")[0];

const clickeado = () => {
  console.log(`clickeado`);
};

const click = body.addEventListener("click", clickeado);
