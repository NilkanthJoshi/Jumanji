document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const confirmationMessage = `Thank you, ${name}! Your safari has been booked for ${date} at ${time}.`;
    document.getElementById("confirmation-message").innerText = confirmationMessage;

    // Clear the form fields
    this.reset();
});
