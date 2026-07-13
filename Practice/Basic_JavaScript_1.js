
	function My_First_Function() {
		document.getElementById("Irish").innerHTML =
		"<span style='color:green'>Kiss me, I'm Irish!</span>";
	}


function validateForm() {
	let x = document.forms["myForm"]["phone"].value;
	if (x == "") {
		alert("Phone number must be filled out");
		return false;
	}
}

function openForm() {
	document.getElementById("myForm").style.display = "block";
	document.querySelector(".open-button").style.display = "none";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
	document.querySelector(".open-button").style.display = "block";
}