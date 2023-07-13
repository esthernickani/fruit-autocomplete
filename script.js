const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

function search(str) {
	let results = [];

	fruit.forEach(f => {
		if (f.includes(str.toString().toLowerCase()) && results.indexOf(f) === -1) {
			results.push(f);
		}
	})

	suggestions.innerHTML = '';

	results = showSuggestions(results, str);

	results.forEach(result => {
		const li = document.createElement('li');
		li.innerHTML = result;
		suggestions.append(li);
	})
}

function searchHandler(e) {
	e.preventDefault(); 
	let inputValue = input.value;
	search(inputValue)
}

function showSuggestions(results, inputVal) {
//console.log(typeof(`<strong>${inputVal}</strong>`))
	let updatedRes = []
	results.forEach(result => {

		let lowercasedResult = result.toLowerCase();
		let lowercasedInputVal = inputVal.toLowerCase();
		let index = lowercasedResult.indexOf(lowercasedInputVal);

		if (index !== -1) {
			let matchedPart = result.substring(index, index + inputVal.length);
			let boldedResult = result.replace(matchedPart, `<strong>${matchedPart}</strong>`);
			updatedRes.push(boldedResult);
		} else {
			updatedRes.push(result);
		}
	})
	return updatedRes;

// TODO
}

function useSuggestion(e) {
	e.preventDefault();
	console.log(e.target.innerText)
	if (e.target.tagName.toLowerCase() === 'li') {
		const selectedValue = e.target.innerText;
		input.value = selectedValue;
	}
	suggestions.innerHTML = '';
}

