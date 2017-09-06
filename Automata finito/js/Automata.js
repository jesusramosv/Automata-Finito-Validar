 

class analizador{

		constructor(lex){

			this.error=-1;
			this.aceptar=0;
			this.lex=lex;
			this.contador=0;
			this.token=""
			this.estado="";;

}
EstadoCero(){

	this.estado= "0"

	switch(this.lex[this.contador++]){
		case '+': return this.EstadoUno();
		case '-': return this.EstadoDos();
		case '=': return this.EstadoTres();
		case '0': return this.error;
		case '1': return this.EstadoCuatro();
		case '2': return this.EstadoCuatro();
		case '3': return this.EstadoCuatro();	
		case '4': return this.EstadoCuatro();
		case '5': return this.EstadoCuatro();
		case '6': return this.EstadoCuatro();
		case '7': return this.EstadoCuatro();
		case '8': return this.EstadoCuatro();
		case '9': return this.EstadoCuatro();
		case 'a': return this.EstadoSeis();
		case 'b': return this.EstadoSeis();
		case 'e': return this.EstadoSeis();
		case 'f': return this.EstadoSeis();
		case 'g': return this.EstadoSeis();
		case 'h': return this.EstadoSeis();
		case 'j': return this.EstadoSeis();
		case 'k': return this.EstadoSeis();
		case 'l': return this.EstadoSeis();
		case 'm': return this.EstadoSeis();
		case 'o': return this.EstadoSeis();
		case 'ñ': return this.EstadoSeis();
		case 'q': return this.EstadoSeis();
		case 's': return this.EstadoSeis();
		case 'u': return this.EstadoSeis();
		case 'v': return this.EstadoSeis();
		case 'w': return this.EstadoSeis();
		case 'x': return this.EstadoSeis();
		case 'y': return this.EstadoSeis();
		case 'z': return this.EstadoSeis();
		case 'p': return this.EstadoOcho();
		case 'r': return this.EstadoNueve();
		case 'i': return this.EstadoDiez();
		case 'n': return this.EstadoOnce();
		case 't': return this.EstadoDoce();
		default: return this.error;
	}
}

EstadoUno(){

		this.estado= "1"
		if(this.lex.length == this.contador){
			this.token='Suma';
			return this.aceptar;
			
		}
			else{
				return this.error;
			}

	}


EstadoDos(){
		this.estado= "2"
	if(this.lex.length == this.contador){
		this.token='Resta';
			return this.aceptar;
		}
		else{
			return this.error;
		}
}
EstadoTres(){
		this.estado= "3"
	if(this.lex.length == this.contador){
		this.token='Asignar';
			return this.aceptar;
		}
		else{
			return this.error;
		}
}
EstadoCuatro(){
	this.estado= "4"
	switch(this.lex[this.contador++]){
		case '+': return this.EstadoCinco();
		case '-': return this.EstadoCinco();
		case '=': return this.EstadoCinco();
		case '0': return this.EstadoCuatro();
		case '1': return this.EstadoCuatro();
		case '2': return this.EstadoCuatro();
		case '3': return this.EstadoCuatro();	
		case '4': return this.EstadoCuatro();
		case '5': return this.EstadoCuatro();
		case '6': return this.EstadoCuatro();
		case '7': return this.EstadoCuatro();
		case '8': return this.EstadoCuatro();
		case '9': return this.EstadoCuatro();
		case 'a': return this.EstadoCinco();
		case 'b': return this.EstadoCinco();
		case 'e': return this.EstadoCinco();
		case 'f': return this.EstadoCinco();
		case 'g': return this.EstadoCinco();
		case 'h': return this.EstadoCinco();
		case 'j': return this.EstadoCinco();
		case 'k': return this.EstadoCinco();
		case 'l': return this.EstadoCinco();
		case 'm': return this.EstadoCinco();
		case 'o': return this.EstadoCinco();
		case 'ñ': return this.EstadoCinco();
		case 'q': return this.EstadoCinco();
		case 's': return this.EstadoCinco();
		case 'u': return this.EstadoCinco();
		case 'v': return this.EstadoCinco();
		case 'w': return this.EstadoCinco();
		case 'x': return this.EstadoCinco();
		case 'y': return this.EstadoCinco();
		case 'z': return this.EstadoCinco();
		case 'p': return this.EstadoCinco();
		case 'r': return this.EstadoCinco();
		case 'i': return this.EstadoCinco();
		case 'n': return this.EstadoCinco();
		case 't': return this.EstadoCinco();
		default: return this.error;
	}
}
EstadoCinco(){
	this.estado= "5"
	if(this.lex.length == this.contador){
		this.token='Entero';
			return this.aceptar;
		}
			else{
				return this.error;
			}
	}

EstadoSeis(){
				this.estado="6"
	switch(this.lex[this.contador++]){
		case '+': return this.EstadoSiete();
		case '-': return this.EstadoSiete();
		case '=': return this.EstadoSiete();
		case '0': return this.EstadoSiete();
		case '1': return this.EstadoSiete();
		case '2': return this.EstadoSiete();
		case '3': return this.EstadoSiete();	
		case '4': return this.EstadoSiete();
		case '5': return this.EstadoSiete();
		case '6': return this.EstadoSiete();
		case '7': return this.EstadoSiete();
		case '8': return this.EstadoSiete();
		case '9': return this.EstadoSiete();
	    case 'a': return this.EstadoSeis();
		case 'b': return this.EstadoSeis();
		case 'e': return this.EstadoSeis();
		case 'f': return this.EstadoSeis();
		case 'g': return this.EstadoSeis();
		case 'h': return this.EstadoSeis();
		case 'j': return this.EstadoSeis();
		case 'k': return this.EstadoSeis();
		case 'l': return this.EstadoSeis();
		case 'm': return this.EstadoSeis();
		case 'o': return this.EstadoSeis();
		case 'ñ': return this.EstadoSeis();
		case 'q': return this.EstadoSeis();
		case 's': return this.EstadoSeis();
		case 'u': return this.EstadoSeis();
		case 'v': return this.EstadoSeis();
		case 'w': return this.EstadoSeis();
		case 'x': return this.EstadoSeis();
		case 'y': return this.EstadoSeis();
		case 'z': return this.EstadoSeis();
		case 'p': return this.EstadoSeis();
		case 'r': return this.EstadoSeis();
		case 'i': return this.EstadoSeis();
		case 'n': return this.EstadoSeis();
		case 't': return this.EstadoSeis();
		default: return this.error;
	}	
}

EstadoSiete(){
	this.estado="7"
	if(this.lex.length == this.contador){
		this.token='Letras';
			return this.aceptar;
		}
			else{
				return this.error;
			}
	}


EstadoOcho(){
			this.estado="8"
		switch(this.lex[this.contador++]){
	 	case '+': return this.EstadoTrece();
		case '-': return this.EstadoTrece();
		case '=': return this.EstadoTrece();
		case '0': return this.EstadoTrece();
		case '1': return this.EstadoTrece();
		case '2': return this.EstadoTrece();
		case '3': return this.EstadoTrece();	
		case '4': return this.EstadoTrece();
		case '5': return this.EstadoTrece();
		case '6': return this.EstadoTrece();
		case '7': return this.EstadoTrece();
		case '8': return this.EstadoTrece();
		case '9': return this.EstadoTrece();
		case 'a': return this.EstadoSeis();
		case 'b': return this.EstadoSeis();
		case 'e': return this.EstadoSeis();
		case 'f': return this.EstadoSeis();
		case 'g': return this.EstadoSeis();
		case 'h': return this.EstadoSeis();
		case 'j': return this.EstadoSeis();
		case 'k': return this.EstadoSeis();
		case 'l': return this.EstadoSeis();
		case 'm': return this.EstadoSeis();
		case 'o': return this.EstadoSeis();
		case 'ñ': return this.EstadoSeis();
		case 'q': return this.EstadoSeis();
		case 's': return this.EstadoSeis();
		case 'u': return this.EstadoSeis();
		case 'v': return this.EstadoSeis();
		case 'w': return this.EstadoSeis();
		case 'x': return this.EstadoSeis();
		case 'y': return this.EstadoSeis();
		case 'z': return this.EstadoSeis();
		case 'p': return this.EstadoSeis();
		case 'r': return this.EstadoNueve();
		case 'i': return this.EstadoSeis();
		case 'n': return this.EstadoSeis();
		case 't': return this.EstadoSeis();
		default: return this.error;
	}

}
EstadoNueve(){
			this.estado="9"
	switch(this.lex[this.contador++]){
	 	case '+': return this.EstadoTrece();
		case '-': return this.EstadoTrece();
		case '=': return this.EstadoTrece();
		case '0': return this.EstadoTrece();
		case '1': return this.EstadoTrece();
		case '2': return this.EstadoTrece();
		case '3': return this.EstadoTrece();	
		case '4': return this.EstadoTrece();
		case '5': return this.EstadoTrece();
		case '6': return this.EstadoTrece();
		case '7': return this.EstadoTrece();
		case '8': return this.EstadoTrece();
		case '9': return this.EstadoTrece();
		case 'a': return this.EstadoSeis();
		case 'b': return this.EstadoSeis();
		case 'e': return this.EstadoSeis();
		case 'f': return this.EstadoSeis();
		case 'g': return this.EstadoSeis();
		case 'h': return this.EstadoSeis();
		case 'j': return this.EstadoSeis();
		case 'k': return this.EstadoSeis();
		case 'l': return this.EstadoSeis();
		case 'm': return this.EstadoSeis();
		case 'o': return this.EstadoSeis();
		case 'ñ': return this.EstadoSeis();
		case 'q': return this.EstadoSeis();
		case 's': return this.EstadoSeis();
		case 'u': return this.EstadoSeis();
		case 'v': return this.EstadoSeis();
		case 'w': return this.EstadoSeis();
		case 'x': return this.EstadoSeis();
		case 'y': return this.EstadoSeis();
		case 'z': return this.EstadoSeis();
		case 'p': return this.EstadoSeis();
		case 'r': return this.EstadoSeis();
		case 'i': return this.EstadoDiez();
		case 'n': return this.EstadoSeis();
		case 't': return this.EstadoSeis();
		default: return this.error;

	}
}
EstadoDiez(){
		this.estado="10"
	switch(this.lex[this.contador++]){
	 	case '+': return this.EstadoTrece();
		case '-': return this.EstadoTrece();
		case '=': return this.EstadoTrece();
		case '0': return this.EstadoTrece();
		case '1': return this.EstadoTrece();
		case '2': return this.EstadoTrece();
		case '3': return this.EstadoTrece();	
		case '4': return this.EstadoTrece();
		case '5': return this.EstadoTrece();
		case '6': return this.EstadoTrece();
		case '7': return this.EstadoTrece();
		case '8': return this.EstadoTrece();
		case '9': return this.EstadoTrece();
		case 'a': return this.EstadoSeis();
		case 'b': return this.EstadoSeis();
		case 'e': return this.EstadoSeis();
		case 'f': return this.EstadoSeis();
		case 'g': return this.EstadoSeis();
		case 'h': return this.EstadoSeis();
		case 'j': return this.EstadoSeis();
		case 'k': return this.EstadoSeis();
		case 'l': return this.EstadoSeis();
		case 'm': return this.EstadoSeis();
		case 'o': return this.EstadoSeis();
		case 'ñ': return this.EstadoSeis();
		case 'q': return this.EstadoSeis();
		case 's': return this.EstadoSeis();
		case 'u': return this.EstadoSeis();
		case 'v': return this.EstadoSeis();
		case 'w': return this.EstadoSeis();
		case 'x': return this.EstadoSeis();
		case 'y': return this.EstadoSeis();
		case 'z': return this.EstadoSeis();
		case 'p': return this.EstadoSeis();
		case 'r': return this.EstadoSeis();
		case 'i': return this.EstadoSeis();
		case 'n': return this.EstadoOnce();
		case 't': return this.EstadoSeis();
		default: return this.error;
}
}
EstadoOnce(){
			this.estado="11"
		switch(this.lex[this.contador++]){
	 	case '+': return this.EstadoTrece();
		case '-': return this.EstadoTrece();
		case '=': return this.EstadoTrece();
		case '0': return this.EstadoTrece();
		case '1': return this.EstadoTrece();
		case '2': return this.EstadoTrece();
		case '3': return this.EstadoTrece();	
		case '4': return this.EstadoTrece();
		case '5': return this.EstadoTrece();
		case '6': return this.EstadoTrece();
		case '7': return this.EstadoTrece();
		case '8': return this.EstadoTrece();
		case '9': return this.EstadoTrece();
		case 'a': return this.EstadoSeis();
		case 'b': return this.EstadoSeis();
		case 'e': return this.EstadoSeis();
		case 'f': return this.EstadoSeis();
		case 'g': return this.EstadoSeis();
		case 'h': return this.EstadoSeis();
		case 'j': return this.EstadoSeis();
		case 'k': return this.EstadoSeis();
		case 'l': return this.EstadoSeis();
		case 'm': return this.EstadoSeis();
		case 'o': return this.EstadoSeis();
		case 'ñ': return this.EstadoSeis();
		case 'q': return this.EstadoSeis();
		case 's': return this.EstadoSeis();
		case 'u': return this.EstadoSeis();
		case 'v': return this.EstadoSeis();
		case 'w': return this.EstadoSeis();
		case 'x': return this.EstadoSeis();
		case 'y': return this.EstadoSeis();
		case 'z': return this.EstadoSeis();
		case 'p': return this.EstadoSeis();
		case 'r': return this.EstadoSeis();
		case 'i': return this.EstadoSeis();
		case 'n': return this.EstadoSeis();
		case 't': return this.EstadoDoce();
		default: return this.error;


}
}
EstadoDoce(){
		this.estado="12"
	if(this.lex.length == this.contador){
		this.token='Imprimir';
			return this.aceptar;
		}
			else{
				return this.error;
			}
}
EstadoTrece(){
			this.estado="13"
	if(this.lex.length == this.contador){
		this.token='Letras';
			return this.aceptar;
		}
			else{
				return this.error;
			}
}



}


$(document).ready(function(){
	$('#id-button').click(function(){
			var expresion= $('#id-expresion').val();
			

			var cad= expresion.split(' ');

			for(var j =0; j<cad.length;j++){
				

				var objeto= new analizador(cad[j]);
				var respuesta= objeto.EstadoCero();

				tokenexpr= objeto.token;


				estado= objeto.estado;

	
	

					if(respuesta==0){
						//document.write(`<h1>${cad[j]}: Es verdadera ${nombre}</h1>`)
						$('#modal1').modal('open');
						document.getElementById("contenido_modal").innerHTML='<b><h4>La expresion "'+expresion+'" es valida <h5><br><strong> Expresion: '+ expresion +' </strong><br><strong>Estado: '+ estado +' </strong></br><strong> Token: '+ tokenexpr +' </strong> </h5></h4></b><center><i class="large material-icons verde">check</i></center>'
					}
						else{
								$('#modal1').modal('open');
								document.getElementById("contenido_modal").innerHTML='<b><h4>La expresion "'+expresion+'" no es valida <h5><br><strong> Expresion: '+ expresion +' </strong><br><strong>Estado: '+ estado +' </strong></br><strong> Token: '+ tokenexpr +' </strong> </h5></h4></b><center><i class="large material-icons verde">check</i></center>'

						}
			}

	})

	




})







 