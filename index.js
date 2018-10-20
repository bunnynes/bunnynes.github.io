
function slideDown() {
	$("#div1").slideToggle();
	$("#div1").html("<h1>ADD ME: xBunnyneh</h1>");
	$("#div1").css("color", "#e71899");
}

function validate(){
	var name = $("#name").val();
	var message = $("#message").val();
	var missing = [];
	if(name == ""){
		missing.push("name");
	}
	if (message == "") {
		missing.push("message");
	}
	if(missing.length>0){
		$("#formerrors").html("You are missing: " + missing);
		$("#formerrors").css("color", "red");
	} else{
		$("#formerrors").html("Thank You!");
		$("#formerrors").css("color", "green");
	}
}

/*var a = 10;
var b = 8;

function addsquares(a,b) {
	alert(a*a+b*b);
}
=======
function slideDown() {
	$("#div1").slideToggle();
	$("#div1").html("<h1>ADD ME: xBunnyneh</h1>");
	$("#div1").css("color", "#e71899");
}
*/