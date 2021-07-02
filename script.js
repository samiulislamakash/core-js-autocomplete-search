// get all requerd elements
const searchWrapper = document.querySelector('.search-input');
const inputBox = document.querySelector('input');
const suggestBox = document.querySelector('.autocom-box');

// if user search on key relices
inputBox.onkeyup = (e) => {
	let userData = e.target.value;
	let emptyArray = [];
	if (userData) {
		emptyArray = suggestion.filter((d) => {
			return d.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
		});

		emptyArray = emptyArray.map((data) => {
			return (data = '<li>' + data + '</li>');
		});
		searchWrapper.classList.add('active');
		showSuggestion(emptyArray);
		let allList = suggestBox.querySelectorAll('li');
		for (let i = 0; i < allList.length; i++) {
			allList[i].setAttribute('onclick', 'select(this)');
		}
	} else {
		searchWrapper.classList.remove('active');
	}
};

function select(element) {
	let selectUserData = element.textContent;
	inputBox.value = selectUserData;
	searchWrapper.classList.remove('active');
}

function showSuggestion(list) {
	let listData;
	if (!list.length) {
		listData = '<li> No Data Found</li>';
	} else {
		listData = list.join('');
	}
	suggestBox.innerHTML = listData;
}
