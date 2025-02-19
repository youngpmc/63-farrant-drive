console.log("booking.js has loaded successfully!");

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("bookingButton").addEventListener("click", submitBookingRequest);
});

    async function submitBookingRequest() {
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            startDate: document.getElementById('check-in').value,
            endDate: document.getElementById('check-out').value,
            adults: document.getElementById('adults').value,
            children: document.getElementById('children').value || 0,
            infants: document.getElementById('infants').value || 0
        };

        try {
            const response = await fetch('https://farrant-drive-a1f02247ac83.herokuapp.com/api/book', {  // Update with your Heroku API URL
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            document.getElementById('response-message').textContent = data.message;
        } catch (error) {
            console.error('Error submitting booking request:', error);
            document.getElementById('response-message').textContent = 'An error occurred. Please try again.';
        }
    }