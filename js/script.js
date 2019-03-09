var link = document.querySelector(".search-form-link");
var popup = document.querySelector(".popup");
var form = document.querySelector(".search");
var arrivalDate = document.querySelector("[name=arrival-date]");
var departureDate = document.querySelector("[name=departure-date]");
var adults = document.querySelector("[name=adults]");
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("adults");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("popup-opened");
	popup.classList.remove("popup-error");
	 if (storage) {
		adults.value = storage;
		children.value = localStorage.getItem("children");
	}
});

form.addEventListener("submit", function (evt) {
	if (!arrivalDate.value || !departureDate.value || !adults.value || (adults.value < 1)) {
		evt.preventDefault();
		popup.classList.remove("popup-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("popup-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("adults", adults.value);
			localStorage.setItem("children", children.value);
		}
	}
});