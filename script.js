//Showing and Hidding contents
const btn = document.querySelector(".header");
btn.addEventListener('click', function (e) {
	e.preventDefault();
	const data = document.querySelector(".showEntry");
	const entry = document.querySelector(".addEntry");
})

//Event Listener For Adding Contacts
const frm = document.querySelector("#entForm");
const list = document.querySelector("#conList");
if (frm != null) {
	frm.addEventListener('submit', function (e) {
		e.preventDefault();

		//create Elements
		var name = document.querySelector("#name");
		var number = document.querySelector("#number");
		var email = document.querySelector("#email");




		if ((name.value && number.value && email.value) != "") {
			const nameEl = document.createElement('td');
			const phoneEl = document.createElement('td');
			const emailEl = document.createElement('td');
			// const delEl = document.createElement('td');
			const el = document.createElement('tr');

			//Adding content
			nameEl.textContent = name.value;
			phoneEl.textContent = number.value;
			emailEl.textContent = email.value;
			// delEl.textContent = "X";

			//Adding Classes
			// delEl.classList.add('delete');

			//Adding to table
			el.appendChild(nameEl);
			el.appendChild(phoneEl);
			el.appendChild(emailEl);
			// el.appendChild(delEl);
			list.appendChild(el);

			//

			//Clear Fields
			name.value = null;
			number.value = null;
			email.value = null;
			document.querySelector(".showName").textContent = name.value;
			document.querySelector(".showPhone").textContent = number.value;
			document.querySelector(".showEmail").textContent = email.value;
			//Show Alert

			document.querySelector("#error").textContent = "Entry Added To Directory";
			document.querySelector("#error").style.background = "green";
			setTimeout(clearAlert, 1500);
		}
		else {
			document.querySelector("#error").textContent = "Invalid Input";
			// document.querySelector(".alert").style.background = "red";
			setTimeout(clearAlert, 1500);
		}
		function clearAlert() {
			document.querySelector("#error").textContent = "";

		}
	});
}



//Event Listener For Deleting Contacts

// if (list != null) {
// 	list.addEventListener('click', function (e) {
// 		if (e.target.className == "delete") {
// 			const el = e.target.parentElement;
// 			el.parentElement.removeChild(el);
// 		}
// 	});
// }



//To Show Real-Time data

frm.addEventListener('input', function () {

	var name = document.querySelector("#name");
	var number = document.querySelector("#number");
	var email = document.querySelector("#email");
	if (name.value != null) {
		document.querySelector(".showName").textContent = name.value;
		document.querySelector(".showPhone").textContent = number.value;
		document.querySelector(".showEmail").textContent = email.value;
	}

	else {
		document.querySelector(".showName").textContent = " ";
		document.querySelector(".showPhone").textContent = " ";
		document.querySelector(".showEmail").textContent = " ";
	}
})




///Search

function searchFunction() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("mySearchInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}



///sorting

function sortTable() {
	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById("myTable");
	switching = true;
	/*Make a loop that will continue until
	no switching has been done:*/
	while (switching) {
		//start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/*Loop through all table rows (except the
		first, which contains table headers):*/
		for (i = 1; i < (rows.length - 1); i++) {
			//start by saying there should be no switching:
			shouldSwitch = false;
			/*Get the two elements you want to compare,
			one from current row and one from the next:*/
			x = rows[i].getElementsByTagName("TD")[0];
			y = rows[i + 1].getElementsByTagName("TD")[0];
			//check if the two rows should switch place:
			if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
				//if so, mark as a switch and break the loop:
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			/*If a switch has been marked, make the switch
			and mark that a switch has been done:*/
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}