// JavaScript Document
$(document).ready(function(e) {	

document.addEventListener("deviceready",function(){
	
	audio = window.plugins.LowLatencyAudio;	
audio.preloadFX('B1', 'audio/C.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg ); });	
audio.preloadFX('B2', 'audio/D.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg ); });	
audio.preloadFX('B3', 'audio/E.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg ); });	
audio.preloadFX('B4', 'audio/F.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg ); });	

	
$('#btnjugar').on('tap', function (){
	$( "body" ).pagecontainer( "change", "#jugar", { transition: "slide" });
//alert(	$('#jugar').height());
//alert(	$('#piejuego').height());
/*$('#uno').height((($('#jugar').height()-$('#piejuego').height())-5)/2);
$('#dos').height((($('#jugar').height()-$('#piejuego').height())-5)/2);
$('#tres').height((($('#jugar').height()-$('#piejuego').height())-5)/2);
$('#cuatro').height((($('#jugar').height()-$('#piejuego').height())-5)/2);*/
var screen = $.mobile.getScreenHeight();
alert (screen);
var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight()  - 1 : $(".ui-header").outerHeight();
alert (header);
var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight();

/* content div has padding of 1em = 16px (32px top+bottom). This step
   can be skipped by subtracting 32px from content var directly. */
var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();
var content = screen - header - footer ;
alert (content);
$('.cuadro').height(content/2);
//$(".ui-content").height(content);

});


function quien (q) 
{
	audio.play(q);
	return q.substring(1);
}

$('.cuadro').on('vmousedown',function(){
	
	$(this).addClass('pulsado');
	
$('#screen').append(quien($(this).attr('id')));
	
});

$('.cuadro').on('vmouseup',function(){
	$(this).removeClass('pulsado');
});






	}); 
});

