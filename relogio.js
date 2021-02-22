function proximo_segundo() {
    var hoje = new Date
    var hora = hoje.getHours()
    var minutos = hoje.getMinutes()
    var segundos = hoje.getSeconds()

    if(segundos <10){
      segundos = "0"+segundos;
    }
    if(minutos <10){
      minutos = "0"+minutos;
    }
    if(hora <10){
      hora = "0"+hora;
    }

    document.getElementById('hora').innerHTML = hora;
    document.getElementById('minuto').innerHTML = minutos;
    document.getElementById('segundo').innerHTML = segundos;

    var result = hora +":"+minutos+":"+segundos;
    setTimeout('proximo_segundo()', 1000)

  }
  proximo_segundo();