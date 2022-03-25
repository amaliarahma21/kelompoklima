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
    formData["pembeli"] = document.getElementById("pembeli").value;
    formData["nama"] = document.getElementById("nama").value;
    formData["jk"] = document.getElementById("jk").value;
    formData["telp"] = document.getElementById("telp").value;
    formData["alamat"] = document.getElementById("alamat").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.pembeli;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nama;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.jk;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.telp;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.alamat;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("pembeli").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("jk").value = "";
    document.getElementById("telp").value = "";
    document.getElementById("alamat").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("pembeli").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nama").value = selectedRow.cells[1].innerHTML;
    document.getElementById("jk").value = selectedRow.cells[2].innerHTML;
    document.getElementById("telp").value = selectedRow.cells[3].innerHTML;
    document.getElementById("alamat").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.pembeli;
    selectedRow.cells[1].innerHTML = formData.nama;
    selectedRow.cells[2].innerHTML = formData.jk;
    selectedRow.cells[3].innerHTML = formData.telp;
    selectedRow.cells[4].innerHTML = formData.alamat;
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
    if (document.getElementById("pembeli").value == "") {
        isValid = false;
        document.getElementById("pembeliValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("pembeliValidationError").classList.contains("hide"))
            document.getElementById("pembeliValidationError").classList.add("hide");
    }
    return isValid;
}