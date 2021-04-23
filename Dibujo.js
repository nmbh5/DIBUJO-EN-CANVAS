var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);;
  var l = 0;
  var xi, xf, yi, yf;
  var nxf , nyf;
  var colorcito = "#b5269d"
  var espacio = ancho / lineas;
  console.log(lienzo);
  console.log(document);

  for(l=0 ; l < lineas ; l++)
  {
    xf = espacio * l;
    yi = espacio * (l + 1)
    xi = espacio * l;
    yf = espacio * (l + 1)
    nxf = 300 - xf;
    nyf = 300 - yf;
    dibujarLinea(colorcito, xi, 300, 300, nyf);
    dibujarLinea(colorcito, 0, xf, nxf, 0);
    dibujarLinea(colorcito, 0, xf, yi, 300);
    dibujarLinea(colorcito, xi, 0, 300, yf);
    console.log("Linea " + l);
  }

  dibujarLinea(colorcito, 300,1,1,1);
  dibujarLinea(colorcito, 299,299,299,1);
  dibujarLinea(colorcito, 1,1,1,300);
  dibujarLinea(colorcito, 1,299,299,299);
}
