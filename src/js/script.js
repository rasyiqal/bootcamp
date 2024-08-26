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
