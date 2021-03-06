console.log("Conexion JavasCript Establecida");

var temporal
var obtener = localStorage.getItem("Sesion");
var probar = 0

var almacenar

botonlogout();
getLista();
getListCotizar();
inicio();

function direccionar() {
  location.href = "../index.html"
}

function rol(){
  let alamcen = localStorage.getItem("rol")
}

function inicio(){
  if (obtener == "") {
  } else if (obtener == null) {
  } else {
    temporal = obtener
    obtener = `<a href="../html/usuario.html">${obtener}</a>`;
    document.getElementById("sesion").innerHTML = obtener;
  }
  
  if (document.getElementById("bienvenida1") != null) {
    document.getElementById("bienvenida1").innerHTML = `Bienvenido ${temporal}`
  }
}

  ///////////////////////////////////////////////////////////////////////////////////////////

function validarFormulario() {


  let nombre1 = document.getElementById("nombre1").value;
  let nombre2 = document.getElementById("nombre2").value;
  let apellido1 = document.getElementById("apellido1").value;
  let apellido2 = document.getElementById("apellido2").value;
  let correo = document.getElementById("correo").value;
  let select = document.getElementById("selects").value;
  let ciudad = document.getElementById("ciudad").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let codigopostal = document.getElementById("codigopostal").value;
  let destino = document.getElementById("destino").value;
  //////////////////////////////////////////////////////////////////////////////////

  if (nombre1.length == 0) {
    alert("No has escrito una caga en nombre");
  } else if (nombre2.length == 0) {
    alert("No has escrito nada en el segundo nombre");
  } else if (apellido1.length == 0) {
    alert("No has escrito nada en el primer apellido");
  } else if (apellido2.length == 0) {
    alert("No has escrito nada en el segundo apellido");
  } else if (correo.length == 0) {
    alert("No has escrito nada en el correo");
  } else if (select == "Elegir") {
    alert("Favor escoja una opcion distinta de elegir");
  } else if (ciudad.length == 0) {
    alert("No has escrito nada en el campo ciudad");
  } else if (telefono.length == 0) {
    alert("No has escrito nada en el campo telefono");
  } else if (direccion.length == 0) {
    alert("No has escrito nada en el campo direccion");
  } else if (codigopostal.length == 0) {
    alert("No has escrito nada en el codigo postal");
  } else if (destino.length == 0) {
    alert("No has escrito nada en destino");
  } else {
    let bandera = false,
      bandera2 = false;
    for (let i = 0; i < correo.length; i++) {
      if (correo.charAt(i) == "@") {
        bandera = true;
      } else if (correo.charAt(i) != "" && bandera == true) {
        bandera2 = true;
      }
    }

    if (bandera == false) {
      alert("Falta el @ en el correo");
    } else if (bandera == true && bandera2 == false) {
      alert("Falta colocar texto despues del arroba");
    } else {
      console.log("Correo valido");


      let Tarea = {
        nombre1,
        nombre2,
        apellido1,
        apellido2,
        correo,
        select,
        ciudad,
        telefono,
        direccion,
        codigopostal,
        destino,
      };

      if (localStorage.getItem("Lista") === null) {
        let Lista = [];
        Lista.push(Tarea);
        localStorage.setItem("Lista", JSON.stringify(Lista));
      } else {
        let Lista = JSON.parse(localStorage.getItem("Lista"));
        Lista.push(Tarea);
        localStorage.setItem("Lista", JSON.stringify(Lista));
      }

      getLista();
      document.getElementById("formulario").reset();
      e.preventDefault();
    }
  }
}

function deleteTarea(nom) {
  console.log(nom);
  let Lista = JSON.parse(localStorage.getItem("Lista"));
  for (let i = 0; i < Lista.length; i++) {

    let nombre1 = Lista[i].nombre1;
    let nombre2 = Lista[i].nombre2;
    let apellido1 = Lista[i].apellido1;
    let apellido2 = Lista[i].apellido2;
    let nombrecompleto = `${nombre1} ${nombre2} ${apellido1} ${apellido2}`

    if (nombrecompleto == nom) {
      Lista.splice(i, 1);
    }
  }

  localStorage.setItem("Lista", JSON.stringify(Lista));
  getLista();
}

function editar(nom) {
  console.log(nom);
  let Lista = JSON.parse(localStorage.getItem("Lista"));
  for (let i = 0; i < Lista.length; i++) {

    let nombre1 = Lista[i].nombre1;
    let nombre2 = Lista[i].nombre2;
    let apellido1 = Lista[i].apellido1;
    let apellido2 = Lista[i].apellido2;
    let nombrecompleto = `${nombre1} ${nombre2} ${apellido1} ${apellido2}`

    if (nombrecompleto == nom && probar == 0) {

      let name = document.getElementById("nombre1").value;
      let name2 = document.getElementById("nombre2").value;
      let lastname = document.getElementById("apellido1").value;
      let lastname2 = document.getElementById("apellido2").value;
      let email = document.getElementById("correo").value;
      let selccionar = document.getElementById("selects").value;
      let city = document.getElementById("ciudad").value;
      let tel = document.getElementById("telefono").value;
      let dir = document.getElementById("direccion").value;
      let code = document.getElementById("codigopostal").value;
      let dest = document.getElementById("destino").value;

      Lista[i].nombre1 = name
      Lista[i].nombre2 = name2
      Lista[i].apellido1 = lastname
      Lista[i].apellido2 = lastname2
      Lista[i].correo = email
      Lista[i].select = selccionar
      Lista[i].ciudad = city
      Lista[i].telefono = tel
      Lista[i].direccion = dir
      Lista[i].codigopostal = code
      Lista[i].destino = dest
      probar = 1
      console.log(probar)
    }
    probar = 0


  }

  localStorage.setItem("Lista", JSON.stringify(Lista));
  getLista();
}

function getLista() {
  let Lista = JSON.parse(localStorage.getItem("Lista"));
  let tasksView = document.getElementById("tabla5");

  if (document.getElementById("tabla5") != null) {
    tasksView.innerHTML = ` <th>Nombre Completo</th>
                            <th>Correo</th>
                            <th>Pais de Nacimiento</th>
                            <th>Ciudad</th>
                            <th>Telefono</th>
                            <th>Direccion</th>
                            <th>Codigo Postal</th>
                            <th>Destino de mayor interes</th>
                            <th>Opcion</th>`;
    for (let i = 0; i < Lista.length; i++) {
      let nombre1 = Lista[i].nombre1;
      let nombre2 = Lista[i].nombre2;
      let apellido1 = Lista[i].apellido1;
      let apellido2 = Lista[i].apellido2;
      let correo = Lista[i].correo;
      let select = Lista[i].select;
      let ciudad = Lista[i].ciudad;
      let telefono = Lista[i].telefono;
      let direccion = Lista[i].direccion;
      let codigopostal = Lista[i].codigopostal;
      let destino = Lista[i].destino;

      let nombrecompleto = `${nombre1} ${nombre2} ${apellido1} ${apellido2}`

      tasksView.innerHTML += `<table class="tabla5">
        
        <tr>
            <th>${nombrecompleto}</th>
            <th>${correo}</th>
            <th>${select}</th>
            <th>${ciudad}</th>
            <th>${telefono}</th>
            <th>${direccion}</th>
            <th>${codigopostal}</th>
            <th>${destino}</th>
            <th><button onclick="deleteTarea('${nombrecompleto}')" >Eliminar</button><br><button onclick="editar('${nombrecompleto}')">Editar</button></th>

            </tr>
         
            </table>`;
    }


  }
}
//<a href="#" onclick="deleteTarea('${title}')" class="btn btn-danger ml-5">Delete</a>


/////////////////////////////////////////Fetch////////////////////////////////////////

function loginJSON() {
  let Username = document.getElementById("Username").value;
  let password = document.getElementById("password").value;
  let flag = null;
  let sesion
  if ((password.length == 0) & (Username.length == 0)) {
    alert("Ambos campos vacios");
  } else if (Username.length == 0) {
    alert("Campo usuario vacio");
  } else if (password.length == 0) {
    alert("Campo contraseña vacio");
  } else {
    fetch("../json/usuarios.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        data.forEach(function (validar) {
          if (validar.usuario == Username) {
            if (validar.contraseña == password) {
              sesion = `${validar.nombre} ${validar.apellido}`;
              flag = true;
              almacenar = `${validar.rol}`
              localStorage.setItem("rol",almacenar);
              localStorage.setItem("Sesion", sesion);
              location.href = "../html/usuario.html"
            } else {
              alert("contraseña incorrecta");
              flag = true;
            }
          }
        });
        if (flag == null) {
          alert("Usuario no encontrado");
        }
      })
      .catch(function (error) {
        alert(error);
      });
  }
}


function cerrarSesion() {
  document.getElementById("sesion").innerHTML = `<a href=""></a>`;
  localStorage.removeItem("Sesion");
  location.reload();
}

function cerrarSesionButton() {
  document.getElementById("sesion").innerHTML = `<a href=""></a>`;
  localStorage.removeItem("Sesion");
  location.href= "../index.html";
}


///////////////////////////////////////////////////////////////////////////////////////
/*

function ocultar() {
  
  var ocult = document.getElementById("ocult");
  ocult.style.display = "none";
}

function mostrar() {
  ocult = document.getElementById("ocult");
  ocult.style.display = "block"
}

*/
function ocultarymostrar() {
  let x = document.getElementById("Div");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

function botonlogout() {
  if (document.getElementById("logout") != null){
    let boton = document.getElementById("logout")
    if(obtener == null){
      boton.style.display = "none"
    }else{
      boton.style.display = "block"
    }
  }
}

function validarFormCotizar() {


  let dest = document.getElementById("dest").value;
  let dateIni = document.getElementById("dateIni").value;
  let dateFin = document.getElementById("dateFin").value;
  let viajeros = document.getElementById("viajeros").value;
  let vuelo = document.getElementById("vuelo").value;
  let transporte = document.getElementById("transporte").value;
  const PRECIODESTINO = 1500;
  const PRECIOVUELO = 1000;
  const PRECIOTRANS = 200;
  let valor_vuelo = viajeros * PRECIOVUELO;
  let valor_transporte = viajeros * PRECIOTRANS
  let total = PRECIODESTINO + valor_vuelo + valor_transporte;
  //////////////////////////////////////////////////////////////////////////////////

  if (dest == "Elegir-dest") {
    alert("Favor escoja una opcion distinta de elegir");
  } else if (dateIni.length == 0) {
    alert("No has escrito la fecha del viajes");
  } else if (dateFin.length == 0) {
    alert("No has escrito la fecha del retorno");
  } else if (viajeros.length == 0) {
    alert("No has escrito la cantidad de pasajeros");
  } else if (vuelo == "Elegir-vue") {
    alert("Favor escoja una opcion distinta de elegir");
  } else if (transporte == "Elegir-trans") {
    alert("Favor escoja una opcion distinta de elegir");
  } else {
    let TareaCoti = {
      dest,
      dateIni,
      dateFin,
      viajeros,
      vuelo,
      transporte,
      PRECIODESTINO,
      PRECIOVUELO,
      PRECIOTRANS,
      valor_vuelo,
      valor_transporte,
      total,
    };

    if (localStorage.getItem("ListaCoti") === null) {
      let ListaCoti = [];
      ListaCoti.push(TareaCoti);
      localStorage.setItem("ListaCoti", JSON.stringify(ListaCoti));
    } else {
      let ListaCoti = JSON.parse(localStorage.getItem("ListaCoti"));
      ListaCoti.push(TareaCoti);
      localStorage.setItem("ListaCoti", JSON.stringify(ListaCoti));
    }

    getListCotizar();
    document.getElementById("formulario-cotizar").reset();
    e.preventDefault();
  }
}

function getListCotizar() {
  let ListaCoti = JSON.parse(localStorage.getItem("ListaCoti"));
  let tasksView = document.getElementById("tabla6");

  if (document.getElementById("tabla6") != null) {
    tasksView.innerHTML = ` <th>Ciudad destino</th>
                            <th>Fecha inicio</th>
                            <th>Fecha fin</th>
                            <th>Viajeros</th>
                            <th>Vuelos</th>
                            <th>Transporte</th>
                            <th>Precio destino</th>
                            <th>Precio vuelo</th>
                            <th>Precio transporte</th>
                            <th>Valor vuelo</th>
                            <th>Valor transporte</th>
                            <th>Total</th>`;
    for (let i = 0; i < ListaCoti.length; i++) {
      let dest = ListaCoti[i].dest;
      let dateIni = ListaCoti[i].dateIni;
      let dateFin = ListaCoti[i].dateFin;
      let viajeros = ListaCoti[i].viajeros;
      let vuelo = ListaCoti[i].vuelo;
      let transporte = ListaCoti[i].transporte;
      let precioDestino = ListaCoti[i].PRECIODESTINO;
      let precioVuelo = ListaCoti[i].PRECIOVUELO;
      let precioTransp = ListaCoti[i].PRECIOTRANS;
      let valor_vuelo = ListaCoti[i].valor_vuelo;
      let valor_transporte = ListaCoti[i].valor_transporte;
      let total = ListaCoti[i].total;

      tasksView.innerHTML += `<table class="tabla6">
        
        <tr>
            <th>${dest}</th>
            <th>${dateIni}</th>
            <th>${dateFin}</th>
            <th>${viajeros}</th>
            <th>${vuelo}</th>
            <th>${transporte}</th>
            <th>${precioDestino}</th>
            <th>${precioVuelo}</th>
            <th>${precioTransp}</th>
            <th>${valor_vuelo}</th>
            <th>${valor_transporte}</th>
            <th>${total}</th>

            </tr>
         
            </table>`;
    }


  }
}