//Event listener, waiting for page to load all three elements
	window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

//Quote event listener on #quotes button
	// const quote = document.querySelector('#link')
	// quote.addEventListener('mouseover',() =>  {
    
	 //});
	
	
   
	


//Event to submit form
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

// Just creating a div (DOM Node) to place on page for task
		const task_el = document.createElement('div');
		task_el.classList.add('task');


		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

// Adds tasks to page 
		task_el.appendChild(task_content_el);


// Brings in tasks element that we make to page (allows text)
		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

// Just creating the div for actions "edit" & "delete"
		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');


// Edit Button element 		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

// Delete Button element
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';


// Appending and applying elements to page
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

// Just helps prevents problems in text input etc
		input.value = '';


// Creating Edit button
		task_edit_el.addEventListener('mouseover', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

// Creating Delete button
		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
    
	});
	
// Quote json/api element
 //const base_URL = "http://localhost:3000/quote-library" 
	  // Quote json/api element
	  function showUser() {
		const base_URL = "http://localhost:3000/quote-library" 
		fetch(base_URL)
        .then(response => response.json())
	    .then(response => response.forEach((response)=> {
			console.log(response.link)
			// getQuotes()
			response.link
		}) ) 
        // Last progress (link only showing up on console not DOM) ^^^
  
  }; showUser() 
 
//   function getQuotes() {
// 	const quoteHolder = document.createElement("div") 
// 	quoteHolder.classList.add("Holder")
// 	const image = document.createElement("img")
// 	image.classList.add("imageClass")
// 	image.src = base_URL.link
// 	quoteHolder.append(image) 
// }
// getQuotes()

});