var userNumber = +prompt('Enter your number for calculation power');
var userPower = +prompt('Enter your power');

if ( (typeof(userNumber) === 'number') && (typeof(userPower) === 'number')  && (isNaN(userNumber) === false) && (Number.isInteger(userPower) == true)) {
    console.log('Result is', pow(userNumber, userPower) );
} else {
	console.log('Error: the number and power shoud be number');
	}

function pow(number, power) {
	
var result = number;
	if (power == 0) {
 		return 1;
 	} 

	for (var i = 1; i < Math.abs(power); i++) {
 	   result *= number;
	}
 	
 	if (power > 0) {
 		return result;
 	} else {
 		
 		return 1 / result;
 	}
 	
}
