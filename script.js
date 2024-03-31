var buttonAdd = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liArr = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	appendDeleteButton(li);
	li.appendChild(document.createTextNode(input.value));	
	li.addEventListener("click", toggleItem);
	ul.appendChild(li);
	input.value = "";
}

function appendDeleteButton(el){
	let button = document.createElement("button");
	let btnIcon = document.createElement("span");

	//Format delete button icon
	btnIcon.classList.add("fa-solid", "fa-xmark");
	button.appendChild(btnIcon)

	button.classList.add("button-38");

	console.log(button);

	button.addEventListener("click",removeItemAfterClick);
	el.appendChild(button);
}

function removeItemAfterClick(event){
	let parent = event.target.closest("li");
	parent.remove();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleItem(event){
	let li=event.target;
	li.classList.toggle("done");
}

liArr.forEach(li=>{
	appendDeleteButton(li);
	li.addEventListener("click", toggleItem);	
});

buttonAdd.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);