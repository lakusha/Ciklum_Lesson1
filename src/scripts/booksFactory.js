import {httpGet} from'./getData';

httpGet("./src/data/books.json")
	.then(
	response => {
		CreateBooks(JSON.parse(response).books);
	},
	error => console.log(`Rejected: ${error}`)
	);

export function CreateBooks(json){
	// массив объектов книг
	let books = json;
	const BOOKS_PLACE_IN_DOM = document.querySelector('.books');

	console.log(books);
	books.forEach(function(item, item_number, array){
		let book = document.createElement('div');
		book.className = "book"; 
		book.innerHTML = '<a href='+item.url+'><img src='+item.cover+'></a>'
						+'<div class="info"><h2>'+item.title+'</h2>'
						+'<h3><a href='+ item.authorUrl +'>'+ item.author+'</a></h3>'
						+'<p class="level">'+item.level+'</p>'
						+'<p class="description">'+item.info+'</p></div>' ;
		BOOKS_PLACE_IN_DOM.appendChild(book);
	});
};