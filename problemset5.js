var str = process.argv[2];

var alphabetSoup = function () {
	var letters = str.split('');
	console.log(letters);
	letters = letters.sort();
	console.log(letters);
	letters = letters.join('');
	console.log(letters);
};

alphabetSoup();