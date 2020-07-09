  var imagenes = [];
  imagenes["1"] = "1.jpg";
  imagenes["5"] = "5.jpg";
  imagenes["10"] = "10.jpg";
  imagenes["20"] = "20.jpg";
  imagenes["50"] = "50.jpg";
  imagenes["100"] = "100.jpg";


  var dinero;
  var mostrar;
  var div = 0;
  var papeles = 0;

  var t = document.getElementById("dinero");

  var resultado = document.getElementById("resultado");

  var b =  document.getElementById("extraer");
  b.addEventListener("click", entregarDinero);

  var f =  document.getElementById("finalizar");
  f.addEventListener("click", finish()
  {

    resultado.innerHTML = '';
    t.value = '';

  }, false);


  class Billete
  {
    constructor (v, c)
    {
      this.valor = v;
      this.cantidad = c;
      this.imagen =  new Image();
      this.imagen.src = imagenes[this.valor];
    }
  }


    function entregarDinero()
    {
      dinero = parseInt(t.value);
      for(var bi of caja)
      {

        if(dinero > 0)
        {
          div = Math.floor(dinero / bi.valor);

          if(div > bi.cantidad)
          {
            papeles = bi.cantidad;
          }
          else
          {
            papeles = div;
          }

          for(var i = 0; i < papeles; i++)
          {
            entregado.push(new Billete(bi.valor, 1));
          }

          dinero -= (bi.valor * papeles);
          bi.cantidad -= papeles;

        }

      }

        if(dinero > 0)
        {
          resultado.innerHTML = "<strong> <em> Lo lamento, ha excedido la cantidad que tenemos disponible. </em> </strong> ";
        }

        else
        {

          resultado.innerHTML = "<strong> <em>Se han retirado: </em></strong> <br/>";

          for (var e of entregado)
          {

            if(e.cantidad > 0)
            {
              mostrar = resultado.appendChild(e.imagen);
            }

          }

          entregado.splice(1, 1);

        }

    }

    finish()
    {
      resultado.innerHTML = '';
      t.value = '';
    }

  var entregado = [];
  var caja = [];
  caja.push(new Billete(100, 15))
  caja.push(new Billete(50, 15));
  caja.push(new Billete(20, 15));
  caja.push(new Billete(10, 15));
  caja.push(new Billete(5, 15) );
  caja.push(new Billete(1, 15));
