window.onload = function () {
  document.getElementById("data_table").style.display = "none";
};
function refreshPage() {
  var table = document.getElementById("data_table");
  var table_len = table.rows.length - 1;
  for (let i = table_len - 1; i >= 4; i--) {
    document.getElementById("data_table").deleteRow(i);
  }
}

function getData() {
  document.getElementById("btnLoadData").style.display = "none";

  document.getElementById("data_table").style.display = "block";
}

function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";

  var First_Name = document.getElementById("First_Name_row" + no);
  var Middle_Name = document.getElementById("Middle_Name_row" + no);
  var Last_Name = document.getElementById("Last_Name_row" + no);
  var Email = document.getElementById("Email_row" + no);
  var Phone_Number = document.getElementById("Phone_Number_row" + no);
  var Role = document.getElementById("Role_row" + no);
  var Address = document.getElementById("Address_row" + no);

  var First_Name_data = First_Name.innerHTML;
  var Middle_Name_data = Middle_Name.innerHTML;
  var Last_Name_data = Last_Name.innerHTML;
  var Email_data = Email.innerHTML;
  var Phone_Number_data = Phone_Number.innerHTML;
  var Role_data = Role.innerHTML;
  var Address_data = Address.innerHTML;

  First_Name.innerHTML =
    "<input type='text' id='First_Name_text" +
    no +
    "' value='" +
    First_Name_data +
    "'>";
  Middle_Name.innerHTML =
    "<input type='text' id='Middle_Name_text" +
    no +
    "' value='" +
    Middle_Name_data +
    "'>";
  Last_Name.innerHTML =
    "<input type='text' id='Last_Name_text" +
    no +
    "' value='" +
    Last_Name_data +
    "'>";
  Email.innerHTML =
    "<input type='text' id='Email_text" + no + "' value='" + Email_data + "'>";
  Phone_Number.innerHTML =
    "<input type='text' id='Phone_Number_text" +
    no +
    "' value='" +
    Phone_Number_data +
    "'>";
  Role.innerHTML =
    "<input type='text' id='Role_text" + no + "' value='" + Role_data + "'>";
  Address.innerHTML =
    "<input type='text' id='Address_text" +
    no +
    "' value='" +
    Address_data +
    "'>";
}

function save_row(no) {
  var First_Name_val = document.getElementById("First_Name_text" + no).value;
  var Middle_Name_val = document.getElementById("Middle_Name_text" + no).value;
  var Last_Name_val = document.getElementById("Last_Name_text" + no).value;
  var Email_val = document.getElementById("Email_text" + no).value;
  var Phone_Number_val = document.getElementById(
    "Phone_Number_text" + no
  ).value;
  var Role_val = document.getElementById("Role_text" + no).value;
  var Address_val = document.getElementById("Address_text" + no).value;

  document.getElementById("First_Name_row" + no).innerHTML = First_Name_val;
  document.getElementById("Middle_Name_row" + no).innerHTML = Middle_Name_val;
  document.getElementById("Last_Name_row" + no).innerHTML = Last_Name_val;
  document.getElementById("Email_row" + no).innerHTML = Email_val;
  document.getElementById("Phone_Number_row" + no).innerHTML = Phone_Number_val;
  document.getElementById("Role_row" + no).innerHTML = Role_val;
  document.getElementById("Address_row" + no).innerHTML = Address_val;

  document.getElementById("edit_button" + no).style.display = "block";
  document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
  var new_First_Name = document.getElementById("new_First_Name").value;
  var new_Middle_Name = document.getElementById("new_Middle_Name").value;
  var new_Last_Name = document.getElementById("new_Last_Name").value;
  var new_Email = document.getElementById("new_Email").value;
  var new_Phone_Number = document.getElementById("new_Phone_Number").value;
  var new_Role = document.getElementById("new_Role").value;
  var new_Address = document.getElementById("new_Address").value;

  var table = document.getElementById("data_table");
  var table_len = table.rows.length - 1;
  var row = (table.insertRow(table_len).outerHTML =
    "<tr id='row" +
    table_len +
    "'><td id='First_Name_row" +
    table_len +
    "'>" +
    new_First_Name +
    "</td><td id='Middle_Name_row" +
    table_len +
    "'>" +
    new_Middle_Name +
    "</td><td id='Last_Name_row" +
    table_len +
    "'>" +
    new_Last_Name +
    "</td><td id='Email_row" +
    table_len +
    "'>" +
    new_Email +
    "</td><td id='Phone_Number_row" +
    table_len +
    "'>" +
    new_Phone_Number +
    "</td><td id='Role_row" +
    table_len +
    "'>" +
    new_Role +
    "</td><td id='Address_row" +
    table_len +
    "'>" +
    new_Address +
    "</td><td><input type='button' id='edit_button" +
    table_len +
    "' value='Edit' class='edit' onclick='edit_row(" +
    table_len +
    ")'> <input type='button' id='save_button" +
    table_len +
    "' value='Save' class='save' onclick='save_row(" +
    table_len +
    ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" +
    table_len +
    ")'></td></tr>");

  document.getElementById("new_First_Name").value = "";
  document.getElementById("new_Middle_Name").value = "";
  document.getElementById("new_Last_Name").value = "";
  document.getElementById("new_Email").value = "";
  document.getElementById("new_Phone_Number").value = "";
  document.getElementById("new_Role").value = "";
  document.getElementById("new_Address").value = "";
}
