var socket = io();

//Para escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Andres',
    mensaje: 'Hola mundo'
}, function(respuesta) {
    console.log('Respuesta server: ', respuesta);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});