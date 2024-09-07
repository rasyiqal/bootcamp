const scriptURL = 'https://script.google.com/macros/s/AKfycbwiR0lfcT0-w_kOFCnyTWUnzaa68la19t-ptzqt0ZkDrr3LofwRXIRDs_dYT5zOUdAf/exec';
const form = document.forms['bootcamp-form'];
const successModal = document.getElementById('success-modal');
const okButton = document.getElementById('ok-button');

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form data:', data); // Periksa apakah telepon ada di sini
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => response.json())
        .then(result => {
            successModal.classList.remove('hidden'); // Tampilkan modal
        })
        .catch(error => console.error('Error!', error.message));
});

okButton.addEventListener('click', () => {
    successModal.classList.add('hidden'); // Sembunyikan modal
    window.location.href = 'index.html'; // Reload halaman
});


// error mssg
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bootcamp-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (event) {
        // Clear previous error messages
        errorMessage.textContent = '';

        // Check if all required fields are filled
        let isValid = true;
        const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('border-red-500');
            } else {
                field.classList.remove('border-red-500');
            }
        });

        if (!isValid) {
            errorMessage.textContent = 'Mohon isi semua field yang diperlukan.';
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

// error msg email
const emailInput = document.getElementById('email');
const emailErrorContainer = document.getElementById('email-error-container');
const emailErrorMessage = document.getElementById('email-error');

emailInput.addEventListener('input', () => {
    const value = emailInput.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!isValid) {
        emailErrorContainer.classList.remove('hidden');
        emailErrorMessage.textContent = 'Masukkan alamat email yang valid.';
    } else {
        emailErrorContainer.classList.add('hidden');
    }
});

//error msg nomor wa
const input = document.getElementById('nomor');
const errorContainer = document.getElementById('error-container');
const errorMessage = document.getElementById('nomor-error');

input.addEventListener('input', () => {
    const value = input.value;
    const isValid = /^[0-9]{0,12}$/.test(value);

    if (!isValid) {
        errorContainer.classList.remove('hidden');
        errorMessage.textContent = 'Masukkan nomor yang valid dengan hanya angka dan maksimal 12 digit.';
    } else {
        errorContainer.classList.add('hidden');
    }
});

//error msg usia
const usiaInput = document.getElementById('usia');
const usiaErrorContainer = document.getElementById('usia-error-container');
const usiaErrorMessage = document.getElementById('usia-error');

usiaInput.addEventListener('input', () => {
    const value = usiaInput.value;
    const isValid = /^\d{1,2}$/.test(value) && value >= 0 && value <= 99;

    if (!isValid) {
        usiaErrorContainer.classList.remove('hidden');
        usiaErrorMessage.textContent = 'Masukkan usia yang valid (hanya angka, maksimal 2 digit).';
    } else {
        usiaErrorContainer.classList.add('hidden');
    }
});
