//your JS code here. If required.

let inputElement=document.getElementById("fname");
inputElement.addEventListener("blur",()=>{
	let inputElementValue=inputElement.value;
	inputElementValue.toUpperCase();
})
