function changeVideo(videoNumber, element) {
  var videoPlayer = document.getElementById("videoPlayer");
  // Cambiar la fuente del video según el número seleccionado
  switch (videoNumber) {
      case 1:
          videoPlayer.src = "../img_prueba/gatito en toalla original.mp4";
          break;
      case 2:
          videoPlayer.src = "../img_prueba/Gatitos  Maullando.mp4";
          break;
      case 3:
          videoPlayer.src = "../img_prueba/MICHIS 1.mp4";
          break;
      case 4:
          videoPlayer.src = "../img_prueba/Quiero Ver tu Cara de Guerra Meme Gatito.mp4";
          break;
  }
  videoPlayer.play();
  
  // Cambiar el color del número seleccionado
  var allNumbers = document.querySelectorAll('.number');
  allNumbers.forEach(function(num) {
      num.classList.remove('selected');  // Eliminar la clase "selected" de todos los números
  });
  
  element.classList.add('selected');  // Añadir la clase "selected" al número clicado
}