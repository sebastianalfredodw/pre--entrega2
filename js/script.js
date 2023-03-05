windows.onScroll = function(){
  var posicion = window.pageYOffset || document.documentElement.scrollTop;

  var elemento1 = documentElementById("hola");
  var elemento2 = documentElementById("detalle");

  elemento1.style.bottom = posicion * 0.1 + "px";
  elemento2.style.bottom = posicion * 0.1 + "px";
}