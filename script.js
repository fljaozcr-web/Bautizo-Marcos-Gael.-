function abrirInvitacion() {
  document.querySelector(".pantalla-inicio").style.display = "none";
  document.getElementById("invitacion").style.display = "block";
}

function mostrarRegalo() {
  alert("Lo más importante es festejar juntos este gran día.\n\nSi tienes pensado obsequiarme algo, te agradecería que sea en efectivo, ya que regresamos a casa con mis papis.");
}

const fechaEvento = new Date("October 10, 2026 15:00:00").getTime();

setInterval(function () {

  const ahora = new Date().getTime();

  const diferencia = fechaEvento - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  if(document.getElementById("contador")){
      document.getElementById("contador").innerHTML =
      "⏳ Faltan " + dias + " días";
  }

},1000);
