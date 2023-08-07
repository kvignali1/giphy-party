// url : api.giphy.com/v1/gifs/search
const input = document.querySelector("#search");
const submitBtn = document.querySelector("#submit");

async function getGiphy(term) {
	try {
		let apiKey = "orxXr84olxyfJwzUPIPaxvfhzt3qDuv9";
		let res = await axios.get(
			`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${term}`
		);
		// console.log(`META ${res.data.meta}`);
		// console.log(res.data[0].images.original.url);
		let fig = document.createElement("figure");
		let img = document.createElement("img");
		img.src = res.data[0].images.original.url;
		fig.appendChild(img);
		const dropZone = document.querySelector("#dropZone");
		dropZone.insertAdjacentElement("afterbegin", fig);
	} catch (e) {
		alert("Error in request or search bar");
	}
}
submitBtn.addEventListener("click", function (e) {
	e.preventDefault();
	let searchTerm = input.value;
	getGiphy(searchTerm);
});
