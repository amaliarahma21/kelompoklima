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
    formData["barang"] = document.getElementById("barang").value;
    formData["nama"] = document.getElementById("nama").value;
    formData["harga"] = document.getElementById("harga").value;
    formData["stok"] = document.getElementById("stok").value;
    formData["sp"] = document.getElementById("sp").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.barang;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nama;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.harga;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.stok;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.sp;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("barang").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("stok").value = "";
    document.getElementById("sp").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("barang").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nama").value = selectedRow.cells[1].innerHTML;
    document.getElementById("harga").value = selectedRow.cells[2].innerHTML;
    document.getElementById("stok").value = selectedRow.cells[3].innerHTML;
    document.getElementById("sp").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.barang;
    selectedRow.cells[1].innerHTML = formData.nama;
    selectedRow.cells[2].innerHTML = formData.harga;
    selectedRow.cells[3].innerHTML = formData.stok;
    selectedRow.cells[4].innerHTML = formData.sp;
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
    if (document.getElementById("barang").value == "") {
        isValid = false;
        document.getElementById("barangValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("barangValidationError").classList.contains("hide"))
            document.getElementById("barangValidationError").classList.add("hide");
    }
    return isValid;
}