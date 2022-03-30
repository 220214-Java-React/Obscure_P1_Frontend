// With this function loging(), we are able to validat the user input values of username and password.
// Also print out an alerti once information is properly entered.

function login() {
  var uname = document.getElementById("username").value;
  var pwd = document.getElementById("password").value;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (uname == "") {
    alert("please enter user name.");
  } else if (pwd == "") {
    alert("enter the password");
  } else if (!filter.test(uname)) {
    alert("Enter valid user id.");
  } else if (pwd.length < 6 || pwd.length > 6) {
    alert("Password min and max length is 6.");
  } else {
    alert(
      "Thank You for Login & You are Redirecting to Frutas Do Mundo Employee Reimbursement Program!"
    );

    //Here we will be redirecting to a registrations page.
    window.location = "";
  }
}
//Reset Inputfield code.
function clearFunc() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
