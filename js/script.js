var userNumber = +prompt('Enter your number for calculation power');
var userPower = +prompt('Enter your power');

if ( (typeof(userNumber) === 'number') && (isNaN(userNumber) === false) && (typeof(userPower) === 'number')  && (Number.isInteger(userPower) == false)) {
    console.log('Result is', pow(userNumber, userPower) );
} else {
	console.log('Error: the number and power shoud be number');
	}

/*if ( (Number.isInteger(userNumber) == false) || (Number.isInteger(userPower) == false) ) {
	console.log('Error: Number and power should be integer');
} else {
	console.log('Result is ', pow(userNumber, userPower) );
}*/

function pow(number, power) {
	
var result = number;
	if (power == 0) {
 		return 1;
 	} 

	for (var i = 1; i < power; i++) {
 	   result *= number;
	}
 	
 	if (power > 0) {
 		return result;
 	} else {
 		return 1 / result;
 	}
 	
}
