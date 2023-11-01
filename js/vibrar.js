let repetir;
function repetir_vibracion(){
	repetir = setInterval(function(){navigator.vibrate(1000);},1500);
}

function parar_vibracion(){
	clearInterval(repetir);
	navigator.vibrate(0);
}


if(window.navigator && window.navigator.vibrate){
	var repetir;
	document.querySelector("#vibrar").addEventListener("click", function(){navigator.vibrate(1000);},false);
	document.querySelector("#vibrar2").addEventListener("click", function(){navigator.vibrate([1000,750,1000,750]);},false);
	document.querySelector("#vibrar_rep").addEventListener("click",function(){repetir_vibracion();},false);
	document.querySelector("#vibrar_cont").addEventListener("click", function(){navigator.vibrate(30000);},false);
	document.querySelector("#vibrar_apagar").addEventListener("click", function(){parar_vibracion();},false);

}
else
	alert("Tu navegador no es compatible con la API de vibración");
