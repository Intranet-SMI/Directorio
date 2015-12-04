 window.onload=init;
 	var nombre=new Array();
 	var area=new Array();
 	var anexo=new Array();

	nombre[0]="Juan Alberto Franco";
	area[0]="GERENCIA GENERAL";
	anexo[0]="1391";
	nombre[1]="Gabriela Herrera Marin";
	area[1]="GERENCIA GENERAL";
	anexo[1]="1355";
	nombre[2]="Planta";	
	area[2]="RECEPCIÓN";
	anexo[2]="2000";
	nombre[3]="Sala Recepción";	
	area[3]="RECEPCIÓN";
	anexo[3]="2399";
	nombre[4]="Sven Brodersen";	
	area[4]="VENTAS";	
	anexo[4]="1237";
	nombre[5]="Bruno Monasi";
	area[5]="VENTAS";	
	anexo[5]="1215";
	nombre[6]="Victor Mendiola";	
	area[6]="VENTAS";	
	anexo[6]="1230";
	nombre[7]="Susann Ugaz";	
	area[7]="VENTAS";	
	anexo[7]="1354";
	nombre[8]="Pedro Garay";	
	area[8]="VENTAS";	
	anexo[8]="1351";
	nombre[9]="Johan Sitter";
	area[9]="VENTAS";	
	anexo[9]="1209";
	nombre[10]="Gisella Gonzales";	
	area[10]="VENTAS";	
	anexo[10]="1380";
	nombre[11]="Marisol Sánchez";	
	area[11]="VENTAS";	
	anexo[11]="1311";
	nombre[12]="Verónica Díaz";	
	area[12]="VENTAS";	
	anexo[12]="1370";
	nombre[13]="Ermes Komatsudani";	
	area[13]="VENTAS";	
	anexo[13]="1372";
	nombre[14]="Sebastián Lanfranco";	
	area[14]="VENTAS";	
	anexo[14]="1206";
	nombre[15]="Erick Balarin";	
	area[15]="VENTAS";	
	anexo[15]="1231";
	nombre[16]="Pamela Turner";	
	area[16]="VENTAS";	
	anexo[16]="1288";
	nombre[17]="Oscar Yepez";
	area[17]="VENTAS";
	anexo[17]="1294";
	nombre[18]="Hector Parraga";	
	area[18]="DISTRIBUCIÓN PET";
	anexo[18]="2236";
	nombre[19]="Coordinador de distribución";
	area[19]="DISTRIBUCIÓN PET";
	anexo[19]="2215";
	nombre[20]="Jacobo Escriba";	
	area[20]="RECICLADO";
	anexo[20]="1353";
	nombre[21]="Javier Bendezu";	
	area[21]="RECICLADO";
	anexo[21]="2352";
	nombre[22]="Ysabel Pastor";	
	area[22]="RECICLADO";
	anexo[22]="2353";
	nombre[23]="Rodolfo Martínez";	
	area[23]="RECICLADO";
	anexo[23]="2350";
	nombre[24]="Nick Callalli";	
	area[24]="RECICLADO";
	anexo[24]="2351";
	nombre[25]="Eduardo Inga";	
	area[25]="RECICLADO";
	anexo[25]="2354";
	nombre[26]="Juan Arenas";	
	area[26]="PREFORMAS";
	anexo[26]="2202";
	nombre[27]="Guido Rospigliosi";	
	area[27]="PREFORMAS";
	anexo[27]="2397";
	nombre[28]="Juan C. Gutiérrez";	
	area[28]="PREFORMAS";
	anexo[28]="2396";
	nombre[29]="Miguel Gil";	
	area[29]="PREFORMAS";
	anexo[29]="2283";
	nombre[30]="Carlos Sanchez";	
	area[30]="PREFORMAS";
	anexo[30]="2286";
	nombre[31]="Jose Villegas";	
	area[31]="PREFORMAS";
	anexo[31]="2398";
	nombre[32]="Planta Preformas";
	area[32]="PREFORMAS";
	anexo[32]="2284";
	nombre[33]="Taller Preformas";	
	area[33]="PREFORMAS";
	anexo[33]="2328";
	nombre[34]="Inyectora Husky";	
	area[34]="PREFORMAS";
	anexo[34]="2395";
	nombre[35]="Hector Olivares";	
	area[35]="PREFORMAS";
	anexo[35]="2299";
	nombre[36]="Laboratorio Preformas";	
	area[36]="PREFORMAS";
	anexo[36]="2329";
	nombre[37]="Javier Campos";	
	area[37]="SOPLADO";	
	anexo[37]="2363";
	nombre[38]="Orlando Vargas";	
	area[38]="SOPLADO";	
	anexo[38]="2364";
	nombre[39]="Jose Santa Maria";	
	area[39]="SOPLADO";	
	anexo[39]="2282";
	nombre[40]="Ricardo Pacora";	
	area[40]="SOPLADO";
	anexo[40]="2394";
	nombre[41]="Rafael Villanueva";
	area[41]="SOPLADO";	
	anexo[41]="1356";
	nombre[42]="Víctor Esquivel";	
	area[42]="SOPLADO";	
	anexo[42]="2393";
	nombre[43]="Poul Chanca";	
	area[43]="SOPLADO";	
	anexo[43]="2312";
	nombre[44]="Taller Soplado";	
	area[44]="SOPLADO";	
	anexo[44]="2251";
	nombre[45]="Supervisor Solpado";	
	area[45]="SOPLADO";
	anexo[45]="2395";
	nombre[46]="Miguel Vargas";	
	area[46]="SOPLADO";
	anexo[46]="2368";
	nombre[47]="Facturador Botellas";	
	area[47]="ALMACÉN RANSA";
	anexo[47]="2234";
	nombre[48]="Facturador Operaciones Internas";	
	area[48]="ALMACÉN RANSA";
	anexo[48]="2238";
	nombre[49]="Facturador Preformas";
	area[49]="ALMACÉN RANSA";
	anexo[49]="2237";
	nombre[50]="Jaime Pilco";	
	area[50]="LABORATORIO/ CONTROL CALIDAD";
	anexo[50]="2267";
	nombre[51]="Laboratorio Soplado";	
	area[51]="LABORATORIO/ CONTROL CALIDAD";
	anexo[51]="2235";
	nombre[52]="Portería # 1 MATERIALES";	
	area[52]="SERVICIOS GENERALES";	
	anexo[52]="2320";
	nombre[53]="Portería # 1 REYNEL";	
	area[53]="SERVICIOS GENERALES";	
	anexo[53]="2321";
	nombre[54]="Directorio Planta";	
	area[54]="DIRECTORIOS";	
	anexo[54]="2260";
	nombre[55]="Sala Tocancipa";	
	area[55]="DIRECTORIOS";	
	anexo[55]="2262";
	nombre[56]="Sala San Salvador";	
	area[56]="DIRECTORIOS";	
	anexo[56]="2261";
	nombre[57]="Sala Guayaquil";	
	area[57]="DIRECTORIOS";	
	anexo[57]="2263";
	nombre[58]="Sala Preformas";	
	area[58]="DIRECTORIOS";	
	anexo[58]="2264";
	nombre[59]="Sala Soplado";	
	area[59]="DIRECTORIOS";	
	anexo[59]="2265";
	nombre[60]="Sala Clear Pet";	
	area[60]="DIRECTORIOS";	
	anexo[60]="2268";
	nombre[61]="Juan Goicoechea";	
	area[61]="NEXUS";	
	anexo[61]="1201";
	nombre[62]="Jose Beya";	
	area[62]="NEXUS";	
	anexo[62]="2212";
	nombre[63]="Sebastián Gálvez";
	area[63]="NEXUS";
	anexo[63]="1359";
	nombre[64]="Giacomo Sissa";	
	area[64]="ADMINISTRACIÓN Y FINANZAS";	
	anexo[64]="1205";
	nombre[65]="Ariana Aroca";
	area[65]="ADMINISTRACIÓN Y FINANZAS";	
	anexo[65]="1208";
	nombre[66]="Johan Sitter";	
	area[66]="ADMINISTRACIÓN Y FINANZAS";	
	anexo[66]="1209";
	nombre[67]="Javier Ruíz";	
	area[67]="ADMINISTRACIÓN Y FINANZAS";	
	anexo[67]="1392";
	nombre[68]="Andrea Noriega";	
	area[68]="ADMINISTRACIÓN Y FINANZAS";	
	anexo[68]="1278";
	nombre[69]="Django Valle";
	area[69]="ADMINISTRACIÓN Y FINANZAS";	
	anexo[69]="1210";
	nombre[70]="Jeferson Olivos";	
	area[70]="ADMINISTRACIÓN Y FINANZAS";	
	anexo[70]="1300";
	nombre[71]="Fernando Arana";	
	area[71]="ADMINISTRACIÓN Y FINANZAS";	
	anexo[71]="1211";
	nombre[72]="Jessica Rivera";	
	area[72]="ADMINISTRACIÓN Y FINANZAS";	
	anexo[72]="2200";
	nombre[73]="Alex Falla";	
	area[73]="FINANZAS";
	anexo[73]="1369";
	nombre[74]="Cyndi Bardales";	
	area[74]="FINANZAS";
	anexo[74]="1367";
	nombre[75]="Hugo Montes";	
	area[75]="FINANZAS";
	anexo[75]="1275";
	nombre[76]="Ever Orue";	
	area[76]="FINANZAS";
	anexo[76]="1212";
	nombre[77]="Beatriz Mesias";	
	area[77]="CREDITOS Y COBRANZAS";
	anexo[77]="1243";
	nombre[78]="Rosa Amaya";	
	area[78]="CREDITOS Y COBRANZAS";
	anexo[78]="1246";
	nombre[79]="Jimmy Hernandez";	
	area[79]="CREDITOS Y COBRANZAS";
	anexo[79]="1228";
	nombre[80]="Raúl Gaona";	
	area[80]="CREDITOS Y COBRANZAS";
	anexo[80]="1260";
	nombre[81]="Carlos Requena";	
	area[81]="CREDITOS Y COBRANZAS";
	anexo[81]="1261";
	nombre[82]="Luis Mujica";	
	area[82]="CONTABILIDAD";
	anexo[82]="1263";
	nombre[83]="Carlos Barrena";	
	area[83]="CONTABILIDAD";
	anexo[83]="1272";
	nombre[84]="Luis Calipuy";
	area[84]="CONTABILIDAD";
	anexo[84]="1273";
	nombre[85]="Joel Vallejo";
	area[85]="CONTABILIDAD";
	anexo[85]="1268";
	nombre[86]="Patricia Martinez";	
	area[86]="CONTABILIDAD";
	anexo[86]="1269";
	nombre[87]="Carlos Guevara";	
	area[87]="CONTABILIDAD";
	anexo[87]="1284";
	nombre[88]="Daniel Vera";	
	area[88]="CONTABILIDAD";
	anexo[88]="1232";
	nombre[89]="Eduardo Tejada";	
	area[89]="CONTABILIDAD";
	anexo[89]="1267";
	nombre[90]="Kathia Nicho";	
	area[90]="CONTABILIDAD";
	anexo[90]="2315";
	nombre[91]="Gino Herrera";
	area[91]="TECNOLOGÍA I.";
	anexo[91]="1283";
	nombre[92]="Jhonattan Loredo";
	area[92]="TECNOLOGÍA I.";
	anexo[92]="2247";
	nombre[93]="Jhonny Morales";	
	area[93]="TECNOLOGÍA I.";
	anexo[93]="1217";
	nombre[94]="Hugo Castillo";	
	area[94]="TECNOLOGÍA I.";
	anexo[94]="1281";
	nombre[95]="Omar Roldán";
	area[95]="TECNOLOGÍA I.";
	anexo[95]="1280";
	nombre[96]="Charles Aguirre";	
	area[96]="TECNOLOGÍA I.";
	anexo[96]="1247";
	nombre[97]="Cristian Falcon";	
	area[97]="TECNOLOGÍA I.";
	anexo[97]="1216";
	nombre[98]="Jorge Caceres";	
	area[98]="TECNOLOGÍA I.";
	anexo[98]="2246";
	nombre[99]="Tatiana Guillen";	
	area[99]="TECNOLOGÍA I.";
	anexo[99]="1282";
	nombre[100]="Richard Santillan";	
	area[100]="TECNOLOGÍA I.";
	anexo[100]="1286";
	nombre[101]="Giancarlo Orbegoso";	
	area[101]="TECNOLOGÍA I.";
	anexo[101]="2224";
	nombre[102]="Enrrique Lopez";	
	area[102]="TECNOLOGÍA I.";
	anexo[102]="2223";
	nombre[103]="Christian Segura";
	area[103]="TECNOLOGÍA I.";
	anexo[103]="1258";	
	nombre[104]="Liz Marin";	
	area[104]="GESTION Y PROCESOS";	
	anexo[104]="2280";
	nombre[105]="Julia Flores";	
	area[105]="GESTION Y PROCESOS";	
	anexo[105]="2252";
	nombre[106]="Jorge Chávez";
	area[106]="LOGÍSTICA";
	anexo[106]="2366";
	nombre[107]="Vannesa Chauca";	
	area[107]="LOGÍSTICA";
	anexo[107]="2323";
	nombre[108]="Zoila Suarez";	
	area[108]="LOGÍSTICA";
	anexo[108]="2297";
	nombre[109]="Issa Chang";
	area[109]="LOGÍSTICA";
	anexo[109]="2294";
	nombre[110]="Linda Hoyos";	
	area[110]="LOGÍSTICA";
	anexo[110]="2293";
	nombre[111]="Marilin Cespedes";
	area[111]="LOGÍSTICA";
	anexo[111]="2214";
	nombre[112]="Jessica Hidalgo";	
	area[112]="LOGÍSTICA";
	anexo[112]="2216";
	nombre[113]="Carlos Landavere";	
	area[113]="LOGÍSTICA";
	anexo[113]="2266";
	nombre[114]="Lorenzo Enciso";	
	area[114]="LOGÍSTICA";
	anexo[114]="2296";
	nombre[115]="Carlos Tavara";	
	area[115]="LOGÍSTICA";
	anexo[115]="2304";
	nombre[116]="Miladi Romero";	
	area[116]="LOGÍSTICA";
	anexo[116]="2250";	
	nombre[117]="Víctor Vásquez Chavez";	
	area[117]="ADM. DE FÁBRICA";
	anexo[117]="2211";
	nombre[118]="Marcial Fabian";	
	area[118]="ADM. DE FÁBRICA";
	anexo[118]="2210";
	nombre[119]="Miguel Roca";	
	area[119]="ADM. DE FÁBRICA";
	anexo[119]="2209";
	nombre[120]="Supervisores de PET";	
	area[120]="ADM. DE FÁBRICA";
	anexo[120]="2332";
	nombre[121]="Maria Esther Mendoza";
	area[121]="RRHH Y CALIDAD";
	anexo[121]="2360";
	nombre[122]="Juan Carlos Palomino";	
	area[122]="RRHH Y CALIDAD";
	anexo[122]="2309";
	nombre[123]="Junior Rojas";
	area[123]="RRHH Y CALIDAD";
	anexo[123]="2307";
	nombre[124]="Margarita Jáuregui";	
	area[124]="RRHH Y CALIDAD";
	anexo[124]="2317";
	nombre[125]="Martha Herrera";	
	area[125]="RRHH Y CALIDAD";
	anexo[125]="2289";
	nombre[126]="Miguel Salcedo";	
	area[126]="RRHH Y CALIDAD";
	anexo[126]="2248";
	nombre[127]="Enfermería";	
	area[127]="RRHH Y CALIDAD";
	anexo[127]="2373";
	nombre[128]="Rosió Marroquin";	
	area[128]="RRHH Y CALIDAD";
	anexo[128]="2249";
	nombre[129]="Julio Pozo";	
	area[129]="RRHH Y CALIDAD";
	anexo[129]="2292";
	nombre[130]="Nelly Sanchez";	
	area[130]="RRHH Y CALIDAD";
	anexo[130]="2291";
	nombre[131]="Fiorella Colareta";	
	area[131]="RRHH Y CALIDAD";
	anexo[131]="2392";
	nombre[132]="Alicorp";	
	area[132]="SUCURSALES";
	anexo[132]="651 1468";
	nombre[133]="Lindley Callao";	
	area[133]="SUCURSALES";
	anexo[133]="651 1507";
	nombre[134]="Don Jorge";	
	area[134]="SUCURSALES";
	anexo[134]="anexo 8102 336 6854";
	nombre[135]="Planta Motupe";	
	area[135]="SMI MOTUPE";	
	anexo[135]="5418";
	nombre[136]="Victoriano Rivera"; 
	area[136]="SMI MOTUPE";	
	anexo[136]="9637 8926";
	nombre[137]="Domicilio Victoriano Rivera";	
	area[137]="SMI MOTUPE";	
	anexo[137]="074 426663";
	nombre[138]="Domicilio del personal";	
	area[138]="SMI MOTUPE";	
	anexo[138]="074 426666";
	nombre[139]="Armando Aguilar";	
	area[139]="EL SALVADOR";	
	anexo[139]="4502";
	nombre[140]="Roberto Canizalez";	
	area[140]="EL SALVADOR";
	anexo[140]="4501";
	nombre[141]="Mario García";	
	area[141]="EL SALVADOR";
	anexo[141]="4503";
	nombre[142]="Alex Coto";	
	area[142]="EL SALVADOR";	
	anexo[142]="4504";
	nombre[143]="Rigoberto Mazariego";	
	area[143]="EL SALVADOR";	
	anexo[143]="4505";
	nombre[144]="Heraclio Ichpas";	
	area[144]="EL SALVADOR";	
	anexo[144]="4506";
	nombre[145]="Laboratorio SV.Lote 4";	
	area[145]="EL SALVADOR";	
	anexo[145]="4507";
	nombre[146]="Laboratorio SV.Lote 5";	
	area[146]="EL SALVADOR	";
	anexo[146]="4508";
	nombre[147]="Almacen SV";
	area[147]="EL SALVADOR";
	anexo[147]="4509";
	nombre[148]="Anexo Bavaria";	
	area[148]="COLOMBIA";
	anexo[148]="11650";
	nombre[149]="Edgar Ortiz ";
	area[149]="COLOMBIA";
	anexo[149]="(57)314 298 9930";
	nombre[150]="Edgar Ortiz";	
	area[150]="COLOMBIA";
	anexo[150]="5001";
	nombre[151]="German Calderon";	
	area[151]="COLOMBIA";
	anexo[151]="5002";
	nombre[152]="Angelica Rodriguez";	
	area[152]="COLOMBIA";
	anexo[152]="5003";
	nombre[153]="Milena Ortegon";	
	area[153]="COLOMBIA";
	anexo[153]="5004";
	nombre[154]="Andres Barreto";	
	area[154]="COLOMBIA";
	anexo[154]="5005";
	nombre[155]="Linda Quiñonez";	
	area[155]="COLOMBIA";
	anexo[155]="5006";
	nombre[156]="Gina Rey";	
	area[156]="COLOMBIA";
	anexo[156]="5007";
	nombre[157]="Ronald Pardo";	
	area[157]="COLOMBIA";
	anexo[157]="5008";
	nombre[158]="Jhohana Espinoza";	
	area[158]="COLOMBIA";
	anexo[158]="5009";
	nombre[159]="Judy Cuervo";	
	area[159]="COLOMBIA";
	anexo[159]="5010";
	nombre[160]="Nestor Rojas";
	area[160]="COLOMBIA";
	anexo[160]="5011";
	nombre[161]="Alejandro Suarez";
	area[161]="COLOMBIA";
	anexo[161]="5012";
	nombre[162]="Felipe Parra";
	area[162]="COLOMBIA";
	anexo[162]="5013";
	nombre[163]="Jorge Milanez";	
	area[163]="COLOMBIA";
	anexo[163]="5016";
	nombre[164]="Carol Caldas";	
	area[164]="COLOMBIA";
	anexo[164]="5019";
	nombre[165]="Recepcion Colombia";	
	area[165]="COLOMBIA";
	anexo[165]="5020";
	nombre[166]="Juan Carlos Gonzáles"; 
	area[166]="ECUADOR";
	anexo[166]="(59)3994 690 598";
	nombre[167]="Milton Cedeño (Manta)"; 
	area[167]="ECUADOR";
	anexo[167]="(59)3994 690 606";
	nombre[168]="Winston Castro (Lab)";	
	area[168]="ECUADOR";
	anexo[168]="2544";
	nombre[169]="Pedro Quezada";	
	area[169]="ECUADOR";
	anexo[169]="4407";
	nombre[170]="Denny Garcia";	
	area[170]="ECUADOR";
	anexo[170]="4404";
	nombre[171]="Carlos Quinteros";	
	area[171]="ECUADOR";
	anexo[171]="4408";
	nombre[172]="Alex Cobos";	
	area[172]="ECUADOR";
	anexo[172]="4406";
	nombre[173]="Kleber Orellana";	
	area[173]="ECUADOR";
	anexo[173]="4411";
	nombre[174]="Leticia Figueroa";
	area[174]="ECUADOR";
	anexo[174]="4409";
	nombre[175]="Juan Carlos Gonzales";	
	area[175]="ECUADOR";
	anexo[175]="4401";
	nombre[176]="Directorio Ecuador";	
	area[176]="ECUADOR";
	anexo[176]="4410";
	nombre[177]="Juan Bazán";	
	area[177]="MANTENIMIENTO";
	anexo[177]="2333";
	nombre[178]="Jesus Ramos";	
	area[178]="MANTENIMIENTO";	
	anexo[178]="2319";	
	nombre[179]="COMEDOR";
	area[179]="COMEDOR";	
	anexo[179]="2372";

 	var nombreFiltro=new Array();
 	var areaFiltro=new Array();
 	var anexoFiltro=new Array();
 	var htmlFiltro;

	 function init(){
	 	mostrarAgenda();
	 }	
	 function mostrarAgenda(){
	 	htmlFiltro="";
	 	copiarArray(nombre,nombreFiltro);
	 	copiarArray(area,areaFiltro);
	 	copiarArray(anexo,anexoFiltro);

	 	for(i=0 ; i<nombreFiltro.length ;i++){
	 		htmlFiltro +="<tr><td id='nombre' class='cabeceraNombre'>"+nombreFiltro[i]+"</td><td id='area' class='cabeceraArea'>"+areaFiltro[i]+"</td><td id='anexo' class='cabeceraAnexo'>"+anexoFiltro[i]+"</td></tr>";
	 	}
	 	document.getElementById("contenido").innerHTML=htmlFiltro;
	 }

	 function filtrar(){

	 	htmlFiltro="";
	 	var temporalNombreFiltro=new Array();
	 	var temporalAreaFiltro=new Array();
	 	var temporalAnexoFiltro=new Array();
	 	copiarArray(nombreFiltro,temporalNombreFiltro);
	 	copiarArray(areaFiltro,temporalAreaFiltro);
	 	copiarArray(anexoFiltro,temporalAnexoFiltro);

	 	nombreFiltro.length=0;
	 	areaFiltro.length=0;
	 	anexoFiltro.length=0;

	 	var j=0;
	 	var entrada=document.getElementById("botonBuscar").value;
	 	for(i=0 ; i<nombre.length ;i++){
	 		if (nombre[i].toLowerCase().indexOf(entrada.toLowerCase()) != -1 || area[i].toLowerCase().indexOf(entrada.toLowerCase()) != -1 || anexo[i].toLowerCase().indexOf(entrada.toLowerCase()) != -1) {
	 			nombreFiltro[j]=nombre[i];
			 	areaFiltro[j]=area[i];
			 	anexoFiltro[j]=anexo[i];
			 	htmlFiltro +="<tr><td id='nombre' class='cabeceraNombre'>"+nombreFiltro[j]+"</td><td id='area' class='cabeceraArea'>"+areaFiltro[j]+"</td><td id='anexo' class='cabeceraAnexo'>"+anexoFiltro[j]+"</td></tr>";
		 		j++;
	 		}
	 	}	

	 	if (htmlFiltro=="") {
	 		document.getElementById("contenido").innerHTML= "<tr><td colspan='3'>No se encontraron resultados</td></tr>";
	 	}else {
	 		document.getElementById("contenido").innerHTML=htmlFiltro;
	 	}

	 }

	function ordenar(nombreClase){

	 	htmlFiltro="";
	 	var posicionFinal=7;
	 	var columnaFiltrada =nombreClase.substring(8,nombreClase.length).toLowerCase();	 	

	 	if(columnaFiltrada="nombre"){
	 		var temporalnombre=new Array();
	 		copiarArray(nombreFiltro,temporalnombre);

	 		var indiceOrden=new Array();
	 		nombreFiltro=nombreFiltro.sort();
	 		var indiceDeorden=0;
	 		for(i=0; i<nombreFiltro.length;i++){
	 			
	 			for (var j = 0; j <temporalnombre.length; j++) {
	 				if(nombreFiltro[i]==temporalnombre[j]){
	 					indiceOrden[indiceDeorden]=j;
	 					indiceDeorden++;
	 					j=temporalnombre.length;
	 				}
	 			}
	 		}
	 		var temporalarea=new Array();
	 		copiarArray(areaFiltro,temporalarea);
	 		//temporalarea=areaFiltro;
	 		var temporalanexo=new Array();
	 		copiarArray(anexoFiltro,temporalanexo);
	 		//temporalanexo=anexoFiltro;	
	 		for (i = 0 ; i<indiceOrden.length;i++) {
	 				areaFiltro[i]=temporalarea[indiceOrden[i]];
	 				anexoFiltro[i]=temporalanexo[indiceOrden[i]];
	 		}

	 		for(i=0 ; i<nombreFiltro.length ;i++){
			 	htmlFiltro +="<tr><td id='nombre' class='cabeceraNombre'>"+nombreFiltro[i]+"</td><td id='area' class='cabeceraArea'>"+areaFiltro[i]+"</td><td id='anexo' class='cabeceraAnexo'>"+anexoFiltro[i]+"</td></tr>";
	 		}
	 		if (htmlFiltro=="") {
	 		document.getElementById("contenido").innerHTML= "<tr><td colspan='3'>No se encontraron resultados</td></tr>";
	 		}else {
	 		document.getElementById("contenido").innerHTML=htmlFiltro;
	 		};
	 	}

	 	if(columnaFiltrada="area"){
	 		/*var temporalarea=new Array();
	 		copiarArray(areaFiltro,temporalarea);

	 		var indiceOrden=new Array();
	 		areaFiltro=areaFiltro.sort();
	 		var indiceDeorden=0;
	 		for(i=0; i<areaFiltro.length;i++){
	 			
	 			for (var j = 0; j <temporalarea.length; j++) {
	 				if(areaFiltro[i]==temporalarea[j]){
	 					indiceOrden[indiceDeorden]=j;
	 					indiceDeorden++;
	 					j=temporalarea.length;
	 				}
	 			}
	 		}
	 		var temporalnombre=new Array();
	 		copiarArray(nombreFiltro,temporalnombre);

	 		var temporalanexo=new Array();
	 		copiarArray(anexoFiltro,temporalanexo);
	
	 		for (i = 0 ; i<indiceOrden.length;i++) {
	 				nombreFiltro[i]=temporalnombre[indiceOrden[i]];
	 				anexoFiltro[i]=temporalanexo[indiceOrden[i]];
	 		}

	 		for(i=0 ; i<areaFiltro.length ;i++){
			 	htmlFiltro +="<tr><td id='nombre' class='cabeceraNombre'>"+nombreFiltro[i]+"</td><td id='area' class='cabeceraArea'>"+areaFiltro[i]+"</td><td id='anexo' class='cabeceraAnexo'>"+anexoFiltro[i]+"</td></tr>";
	 		}
	 		if (htmlFiltro=="") {
	 		document.getElementById("contenido").innerHTML= "<tr><td colspan='3'>No se encontraron resultados</td></tr>";
	 		}else {
	 		document.getElementById("contenido").innerHTML=htmlFiltro;
	 		};*/

	 	}

	 	if(columnaFiltrada="anexo"){

	 	}

	 }

	 function copiarArray(vectorClonado , VectorCopia){
	 	for (var i =0 ; i < vectorClonado.length; i++) {
	 		VectorCopia[i] = vectorClonado[i];
	 	}

	 }

