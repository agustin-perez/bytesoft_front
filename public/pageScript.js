var menuActual = null;
/**
 * Función encargada de mostrar el menú desplegable al hacer click en el botón correspondiente
 * @param {menuId} menuId ID del div conteniendo las opciones del menú desplegable
 */
function mostrarSub(menuId) 
{
  if (menuActual != null)
  {
    document.getElementById(menuActual).classList.remove('show');
  }
  menuActual=menuId;
  document.getElementById(menuId).classList.toggle("show");
}

function responsiveButton() 
{
  var menu = document.getElementById("items");
  if (menu.className === "barraMenu") 
  {
    menu.className += " responsive";
  } 
  else 
  {
    menu.className = "barraMenu";
  }
} 

function cerrarResponsive()
{
  var menu = document.getElementById("responsiveStandard");
  if(menu.className != "barraMenu")
  {
    menu.className="barraMenu";
  }
}

function cerrarMenus()
{
  var busMenu = document.getElementsByClassName('contenedorBoton-content');
    for (var i = 0; i < busMenu.length; i++)
    {
      var menuAbierto = busMenu[i];
      if (menuAbierto.classList.contains('show')) 
      {
        menuAbierto.classList.remove('show');
        cerrarResponsive();
      }
    }
}