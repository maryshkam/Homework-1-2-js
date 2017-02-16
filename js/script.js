var userNumber;
var userPower;

userNumber = +prompt('Please enter the number of exponentiation', '');
userPower = +prompt('Please enter the number of power', '');

console.log('Result is', pow(userNumber, userPower) );
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
