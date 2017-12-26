$(function () {
  var socket = io();
  $('form').submit(function(){
    const Imsg =  $('#m').val()
    socket.emit('chat message', Imsg);
    $('#messages').append($('<li>').text(Imsg));
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });

  socket.on('new user', function() {
    $('#notif').append($('<li>').text('new user joined!'))
  })
  socket.on('user gone', function() {
    $('#notif').append($('<li>').text('1 user left!'))
  })
});