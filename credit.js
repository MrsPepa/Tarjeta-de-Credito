
function validCard(number){
	do{
		var askUser = prompt("Ingrese serial de tarjeta");//pidiendo numero a usuario
		var arrNumber = [];//array vacio que va a contener los numeros ingresados
		var validNum = /^\d*$/;//expresion regular para validar si son numeros
		if(askUser != "" && validNum.test(askUser) == true){//si input no esta vacio e ingresa un dato que sea número
			for(var i = 0; i < askUser.length ;i++){//recorro lo ingresado con usuario
				arrNumber.push(parseInt(askUser[i]));//ingreso en un nuevo array y pasarlos a number
			}
			var reverseArray = arrNumber.reverse();//revierto el array
			//variables a utilizar
			
			var totalSum = 0;//sumará las cifras
			var count = 1;//contará cada vez que se ejecute un ciclo
			var par = [];//guardará los números que deben ser multiplicados por 2
			var impar = [];//guardará los números que no son multiplicados

			for(var j = 0; j < reverseArray.length ;j++){//for para recorrer reverseArray y que comience a validar
				if(count % 2 !== 0){//si el contador es impar
					impar.push(reverseArray[j]);//agregará los números al array impar
				} else {
				par.push(reverseArray[j] * 2);//si no, los agrego al array par y los multiplico por 2
				}
				count++;
			}
			par = par.join("").split("");//el array par lo junto con un join y luego las cifras las separo con split
			finalArray = par.concat(impar);//junto los dos array en uno
			for(var x = 0; x <finalArray.length ;x++){//for que recorre el nuevo array
				totalSum += (finalArray[x] % 10);//sumo todas las cifras y le calculo el resto
			}
			totalSum = totalSum % 10;//al total le calculo el resto
			if(totalSum === 0){//si es igual a cero
				return alert("La tarjeta es válida");
			} else {
				return alert("La tarjeta es inválida");
			}

		} else {
			alert("favor ingrese parámetros válidos")}
	} while(askUser == "" && validNum.test(askUser) == false);//si input está vacio o ingreso un dato que no sea número, vuelvo a preguntar
}

validCard();