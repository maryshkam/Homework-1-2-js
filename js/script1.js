
var nameArray = [];

for(var i = 1; i <= 5; i++) {
	var currentName;
	currentName = prompt('Введіть ' + i + '-е імя:');
	nameArray.push(currentName);
}

var userName;

userName = prompt('Введіть ваше імя користувача');

if (checkName(userName) == true) {
	alert(userName + ', Ви успішно увійшли.');
} else {
	alert('Помилка: користувач ' + userName + 'не знайдено!');
}

function checkName(name) {
	for (var i = 0; i < nameArray.length; i++) {
		if (nameArray[i] == name) {
			return true;
		}
	}
	return false;
}
		