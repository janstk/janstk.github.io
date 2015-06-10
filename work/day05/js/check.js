var form_name = document.getElementById('form_name');
var form_pass = document.getElementById('form_pass');
var form_repass = document.getElementById('form_repass');
var hobbys = document.getElementsByName('hobby');
var userRegexp = /^\w{4,20}$/;
var passRegexp = /^.{6,}$/;

function checkForm() {
	if (!checkUsername())
		return false;
	else if (!checkPassword())
		return false;
	else if (!checkRePassword())
		return false;
	else if (!checkHobby())
		return false;
	return true;
}



function checkUsername() {
	var username = form_name.value;
	var msgSpan = form_name.parentElement.getElementsByTagName('span')[0];

	if (userRegexp.test(username)) {
		msgSpan.innerHTML = "<img src='img/right.png' />"
		return true;
	}
	msgSpan.innerHTML = "用户名输入有误。";
	form_name.focus();
	return false;
}

function checkPassword() {
	if (!checkUsername()) return false;
	var password = form_pass.value;
	var msgSpan = form_pass.parentElement.getElementsByTagName('span')[0];

	if (passRegexp.test(password)) {
		msgSpan.innerHTML = "<img src='img/right.png' />"
		return true;
	}
	msgSpan.innerHTML = "密码输入有误。";
	form_pass.focus();
	return false;
}

function checkRePassword() {
	if (!checkPassword()) return false;
	var repass = form_repass.value;
	var msgSpan = form_repass.parentElement.getElementsByTagName('span')[0];
	if (repass == form_pass.value) {
		msgSpan.innerHTML = "<img src='img/right.png' />"
		return true;
	}
	msgSpan.innerHTML = "两次密码输入不一致。";
	form_repass.focus();
	return false;
}

function checkHobby() {
	var flag = false;
	for (var x = 0; x < hobbys.length; x++) {
		if (hobbys[x].checked) {
			flag = true;
		}
	}
	var msgSpan = hobbys[0].parentElement.getElementsByTagName('span')[0];
	if (flag) {
		msgSpan.innerHTML = "<img src='img/right.png' />";
	} else {
		msgSpan.innerHTML = "请至少选择一个爱好";
	}
	return flag;

}