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
    formData["pembayaran"] = document.getElementById("pembayaran").value;
    formData["tgl"] = document.getElementById("tgl").value;
    formData["ttl"] = document.getElementById("ttl").value;
    formData["tr"] = document.getElementById("tr").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.pembayaran;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.tgl;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.ttl;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tr;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("pembayaran").value = "";
    document.getElementById("tgl").value = "";
    document.getElementById("ttl").value = "";
    document.getElementById("tr").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("pembayaran").value = selectedRow.cells[0].innerHTML;
    document.getElementById("tgl").value = selectedRow.cells[1].innerHTML;
    document.getElementById("ttl").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tr").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.pembayaran;
    selectedRow.cells[1].innerHTML = formData.tgl;
    selectedRow.cells[2].innerHTML = formData.ttl;
    selectedRow.cells[3].innerHTML = formData.tr;
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
    if (document.getElementById("pembayaran").value == "") {
        isValid = false;
        document.getElementById("pembayaranValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("pembayaranValidationError").classList.contains("hide"))
            document.getElementById("pembayaranValidationError").classList.add("hide");
    }
    return isValid;
}