let todoList = []; // Array untuk menyimpan daftar tugas

let todoname = document.getElementById('todo-name');
let btnsimpan = document.getElementById('btn-simpan');
let todocontainer = document.querySelector('.list-group');

btnsimpan.addEventListener('click', function () {
    if (todoname.value == '') {
        alert('Harus diisi');
    } else {
        // Menambahkan tugas baru ke dalam array
        todoList.push(todoname.value);

        // Membuat elemen tugas baru
        let todoItem = document.createElement('li');
        todoItem.className = 'list-group-item';

        let checkbox = document.createElement('input');
        checkbox.className = 'form-check-input me-1';
        checkbox.type = 'checkbox';

        let todoText = document.createTextNode(todoname.value);

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.className = 'badge border-0 bg-danger btn-hapus ';

        // Event listener untuk tombol hapus
        deleteButton.addEventListener('click', function () {
            // Menghapus tugas dari array
            todoList.splice(todoList.indexOf(todoname.value), 1);
            // Menghapus elemen tugas dari tampilan
            todocontainer.removeChild(todoItem);
        });

        // Event listener untuk centang
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                todoText.parentElement.style.textDecoration = 'line-through'; // Mengubah dekorasi teks menjadi coret
            } else {
                todoText.parentElement.style.textDecoration = 'none'; // Menghapus dekorasi coret saat checkbox tidak dicentang
            }
        });

        // Menggabungkan elemen-elemen menjadi satu elemen tugas
        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);

        // Menambahkan elemen tugas baru ke dalam tampilan
        todocontainer.appendChild(todoItem);

        todoname.value = ''; // Membersihkan nilai input 'todo-name' setelah ditambahkan ke list
        todoname.focus();
    }
});