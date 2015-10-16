 window.onload=init;
 	var nombre=new Array();
 	var area=new Array();
 	var anexo=new Array();

 	nombre[0]="Jorge Caceres";
	area[0]="TI";
	anexo[0]="2246";
	nombre[1]="Lucas Escarioto";
	area[1]="Ventas";
	anexo[1]="2652";
	nombre[2]="Roberto Gomez";
	area[2]="Logistica";
	anexo[2]="5002";
	nombre[3]="Raul Chato Padilla";
	area[3]="RRHH";
	anexo[3]="4565";
	nombre[4]="Edgar Vivar";
	area[4]="Botellas Lima";
	anexo[4]="3021";
	nombre[5]="Florinda Mesa";
	area[5]="Calidad";
	anexo[5]="4102";

 	var nombreFiltro=new Array();
 	var areaFiltro=new Array();
 	var anexoFiltro=new Array();


	 function init(){
	 	mostrarAgenda();
	 }	

	 function mostrarAgenda(){
	 	var htmlnombre="";
	 	var htmlarea="";
	 	var htmlanexo="";
	 	for(i=0 ; i<nombre.length ;i++){
	 		htmlnombre+="<a href='#'>"+nombre[i]+"</a></br>";
	 		htmlarea+="<a href='#'>"+area[i]+"</a></br>";
	 		htmlanexo+="<a href='#'>"+anexo[i]+"</a></br>";
	 	}
	 	document.getElementById("nombre").innerHTML=htmlnombre;
	 	document.getElementById("area").innerHTML=htmlarea;
	 	document.getElementById("anexo").innerHTML=htmlanexo;
	 }

	 function filtrar(){
	 	var htmlnombreFiltro="";
	 	var htmlareaFiltro="";
	 	var htmlanexoFiltro="";

	 	var entrada=document.getElementById("botonBuscar").value;
	 	for(i=0 ; i<nombre.length ;i++){
	 		if (nombre[i].toLowerCase().indexOf(entrada.toLowerCase()) != -1 || area[i].toLowerCase().indexOf(entrada.toLowerCase()) != -1 || anexo[i].toLowerCase().indexOf(entrada.toLowerCase()) != -1) {

		 		htmlnombreFiltro+="<a href='#'>"+nombre[i]+"</a></br>";
		 		htmlareaFiltro+="<a href='#'>"+area[i]+"</a></br>";
		 		htmlanexoFiltro+="<a href='#'>"+anexo[i]+"</a></br>";
	 		}
	 	}	

	 	document.getElementById("nombre").innerHTML=htmlnombreFiltro;
	 	document.getElementById("area").innerHTML=htmlareaFiltro;
	 	document.getElementById("anexo").innerHTML=htmlanexoFiltro;

	 }