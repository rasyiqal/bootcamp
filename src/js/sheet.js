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

