var CurrentDate = new Date();

var datetime =
	"Last Sync: " +
	CurrentDate.getDate() +
	"/" +
	(CurrentDate.getMonth() + 1) +
	"/" +
	CurrentDate.getFullYear() +
	" @ " +
	CurrentDate.getHours() +
	":" +
	CurrentDate.getMinutes() +
	":" +
	CurrentDate.getSeconds();

//console.log(CurrentDate)

var Info = CurrentDate;

console.log(Info);

function editText(id, text) {
	var element = document.getElementById(id);
	element.innerHTML = text;
}
