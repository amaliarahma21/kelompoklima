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
    formData["transaksi"] = document.getElementById("transaksi").value;
    formData["brg"] = document.getElementById("brg").value;
    formData["pembeli"] = document.getElementById("pembeli").value;
    formData["tgl"] = document.getElementById("tgl").value;
    formData["ket"] = document.getElementById("ket").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.transaksi;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.brg;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.pembeli;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tgl;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.ket;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("transaksi").value = "";
    document.getElementById("brg").value = "";
    document.getElementById("pembeli").value = "";
    document.getElementById("tgl").value = "";
    document.getElementById("ket").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("transaksi").value = selectedRow.cells[0].innerHTML;
    document.getElementById("brg").value = selectedRow.cells[1].innerHTML;
    document.getElementById("pembeli").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tgl").value = selectedRow.cells[3].innerHTML;
    document.getElementById("ket").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.transaksi;
    selectedRow.cells[1].innerHTML = formData.brg;
    selectedRow.cells[2].innerHTML = formData.pembeli;
    selectedRow.cells[3].innerHTML = formData.tgl;
    selectedRow.cells[4].innerHTML = formData.ket;
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
    if (document.getElementById("transaksi").value == "") {
        isValid = false;
        document.getElementById("transaksiValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("transaksiValidationError").classList.contains("hide"))
            document.getElementById("transaksiValidationError").classList.add("hide");
    }
    return isValid;
}