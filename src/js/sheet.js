const scriptURL = 'https://script.google.com/macros/s/AKfycbwiR0lfcT0-w_kOFCnyTWUnzaa68la19t-ptzqt0ZkDrr3LofwRXIRDs_dYT5zOUdAf/exec';
const form = document.forms['bootcamp-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form data:', data); // Periksa apakah telepon ada di sini
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => response.json())
        .then(result => {
            alert("Thank you! Your form is submitted successfully.");
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

//dropdown
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
    const hiddenInput = dropdown.querySelector('input[type="hidden"]');

    select.addEventListener('click', function () {
        dropdown.classList.toggle('open');
    });

    menu.querySelectorAll('li').forEach(function (item) {
        item.addEventListener('click', function () {
            dropdown.querySelector('.selected').textContent = this.textContent;
            hiddenInput.value = this.textContent;
            dropdown.classList.remove('open');
            dropdown.querySelector('.menu li.active').classList.remove('active');
            this.classList.add('active');
        });
    });
});

// Menutup dropdown jika klik di luar elemen dropdown
document.addEventListener('click', function (e) {
    document.querySelectorAll('.dropdown').forEach(function (dropdown) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});
