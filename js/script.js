// get all element selected for dom manipulation
const container = document.querySelector(".container");
const loader = document.querySelector(".loader");

// show content when loading finished
const onLoaderHandler = () => {
	loader.style.display = "none";
	container.style.display = "block";
}

// window listener on load
window.addEventListener("load", () => {
	setTimeout(onLoaderHandler, 1500);
}, false);