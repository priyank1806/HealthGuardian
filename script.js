document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const reason = document.getElementById('reason').value;

    // Confirmation message
    const confirmationMessage = `Thank you, ${name}! Your appointment is scheduled for ${date} at ${time}. Reason: ${reason}. We will contact you at ${email}.`;

    // Display confirmation
    document.getElementById('confirmationMessage').innerText = confirmationMessage;
    document.getElementById('confirmation').style.display = 'block';

    // Reset form
    document.getElementById('appointmentForm').reset();
});
