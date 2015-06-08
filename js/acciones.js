// JavaScript Document
$(document).ready(function(e) {	

document.addEventListener("deviceready",function() {
		var db = window.sqlitePlugin.openDatabase({name: "ColoresBD.db", createFromLocation: 1});
cargarnombrejugador();
   
          function cargarnombrejugador()
 {
		  db.transaction (function (ejecutar){
   var sql = "SELECT NombreJugador FROM jugador";
   ejecutar.executeSql (sql, undefined,
   function (ejecutar, resultado){	
	var datosJugador = resultado.rows.item (0);
  jugador_actual =(datosJugador.NombreJugador);
   $("#nombre").text(jugador_actual);

   });
		  });
 }







var screen = $.mobile.getScreenHeight();
var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight()  - 1 : $(".ui-header").outerHeight();
var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight();
var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();
var content = screen - header - footer ;
$('.cuadro').height(content/2);


$('.cuadro').on('mousedown',function(){
$(this).stop().animate({opacity: '0.1'}, {		//animate the element to appear to flash
				duration: 80,
				complete: function(){
				$(this).stop().animate({opacity: '1'}, 200);
				}
			});												//end animation

		
		
});
});
});

