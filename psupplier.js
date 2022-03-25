var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["supplier"] = document.getElementById("supplier").value;
    formData["nama"] = document.getElementById("nama").value;
    formData["telp"] = document.getElementById("telp").value;
    formData["almt"] = document.getElementById("almt").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.supplier;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nama;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.telp;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.almt;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("supplier").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("telp").value = "";
    document.getElementById("almt").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("supplier").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nama").value = selectedRow.cells[1].innerHTML;
    document.getElementById("telp").value = selectedRow.cells[2].innerHTML;
    document.getElementById("almt").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.supplier;
    selectedRow.cells[1].innerHTML = formData.nama;
    selectedRow.cells[2].innerHTML = formData.telp;
    selectedRow.cells[3].innerHTML = formData.almt;
}

function onDelete(td) {
    if (confirm('Yakin mau hapus ? gak akan nyesel ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("supplier").value == "") {
        isValid = false;
        document.getElementById("supplierValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("supplierValidationError").classList.contains("hide"))
            document.getElementById("supplierValidationError").classList.add("hide");
    }
    return isValid;
}