//your JS code here. If required.

let inputElement=document.getElementById("fname");
inputElement.addEventListner("mouseLeave",()=>{
	let inputElementValue=inputElement.value;
	inputElementValue.toUpperCase();
})
