const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

function search(str) {
	let results = [];

	fruit.forEach(f => {
		if (f.toLowerCase().includes(str.toString().toLowerCase()) && results.indexOf(f) === -1) {
			results.push(f);
		}
	})

	suggestions.innerHTML = '';

	showSuggestions(results, str)

	results.forEach(result => {
		const li = document.createElement('li');
		li.innerText = result;
		suggestions.append(li);
	})
}

function searchHandler(e) {
	
	e.preventDefault(); 
	const inputValue = input.value;
	//console.log(inputValue)
	search(inputValue);
	

}

function showSuggestions(results, inputVal) {
	//console.log(typeof(`<strong>${inputVal}</strong>`))
	results.forEach(result => {
		if (result.includes(inputVal)) {
			result.replace(inputVal, "<strong>" + inputVal + "</strong")
		}
	})
	
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

