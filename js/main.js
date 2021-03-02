console.log("Conexion JavasCript Establecida");

let indice = 0;
var sesion;
obtener = localStorage.getItem("Sesion");

var array = [];

if (obtener == "") {
} else if (obtener == null) {
} else {
  document.getElementById("sesion").innerHTML = obtener;
}

function inicioSesion() {
  let Username = document.getElementById("Username").value;
  let password = document.getElementById("password").value;
  const form = document.getElementById("formulario");

  if (Username == "admin" && password == "123") {
    alert("Inicio de sesion exitoso");
    form.reset();
  } else {
    alert("Datos invalidos");
  }
}

function cerrarSesion() {
  document.getElementById("sesion").innerHTML = "";
  localStorage.removeItem("Sesion");
}

function validarFormulario() {
  ///////////////////////////////////////////////////////////////////////////////

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

function getLista() {
  let Lista = JSON.parse(localStorage.getItem("Lista"));
  let tasksView = document.getElementById("tabla5");
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
            <th><button onclick="deleteTarea('${nombrecompleto}')" >Eliminar</button><br><button>Editar</button></th>

            </tr>
         
            </table>`;
  }
}
//<a href="#" onclick="deleteTarea('${title}')" class="btn btn-danger ml-5">Delete</a>
getLista();

/////////////////////////////////////////Fetch////////////////////////////////////////

function loginJSON() {
  let Username = document.getElementById("Username").value;
  let password = document.getElementById("password").value;
  let flag = null;

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
              alert(`${validar.nombre} ${validar.apellido} ha Iniciado Sesion`);
              sesion = `${validar.nombre} ${validar.apellido}`;
              flag = true;
              localStorage.setItem("Sesion", sesion);
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
