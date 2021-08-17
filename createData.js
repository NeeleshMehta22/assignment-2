var local_data = JSON.parse(JSON.stringify(grid_data));
var new_data_on_refresh = JSON.parse(JSON.stringify(grid_data));
var updateLocalData = [];
function createData() {
  var column_name = Object.keys(local_data[0]);
  var row_header_data = "";
  var header_col = "";

  for (var i = 1; i < column_name.length; i++) {
    header_col = header_col + " <th>" + column_name[i] + "</th>";
  }
  header_col += " <th>" + "Actions" + "</th>";
  row_header_data = row_header_data + "<tr>" + header_col + "</tr>";
  var table_head_element = document.createElement("thead");
  table_head_element.innerHTML = row_header_data;
  document.getElementById("my_table").appendChild(table_head_element);

  var row_data = "";
  for (var i = 0; i < new_data_on_refresh.length; i++) {
    row_data =
      row_data +
      "<tr id=" +
      "row" +
      new_data_on_refresh[i].id +
      ">" +
      " <td  id=" +
      "col_first_name" +
      new_data_on_refresh[i].id +
      ">" +
      new_data_on_refresh[i].first_name +
      "</td>" +
      " <td id=" +
      "col_middle_name" +
      new_data_on_refresh[i].id +
      ">" +
      new_data_on_refresh[i].middle_name +
      "</td>" +
      " <td id=" +
      "col_last_name" +
      new_data_on_refresh[i].id +
      ">" +
      new_data_on_refresh[i].last_name +
      "</td>" +
      " <td id=" +
      "col_email" +
      new_data_on_refresh[i].id +
      ">" +
      new_data_on_refresh[i].email +
      "</td>" +
      " <td id=" +
      "col_phone_number" +
      new_data_on_refresh[i].id +
      ">" +
      new_data_on_refresh[i].phone_number +
      "</td>" +
      " <td id=" +
      "col_role" +
      new_data_on_refresh[i].id +
      ">" +
      new_data_on_refresh[i].role +
      "</td>" +
      " <td id=" +
      "col_address" +
      new_data_on_refresh[i].id +
      ">" +
      new_data_on_refresh[i].address +
      "</td>" +
      " <td>" +
      "<button id=" +
      "edit" +
      new_data_on_refresh[i].id +
      " onclick=edit_row(" +
      new_data_on_refresh[i].id +
      ") >" +
      "Edit" +
      "</button >" +
      "<button id=" +
      "delete" +
      new_data_on_refresh[i].id +
      " onclick=delete_row(" +
      new_data_on_refresh[i].id +
      ") >" +
      "Delete" +
      "</button>" +
      "<button id=" +
      "save" +
      new_data_on_refresh[i].id +
      " onclick=save_row(" +
      new_data_on_refresh[i].id +
      ") >" +
      "Save" +
      "</button>" +
      "<button id=" +
      "cancel" +
      new_data_on_refresh[i].id +
      " onclick=cancel_row(" +
      new_data_on_refresh[i].id +
      ") >" +
      "Cancel" +
      "</button >" +
      "</td>" +
      "</tr>";
  }
  var table_body_element = document.createElement("tbody");
  table_body_element.innerHTML = row_data;
  document.getElementById("my_table").appendChild(table_body_element);
}

function loadData() {
  document.getElementById("btnLoad").innerHTML = "Refresh Data";
  var Table = document.getElementById("my_table");
  Table.innerHTML = "";
  createData();
  for (var i = 0; i < new_data_on_refresh.length; i++) {
    document.getElementById(
      "cancel" + new_data_on_refresh[i].id
    ).style.display = "none";
    document.getElementById("save" + new_data_on_refresh[i].id).style.display =
      "none";
  }
}
function edit_row(no) {
  cancel_row(no, "edit");
  var First_Name = document.getElementById("col_first_name" + no);
  var Middle_Name = document.getElementById("col_middle_name" + no);
  var Last_Name = document.getElementById("col_last_name" + no);
  var Email = document.getElementById("col_email" + no);
  var Phone_Number = document.getElementById("col_phone_number" + no);
  var Role = document.getElementById("col_role" + no);
  var Address = document.getElementById("col_address" + no);

  var First_Name_data = First_Name.innerHTML;
  var Middle_Name_data = Middle_Name.innerHTML;
  var Last_Name_data = Last_Name.innerHTML;
  var Email_data = Email.innerHTML;
  var Phone_Number_data = Phone_Number.innerHTML;
  var Role_data = Role.innerHTML;
  var Address_data = Address.innerHTML;

  First_Name.innerHTML =
    "<input type='text' id='in_col_first_name" +
    no +
    "' value='" +
    First_Name_data +
    "'/>";
  Middle_Name.innerHTML =
    "<input type='text' id='in_col_middle_name" +
    no +
    "' value='" +
    Middle_Name_data +
    "'/>";
  Last_Name.innerHTML =
    "<input type='text' id='in_col_last_name" +
    no +
    "' value='" +
    Last_Name_data +
    "'/>";
  Email.innerHTML =
    "<input type='text' id='in_col_email" +
    no +
    "' value='" +
    Email_data +
    "'/>";
  Phone_Number.innerHTML =
    "<input type='text' id='in_col_phone_number" +
    no +
    "' value='" +
    Phone_Number_data +
    "'/>";
  Role.innerHTML =
    "<input type='text' id='in_col_role" + no + "' value='" + Role_data + "'/>";
  Address.innerHTML =
    "<input type='text' id='in_col_address" +
    no +
    "' value='" +
    Address_data +
    "'/>";
  document.getElementById("edit" + no).style.display = "none";
  document.getElementById("delete" + no).style.display = "none";
  document.getElementById("save" + no).style.display = "block";
  document.getElementById("cancel" + no).style.display = "block";
}

function save_row(no) {
  updateLocalData = local_data[no - 1];
  var First_Name_val = document.getElementById("in_col_first_name" + no).value;
  var Middle_Name_val = document.getElementById(
    "in_col_middle_name" + no
  ).value;
  var Last_Name_val = document.getElementById("in_col_last_name" + no).value;
  var Email_val = document.getElementById("in_col_email" + no).value;
  var Phone_Number_val = document.getElementById(
    "in_col_phone_number" + no
  ).value;
  var Role_val = document.getElementById("in_col_role" + no).value;
  var Address_val = document.getElementById("in_col_address" + no).value;

  updateLocalData["first_name"] = First_Name_val;
  updateLocalData["middle_name"] = Middle_Name_val;
  updateLocalData["last_name"] = Last_Name_val;
  updateLocalData["email"] = Email_val;
  updateLocalData["phone_number"] = Phone_Number_val;
  updateLocalData["role"] = Role_val;
  updateLocalData["address"] = Address_val;

  local_data[no - 1] = updateLocalData;

  document.getElementById("col_first_name" + no).innerHTML = First_Name_val;
  document.getElementById("col_middle_name" + no).innerHTML = Middle_Name_val;
  document.getElementById("col_last_name" + no).innerHTML = Last_Name_val;
  document.getElementById("col_email" + no).innerHTML = Email_val;
  document.getElementById("col_phone_number" + no).innerHTML = Phone_Number_val;
  document.getElementById("col_role" + no).innerHTML = Role_val;
  document.getElementById("col_address" + no).innerHTML = Address_val;
  document.getElementById("save" + no).style.display = "none";
  document.getElementById("edit" + no).style.display = "block";
  document.getElementById("delete" + no).style.display = "block";
  document.getElementById("cancel" + no).style.display = "none";
}

function delete_row(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}

function cancel_row(no, val = "") {
  if (val !== "edit") {
    var currentRow = local_data[parseInt(no - 1)];
    var First_Name_val = currentRow["first_name"];
    var Middle_Name_val = currentRow["middle_name"];
    var Last_Name_val = currentRow["last_name"];
    var Email_val = currentRow["email"];
    var Phone_Number_val = currentRow["phone_number"];
    var Role_val = currentRow["role"];
    var Address_val = currentRow["address"];

    document.getElementById("col_first_name" + no).innerHTML = First_Name_val;
    document.getElementById("col_middle_name" + no).innerHTML = Middle_Name_val;
    document.getElementById("col_last_name" + no).innerHTML = Last_Name_val;
    document.getElementById("col_email" + no).innerHTML = Email_val;
    document.getElementById("col_phone_number" + no).innerHTML =
      Phone_Number_val;
    document.getElementById("col_role" + no).innerHTML = Role_val;
    document.getElementById("col_address" + no).innerHTML = Address_val;

    document.getElementById("save" + no).style.display = "none";
    document.getElementById("edit" + no).style.display = "block";
    document.getElementById("delete" + no).style.display = "block";
    document.getElementById("cancel" + no).style.display = "none";
  }
}
